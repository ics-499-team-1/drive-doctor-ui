import { useContext, useEffect } from "react";
import CMContext from "../../Contexts/CMContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authHeader from "../../../models/auth/AuthHeader";
import { GetToken } from "../../../services/LocalStorageService";

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
        cMContext.completed_maintenance_id, authHeader(GetToken())
    );
    navigate("/maintenance/");
  }, []);

  return <div>Delete</div>;
};

export default UMDelete;
