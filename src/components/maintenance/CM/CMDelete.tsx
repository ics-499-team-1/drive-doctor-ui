import { useContext, useEffect } from "react";
import CMContext from "./CMContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 *
 * @returns Deletes the selected completed maintenance entity from the DB.
 */
const UMDelete = () => {
  const { cMContext } = useContext(CMContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(
      "http://localhost:8080/drive-doctor/v1/maintenance/completed-maintenance/" +
        cMContext.completed_maintenance_id
    );
    navigate("/maintenance/");
  }, []);

  return <div>Delete</div>;
};

export default UMDelete;
