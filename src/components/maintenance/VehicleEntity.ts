import CMEntity from "../../models/maintenance/CMEntity";
import UMEntity from "../../models/maintenance/UMEntity";

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
  odometer: number;
  license_plate_number?: string | null;
  vin?: string | null;
  deactivated?: boolean | null;
  upcoming_maintenance: UMEntity[];
  completed_maintenance: CMEntity[];

  constructor(
    vehicle_id: number,
    upcoming_maintenance: UMEntity[],
    completed_maintenance: CMEntity[],
    odometer: number,
  );
  constructor(
    vehicle_id: number,
    upcoming_maintenance: UMEntity[],
    completed_maintenance: CMEntity[],
    odometer: number,
    name?: string,
    year?: number,
    make?: string,
    model?: string,
    trim?: string,
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
