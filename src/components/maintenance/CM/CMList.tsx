import { useContext, useState, useEffect } from "react";
import CMContext from "../../Contexts/CMContext";
import CMEntity from "../../../models/maintenance/CMEntity";
import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  completedList: CMEntity[];
}

/**
 * This is the list displayed under the Completed Maintenance column.
 * @param completedList - the CMEntity list passed in by maintenance
 * @returns
 */
const CMList = ({ completedList }: Props) => {
  const { setCMContext } = useContext(CMContext);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
            <ul style={{ maxHeight: "400px" }} className={"overflow-auto list-group m-2"}>
        {completedList.map((CME, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item bg-dark text-white active"
                : "list-group-item bg-dark text-white"
            }
            key={index}
            onClick={() => {
              if (index === selectedIndex) {
                setSelectedIndex(-1);
                setCMContext(new CMEntity(-1));
              } else {
                setSelectedIndex(index);
                setCMContext(CME);
              }
            }}
          >
              <SimpleGrid columns={2}>
                <p>Name: {CME.name}</p> <p>Date Completed: {CME.date}</p>
                {index === selectedIndex && (
                  <>
                    <p>Mileage: {CME.mileage}</p>{" "}
                    <p>ID: {CME.completed_maintenance_id}</p>
                    <p>Service Center: {CME.service_center}</p>
                    <p>Mechanics: {CME.mechanics}</p>
                    <p>Total Cost: {CME.total_cost}</p>
                    <p> Notes: {CME.notes} </p>
                  </>
                )}
              </SimpleGrid>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CMList;
