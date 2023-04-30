import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetToken } from "../services/LocalStorageService";

const checkLogin = () => {
  const navigate = useNavigate();

  return useEffect(() => {
    if (GetToken() === null) {
      navigate("/login");
    }
  });
}
export default checkLogin;
