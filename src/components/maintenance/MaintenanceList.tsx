import { useState } from "react";

interface Props {
  className?: string;
}

const MaintenanceList = ({ className }: Props) => {
  let items = ["dummy1", "dummy2", "dummy3"];

  const [selectedIndex, setSelectedIndex] = useState(-1); // state for the highlighting of the list element

  // need to use id for key when hooked up to db
  /*
  Takes each element in items and maps it to a <li> element and give it an index.
  On click, it highlights the element. If already highlighted, un-highlights.
  */
  return (
    <>
      <ul className={className + " list-group m-2"}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              index === selectedIndex
                ? setSelectedIndex(-1)
                : setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MaintenanceList;
