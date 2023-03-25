const MaintenanceList = () => {
  let items = ["dummy1", "dummy2", "dummy3"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>  // need to use id for key when hooked to database
        ))}
      </ul>
    </>
  );
};

export default MaintenanceList;
