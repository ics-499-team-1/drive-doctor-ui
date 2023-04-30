import { useContext, useEffect } from "react";
import UMContext from "../../Contexts/UMContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authHeader from "../../../models/auth/AuthHeader";
import { GetToken } from "../../../services/LocalStorageService";

/**
 * Deletes an upcoming maintenance entity from the DB.
 */
const UMDelete = () => {
  const { uMContext } = useContext(UMContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/" +
        uMContext.upcoming_maintenance_id, authHeader(GetToken())
    );
    navigate("/maintenance/");
  }, []);
  
  return <div />;
 
};

export default UMDelete;
