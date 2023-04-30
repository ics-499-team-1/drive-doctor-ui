import Trip from "./Trip";

export default interface MilesByVehicle {
    vehicle_id: number,
    vehicle_name: string,
    total_miles: number;
    trips: Trip[]
}
