
  interface UpcomingMaintenanceEntity {
    upcomingMaintenanceId: number;
    name: string;
    notes: string;
    pictures: string;
    mileageInterval: number;
    timeInterval: string;
    mileageReminder: boolean;
    timeReminder: boolean;
  }

  export default UpcomingMaintenanceEntity;