import CompletedMaintenance from "./CompletedMaintenance";
import UpcomingMaintenance from "./UpcomingMaintenance";

const Maintenance = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <UpcomingMaintenance />
          </div>
          <div className="col">
            <CompletedMaintenance />
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
