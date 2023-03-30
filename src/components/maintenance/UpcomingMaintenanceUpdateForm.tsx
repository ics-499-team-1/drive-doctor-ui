import { FormEvent, useRef } from "react";
import MaintenanceButton from "./MaintenanceButton";
import UpcomingMaintenanceEntity from './UpcomingMaintenanceEntity';

interface Props {
    uME: UpcomingMaintenanceEntity;
}

const UpcomingMaintenanceUpdateForm = ({ uME }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);

  /* On submit, if the reference to the input element is not null, then it
  replaces the property that was passed in. If it's null, the property is set to null
  Except for name, which is required
  */
  let uMEL = {...uME};
  const handleSubmitUpdate = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null)
      uMEL.name = nameRef.current.value;
    notesRef.current !== null
      ? (uMEL.notes = notesRef.current.value)
      : (uMEL.notes = "");
      pictureRef.current !== null
      ? (uMEL.pictures = pictureRef.current.value)
      : (uMEL.pictures = "");
      mileageIntervalRef.current !== null
      ? (uMEL.mileageInterval = parseInt(mileageIntervalRef.current.value))
      : (uMEL.mileageInterval = 0);
      timeIntervalRef.current !== null
      ? (uMEL.timeInterval = timeIntervalRef.current.value)
      : (uMEL.timeInterval = "");

      console.log(uMEL);
  };

  return (
    <form onSubmit={handleSubmitUpdate}>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input className="form-control" defaultValue={uMEL.name} id="name" ref={nameRef} required={true} type="text"  />
      </div>
      <div className="mb-2">
        <label htmlFor="notes" className="form-label">
          Notes
        </label>
        <input className="form-control" defaultValue={uMEL.notes ? uMEL.notes : ""} id="notes" ref={notesRef} type="text"  />
      </div>
      <div className="mb-2">
        <label htmlFor="pictures" className="form-label">
          Pictures
        </label>
        <input className="form-control" defaultValue={uMEL.pictures ? uMEL.pictures : ""} id="pictures" ref={pictureRef} type="text" />
      </div>
      <div className="mb-2">
        <label htmlFor="mileageInterval" className="form-label">
          Mileage Interval
        </label>
        <input className="form-control" defaultValue={uMEL.mileageInterval ? uMEL.mileageInterval : ""} id="mileageInterval" ref={mileageIntervalRef} type="number" />
      </div>
      <div className="mb-2">
        <label htmlFor="timeInterval" className="form-label">
          Time Interval
        </label>
        <input className="form-control" defaultValue={uMEL.timeInterval ? uMEL.timeInterval : ""} id="timeInterval" ref={timeIntervalRef} type="text" />
      </div>
      <MaintenanceButton className={"mb-2"}>Submit</MaintenanceButton>
    </form>
  );
};

export default UpcomingMaintenanceUpdateForm;
