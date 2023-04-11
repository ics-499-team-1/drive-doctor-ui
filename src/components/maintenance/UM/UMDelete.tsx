import { useContext, useEffect } from "react";
import UMContext from "./UMContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Deletes an upcoming maintenance entity from the DB.
 */
const UMDelete = () => {
  const { uMContext } = useContext(UMContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/" +
        uMContext.upcoming_maintenance_id
    );
    navigate("/maintenance/");
  }, []);
  
  return <div />;
 
};

export default UMDelete;
