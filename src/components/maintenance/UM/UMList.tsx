import { useContext, useState } from "react";
import UMEntity from "./UMEntity";
import UMContext from "./UMContext";
import { SimpleGrid } from "@chakra-ui/react";
import VehicleContext from "../VehicleContext";

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

  return (
    <>
      <ul className={"list-group m-2"}>
        {upcomingList.map((UME, index) => {
          let className = "list-group-item";
          if (selectedIndex === index && vehicleContext.odometer < UME.mileage_interval) {
            className += " active";
          }
          else if (vehicleContext.odometer > UME.mileage_interval) {
            className += " bg-danger";
          } else {
            " bg-dark";
          }
          return (
            <li
              className={className}
              key={index}
              onClick={() => {
                if (index === selectedIndex) {
                  setSelectedIndex(-1);
                  setUMContext(new UMEntity(-1, -1));
                } else {
                  setSelectedIndex(index);
                  setUMContext(UME);
                }
              }}
            >
              <SimpleGrid columns={2}>
                <p>Name: {UME.name}</p>{" "}
                <p>Miles to Service: {UME.mileage_interval - vehicleContext.odometer}</p>
                {index === selectedIndex && (
                  <>
                    <p>Notes: {UME.notes}</p>{" "}
                    <p>ID: {UME.upcoming_maintenance_id}</p>
                    <p>Time Interval: {UME.time_interval}</p>
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
