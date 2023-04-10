import { useContext, useState } from "react";
import UMEntity from "./UMEntity";
import UMContext from "./UMContext";

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
  console.log("from UMList: ", upcomingList);

  console.log("from UMList: uMContext:", uMContext);

  return (
    <>
      <ul className={"list-group m-2"}>
        {upcomingList.map((UME, index) => (
          <li
            className={
              (selectedIndex === index
                ? "list-group-item active"
                : "list-group-item") + " d-flex justify-content-between"
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
            <div>{UME.name} </div>
            <div>
              Mileage Interval:{" "}
              {UME.mileage_interval ? UME.mileage_interval : "none"}
            </div>
            {index === selectedIndex && (
              <div>
                Notes: {UME.notes ? UME.notes : "none"}
                Pictures: {UME.pictures ? UME.pictures : "none"} ID:{" "}
                {UME.upcoming_maintenance_id}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UMList;
