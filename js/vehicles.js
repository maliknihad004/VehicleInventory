export function filterVehicles(vehicles, filters) {
    return vehicles.filter(vehicle => {
        const searchText = `${vehicle.brand} ${vehicle.model}`.toLowerCase();

        const matchSearch = searchText.includes(filters.search.toLowerCase());
        const matchBrand = filters.brand === "" || vehicle.brand === filters.brand;
        const matchStatus = filters.status === "" || vehicle.status === filters.status;
        const matchMin = filters.minPrice === "" || vehicle.price >= Number(filters.minPrice);
        const matchMax = filters.maxPrice === "" || vehicle.price <= Number(filters.maxPrice);

        return matchSearch && matchBrand && matchStatus && matchMin && matchMax;
    });
}
