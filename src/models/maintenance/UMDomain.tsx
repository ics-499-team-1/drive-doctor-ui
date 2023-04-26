/**
 * Used to add a UM to the DB
 */
class UMDomain {
  name: string;
  notes?: string;
  mileage_interval?: number;
  time_interval?: string;
  mileage_reminder?: boolean;
  time_reminder?: boolean;

  constructor(name: string);
  constructor(
    name: string,
    notes?: string,
    mileage_interval?: number,
    time_interval?: string,
    mileage_reminder?: boolean,
    time_reminder?: boolean
  ) {
    this.name = name;
    this.notes = notes;
    this.mileage_interval = mileage_interval;
    this.time_interval = time_interval;
    this.mileage_reminder = mileage_reminder;
    this.time_reminder = time_reminder;
  }
}

export default UMDomain;
