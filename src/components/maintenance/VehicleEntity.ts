import CMEntity from "./CM/CMEntity";
import UMEntity from "./UM/UMEntity";

/**
 * Used to store a vehicle Entity in a global context.
 */
class VehicleEntity {
  vehicle_id: number;
  name?: string | null;
  year?: number | null;
  make?: string | null;
  model?: string | null;
  trim?: string | null;
  odometer?: number | null;
  license_plate_number?: string | null;
  vin?: string | null;
  deactivated?: boolean | null;
  upcoming_maintenance: UMEntity[];
  completed_maintenance: CMEntity[];

  constructor(
    vehicle_id: number,
    upcoming_maintenance: UMEntity[],
    completed_maintenance: CMEntity[]
  );
  constructor(
    vehicle_id: number,
    upcoming_maintenance: UMEntity[],
    completed_maintenance: CMEntity[],
    name?: string,
    year?: number,
    make?: string,
    model?: string,
    trim?: string,
    odometer?: number,
    license_plate_number?: string,
    vin?: string,
    deactivated?: boolean
  ) {
    this.vehicle_id = vehicle_id;
    this.name = name;
    this.year = year;
    this.make = make;
    this.model = model;
    this.trim = trim;
    this.odometer = odometer;
    this.license_plate_number = license_plate_number;
    this.vin = vin;
    this.deactivated = deactivated;
    this.upcoming_maintenance = upcoming_maintenance;
    this.completed_maintenance = completed_maintenance;
  }
}

export default VehicleEntity;
