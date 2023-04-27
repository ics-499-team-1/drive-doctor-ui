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
  const { uMContext, setUMContext } = useContext(UMContext);
  const { vehicleContext } = useContext(VehicleContext);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function mileServiceDisplay(odometer: number, mileageInt: number) {
    if (mileageInt !== null) {
      if (mileageInt > odometer) {
        return <p>Miles to service: {mileageInt - odometer}</p>;
      } else if (mileageInt < odometer) {
        return (
          <p className="text-danger"> {odometer - mileageInt} miles overdue</p>
        );
      }
    }
  }

  function timeServiceDisplay(timeInt: string) {
    if (timeInt !== null) {
      return "Service by: " + timeInt;
    }
  }

  function selectServiceDisplay(mileInt: number, timeInt: string) {
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
    } else if (timeInt != "none") {
      return "Service by: " + timeInt;
    } else {
      return <></>
    }
  }

  return (
    <>
      <ul style={{ maxHeight: "800px" }} className={"overflow-auto list-group m-2"}>
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
                {selectServiceDisplay(UME.mileage_interval, UME.time_interval)}
                {index === selectedIndex && (
                  <>
                    <p>ID: {UME.upcoming_maintenance_id}</p>
                    <p>Notes: {UME.notes}</p>
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
