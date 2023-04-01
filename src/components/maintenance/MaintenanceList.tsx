import { useEffect, useState } from "react";
import axios from "axios";
import UpcomingMaintenanceEntity from "./UM/UMEntity";

interface Props {
  className?: string;
  uMEList: UpcomingMaintenanceEntity[] | null;
}

const MaintenanceList = ({ className, uMEList }: Props) => {
  const uMEntities: UpcomingMaintenanceEntity[] = uMEList ? uMEList : [];

  const [selectedIndex, setSelectedIndex] = useState(-1); // state for the highlighting of the list element

  /*
  Takes each element in items and maps it to a <li> element and give it an index.
  On click, it highlights the element. If already highlighted, un-highlights.
  COULD SET SELECTED TO ID*/
  return (
    <>
      <ul className={className + " list-group m-2"}>
        {uMEntities.map((UME, index) => (
          <li
            className={
              (selectedIndex === index
                ? "list-group-item active"
                : "list-group-item") + " d-flex justify-content-between"
            }
            key={index}
            onClick={() => {
              index === selectedIndex
                ? setSelectedIndex(-1)
                : setSelectedIndex(index);
            }}
          >
            {UME.name} <div>{UME.mileage_interval ? UME.mileage_interval : "none"}</div>
          </li> // Not sure why the compiler throws an error here, seems to work
        ))}
      </ul>
    </>
  );
};

export default MaintenanceList;
