/**
 * Its a CMEntity.
 */
class CMEntity {
  completed_maintenance_id: number;
  name?: string;
  notes?: string;
  pictures?: string;
  date?: string;
  mileage?: number;
  service_center?: string;
  mechanics?: string;
  total_cost?: number;

  constructor(completed_maintenance_id: number);
  constructor(
    completed_maintenance_id: number,
    name?: string,
    notes?: string,
    pictures?: string,
    date?: string,
    mileage?: number,
    service_center?: string,
    mechanics?: string,
    total_cost?: number
  ) {
    this.completed_maintenance_id = completed_maintenance_id;
    this.name = name;
    this.notes = notes;
    this.pictures = pictures;
    this.date = date;
    this.mileage = mileage;
    this.service_center = service_center;
    this.mechanics = mechanics;
    this.total_cost = total_cost;
  }
}
export default CMEntity;
