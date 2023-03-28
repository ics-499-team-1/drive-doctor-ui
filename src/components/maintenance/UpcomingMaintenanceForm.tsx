import { FormEvent, useRef } from "react";
import MaintenanceButton from "./MaintenanceButton";

const UpcomingMaintenanceForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);

  interface UpcomingMaintenanceEntity {
    upcomingMaintenanceId: number;
    name: string;
    notes: null | string;
    picture: null | string;
    mileageInterval: null | number;
    timeInterval: null | string;
    mileageReminder: boolean;
    timeReminder: boolean;
  }

  const upcomingMaintenanceEntity: UpcomingMaintenanceEntity = {
    upcomingMaintenanceId: 0,
    name: "",
    notes: null,
    picture: null,
    mileageInterval: null,
    timeInterval: null,
    mileageReminder: false,
    timeReminder: false,
  };

  const handleSubmit = (event: FormEvent) => {
    if (nameRef.current !== null)
      upcomingMaintenanceEntity.name = nameRef.current.value;
    notesRef.current !== null
      ? (upcomingMaintenanceEntity.notes = notesRef.current.value)
      : (upcomingMaintenanceEntity.notes = null);
      pictureRef.current !== null
      ? (upcomingMaintenanceEntity.picture = pictureRef.current.value)
      : (upcomingMaintenanceEntity.picture = null);
      mileageIntervalRef.current !== null
      ? (upcomingMaintenanceEntity.mileageInterval = parseInt(mileageIntervalRef.current.value))
      : (upcomingMaintenanceEntity.mileageInterval = null);
      timeIntervalRef.current !== null
      ? (upcomingMaintenanceEntity.timeInterval = timeIntervalRef.current.value)
      : (upcomingMaintenanceEntity.timeInterval = null);

      console.log(upcomingMaintenanceEntity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input className="form-control" id="name" ref={nameRef} required={true} type="text"  />
      </div>
      <div className="mb-2">
        <label htmlFor="notes" className="form-label">
          Notes
        </label>
        <input id="notes" ref={notesRef} type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="pictures" className="form-label">
          Pictures
        </label>
        <input id="pictures" ref={pictureRef} type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="mileageInterval" className="form-label">
          Mileage Interval
        </label>
        <input id="mileageInterval" ref={mileageIntervalRef} type="number" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="timeInterval" className="form-label">
          Time Interval
        </label>
        <input id="timeInterval" ref={timeIntervalRef} type="text" className="form-control" />
      </div>
      <MaintenanceButton className={"mb-2"}>Submit</MaintenanceButton>
    </form>
  );
};

export default UpcomingMaintenanceForm;
