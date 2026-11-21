const vehicleList = document.getElementById("vehicle-list");
const vehicleDetails = document.getElementById("vehicle-details");

export function renderVehicles(vehicles) {
    vehicleList.innerHTML = "";

    if (vehicles.length === 0) {
        vehicleList.innerHTML = '<p>No vehicles match your filters.</p>';
        return;
    }

    vehicles.forEach(vehicle => {
        vehicleList.innerHTML += `
            <div class="col-md-6">
                <button type="button" class="card vehicle-card w-100 h-100 text-start" data-id="${vehicle.id}">
                    <div class="card-body">
                        <h3 class="h5 card-title">${vehicle.brand} ${vehicle.model}</h3>
                        <p class="card-text mb-1">Year: ${vehicle.year}</p>
                        <p class="card-text mb-1">Price: ${vehicle.price} NIS</p>
                        <p class="card-text mb-1">Mileage: ${vehicle.mileage} km</p>
                        <p class="card-text mb-0">Availability: ${vehicle.status}</p>
                    </div>
                </button>
            </div>
        `;
    });
}

export function renderVehicleDetails(vehicle) {
    vehicleDetails.innerHTML = `
        <h3 class="h5">${vehicle.brand} ${vehicle.model}</h3>
        <p>Year: ${vehicle.year}</p>
        <p>Price: ${vehicle.price} NIS</p>
        <p>Mileage: ${vehicle.mileage} km</p>
        <p>Color: ${vehicle.color}</p>
        <p class="mb-0">Availability: ${vehicle.status}</p>
    `;
}

export function showLoading(isLoading) {
    document.getElementById("loading").classList.toggle("d-none", !isLoading);
}

export function showError(message) {
    const error = document.getElementById("error");
    error.textContent = message;
    error.classList.toggle("d-none", message === "");
}
