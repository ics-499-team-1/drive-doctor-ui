/**
 * Used to add a CM to the DB
 */
class CMDomain {
  name: string;
  notes?: string;
  pictures?: string;
  date?: string;
  mileage?: number;
  service_center?: string;
  mechanics?: string;
  total_cost?: number;

  constructor(name: string);
  constructor(
    name: string,
    notes?: string,
    pictures?: string,
    date?: string,
    mileage?: number,
    service_center?: string,
    mechanics?: string,
    total_cost?: number
  ) {
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

export default CMDomain;
