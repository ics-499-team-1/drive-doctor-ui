import { useContext, useState } from "react";
import UMEntity from "./UMEntity";
import UMContext from "./UMContext";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  upcomingList: UMEntity[];
}

/** This is the list that is displayed in the Maintenance tab for Upcoming Maintenance tasks.
 * It currently receives a list of UMEntity (Upcoming Maintenance Entities) from Maintenance. Could be changed
 * to use the vehicleContext.upcoming_maintenance.
 * When a list item is selected, it sets the UMContext to that list item, which can then be used in other components in the maintenance tree.
 */
const UMList = ({ upcomingList }: Props) => {
  const { uMContext, setUMContext } = useContext(UMContext);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className={"list-group m-2"}>
        {upcomingList.map((UME, index) => (
          <li
            className={
              (selectedIndex === index
                ? "list-group-item active"
                : "list-group-item")
            }
            key={index}
            onClick={() => {
              if (index === selectedIndex) {
                setSelectedIndex(-1);
                setUMContext(new UMEntity(-1));
              } else {
                setSelectedIndex(index);
                setUMContext(UME);
              }
            }}
          >
              <SimpleGrid columns={2}>
                <p>Name: {UME.name}</p> <p>Mileage Interval: {UME.mileage_interval}</p>
                {index === selectedIndex && (
                  <>
                    <p>Notes: {UME.notes}</p>{" "}
                    <p>ID: {UME.upcoming_maintenance_id}</p>
                    <p>Time Interval: {UME.time_interval}</p>
                    <p> Notes: {UME.notes} </p>
                    <p> Pictures: {UME.pictures}</p>
                  </>
                )}
              </SimpleGrid>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UMList;
