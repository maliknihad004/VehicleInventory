export async function getVehicles() {
    const response = await fetch("./vehicles.json");

    if (!response.ok) {
        throw new Error("Could not load vehicle data.");
    }

    return await response.json();
}
