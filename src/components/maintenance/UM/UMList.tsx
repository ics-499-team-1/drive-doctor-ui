import { useContext, useState } from "react";
import UMEntity from "../../../models/maintenance/UMEntity";
import UMContext from "../../Contexts/UMContext";
import { SimpleGrid } from "@chakra-ui/react";
import VehicleContext from "../../Contexts/VehicleContext";

interface Props {
  upcomingList: UMEntity[];
}

/** This is the list that is displayed in the Maintenance tab for Upcoming Maintenance tasks.
 * It currently receives a list of UMEntity (Upcoming Maintenance Entities) from Maintenance.
 * When a list item is selected, it sets the UMContext to that list item, which can then be used in other components in the maintenance tree.
 */
const UMList = ({ upcomingList }: Props) => {
  const { setUMContext } = useContext(UMContext);
  const { vehicleContext } = useContext(VehicleContext);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function mileageDisplaySelect(mileInt: number) {
    if (mileInt !== null) {
      if (mileInt > vehicleContext.odometer) {
        return <p>Miles to service: {mileInt - vehicleContext.odometer}</p>;
      } else if (mileInt < vehicleContext.odometer) {
        return (
          <p className="text-danger">
            {" "}
            {vehicleContext.odometer - mileInt} miles overdue
          </p>
        );
      }
    }
  }

  function dateDisplaySelect(timeInterval: string) {
    if (timeInterval === "") {
      return <></>;
    } else {
      return "Service Date: " + timeInterval;
    }
  }

  return (
    <>
      <ul
        style={{ maxHeight: "50vh" }}
        className={"container-fluid overflow-auto list-group m-2"}
      >
        {upcomingList.map((UME, index) => {
          let className = "list-group-item bg-dark text-white";
          if (selectedIndex === index) {
            className += " active";
          }
          return (
            <li
              className={className}
              key={index}
              onClick={() => {
                if (index === selectedIndex) {
                  setSelectedIndex(-1);
                  setUMContext(new UMEntity());
                } else {
                  setSelectedIndex(index);
                  setUMContext(UME);
                }
              }}
            >
              <SimpleGrid columns={2}>
                <p>Name: {UME.name}</p>{" "}
                {UME.mileage_interval
                  ? mileageDisplaySelect(UME.mileage_interval)
                  : dateDisplaySelect(UME.time_interval)}
                {index === selectedIndex && (
                  <>
                    {UME.mileage_interval ? (
                      <p>{dateDisplaySelect(UME.time_interval)}</p>
                    ) : (
                      <></>
                    )}
                    <p>Notes: {UME.notes}</p>
                    <p>ID: {UME.upcoming_maintenance_id}</p>
                  </>
                )}
              </SimpleGrid>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UMList;
