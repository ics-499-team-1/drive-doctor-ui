import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserId } from "../services/LocalStorageService";

const useLoggedInReroute = () => {
  const navigate = useNavigate();

  return useEffect(() => {
    if (GetUserId() !== null) {
      navigate("/");
    }
  });
}

export default useLoggedInReroute;
