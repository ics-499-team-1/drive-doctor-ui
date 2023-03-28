import CompletedMaintenance from "./CompletedMaintenance";
import UpcomingMaintenance from "./UpcomingMaintenance";

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
