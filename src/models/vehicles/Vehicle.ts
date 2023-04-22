export interface Vehicle {
    vehicle_id: number,
    name: string,
    year: number,
    make: string,
    model: string,
    trim: string,
    odometer: number,
    license_plate: string | undefined,
    vin: string | undefined,
    deactivated: boolean
}

export default Vehicle
