import CompletedMaintenance from "./CM/CompletedMaintenance";
import UpcomingMaintenance from "./UM/UpcomingMaintenance";

const Maintenance = () => {
  return (
    <>
      <div className="container text-center row align-items-start ">
        <div className="col  m-2" >
          <UpcomingMaintenance />
        </div>
        <div className="col m-2">
          <CompletedMaintenance />
        </div>
      </div>
    </>
  );
};

export default Maintenance;
