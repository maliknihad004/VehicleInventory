import { getVehicles } from "./api.js";
import { filterVehicles } from "./vehicles.js";
import { renderVehicles, renderVehicleDetails, showLoading, showError } from "./ui.js";

let vehicles = [];

function applyFilters() {
    const filters = {
        search: document.getElementById("search").value.trim(),
        brand: document.getElementById("brand").value,
        status: document.getElementById("status").value,
        minPrice: document.getElementById("minPrice").value,
        maxPrice: document.getElementById("maxPrice").value
    };

    renderVehicles(filterVehicles(vehicles, filters));
}

document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("brand").addEventListener("change", applyFilters);
document.getElementById("status").addEventListener("change", applyFilters);
document.getElementById("minPrice").addEventListener("input", applyFilters);
document.getElementById("maxPrice").addEventListener("input", applyFilters);

document.getElementById("resetFilters").addEventListener("click", () => {
    document.getElementById("filters").reset();
    applyFilters();
});

document.getElementById("vehicle-list").addEventListener("click", event => {
    const card = event.target.closest(".vehicle-card");

    if (card) {
        const vehicle = vehicles.find(vehicle => vehicle.id === Number(card.dataset.id));
        if (vehicle) {
            renderVehicleDetails(vehicle);
        }
    }
});

async function loadVehicles() {
    showLoading(true);
    showError("");

    try {
        vehicles = await getVehicles();
        renderVehicles(vehicles);
    } catch (error) {
        showError("Could not load vehicle data.");
    } finally {
        showLoading(false);
    }
}

loadVehicles();
