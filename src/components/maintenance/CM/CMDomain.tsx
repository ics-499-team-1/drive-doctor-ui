class CompletedMaintenanceEntity {
  maintenance_Id: number;
  date?: string | null;
  mechanics?: string | null;
  mileage?: number | null;
  name?: string | null;
  notes?: string | null;
  pictures?: string | null;
  service_center?: string | null;
  total_cost?: number | null;

  constructor(maintenance_Id: number);
  constructor(
    maintenance_Id: number,
    name?: string,
    date?: string,
    mechanics?: string,
    mileage?: number,
    notes?: string,
    pictures?: string,
    service_center?: string,
    total_cost?: number
  ) {
    this.maintenance_Id = maintenance_Id;
    this.date = date;
    this.name = name;
    this.mechanics = mechanics;
    this.mileage = mileage;
    this.notes = notes;
    this.pictures = pictures;
    this.service_center = service_center;
    this.total_cost = total_cost;
  }
}

export default CompletedMaintenanceEntity;
