import Trip from "../trips/Trip"

export interface UserVehiclesResponse {
    vehicle_id: number,
    name: string,
    year: number,
    make: string,
    model: string,
    trim: string,
    odometer: number,
    license_plate_number: string,
    vin: string,
    deactivated: false,
    trips: Array<Trip>,
    upcoming_maintenance: any,
    completed_maintenance: any
}
