/**
 * Holds the UpcomingMaintenance Entity data imported from the DB
 */
class UMEntity {
  upcoming_maintenance_id: number;
  mileage_interval?: number | undefined;
  mileage_reminder?: boolean | undefined;
  name?: string;
  notes?: string | undefined;
  pictures?: string | undefined;
  time_interval?: string | undefined;
  time_reminder?: boolean | undefined;

  constructor(upcoming_maintenance_id: number);
  constructor(
    upcoming_maintenance_id: number,
    mileage_interval?: number,
    mileage_reminder?: boolean,
    name?: string,
    notes?: string,
    pictures?: string,
    time_interval?: string,
    time_reminder?: boolean
  ) {
    this.upcoming_maintenance_id = upcoming_maintenance_id;
    this.mileage_interval = mileage_interval;
    this.mileage_reminder = mileage_reminder;
    this.name = name;
    this.notes = notes;
    this.pictures = pictures;
    this.time_interval = time_interval;
    this.time_reminder = time_reminder;
  }
}

export default UMEntity;
