import {useContext, useState, useEffect} from 'react';
import CMContext from './CMContext';
import CMEntity from './CMEntity';
import axios from 'axios';

interface Props {
  completedList: CMEntity[];
}

/**
 * This is the list displayed under the Completed Maintenance column.
 * Currently is passed in a list, could use the global context if properly configured.
 * @param completedList - the CMEntity list passed in by maintenance
 * @returns 
 */
const CMList = ({completedList} : Props) => {

    const {cMContext, setCMContext} = useContext(CMContext);
    const [selectedIndex, setSelectedIndex] = useState(-1);
 
  return (
    <>
    <ul className={"list-group m-2"}>
    {completedList.map((CME, index) => (
      <li
        className={
          (selectedIndex === index
            ? "list-group-item active"
            : "list-group-item") + " d-flex justify-content-between"
        }
        key={index}
        onClick={() => {
          if(index === selectedIndex) {
            setSelectedIndex(-1);
            setCMContext(new CMEntity(-1));
          } else {
            setSelectedIndex(index);
            setCMContext(CME);
          }
        }}
      >
        <div>{CME.name}{" "}</div>
        <div>Mileage Interval: {CME.mileage ? CME.mileage : "none"}</div>
        {index === selectedIndex && <div>Notes: {CME.notes ? CME.notes : 'none'}
        Pictures: {CME.pictures ? CME.pictures : 'none'} ID: {CME.completed_maintenance_id}</div>}
      </li>
      
    ))}
  </ul>
</>
  )
}

export default CMList;
