import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLoggedOutReroute = () => {
  const navigate = useNavigate();

  return useEffect(() => {
    if (localStorage.getItem("user_id") == null) {
      navigate("/login");
    }
  });
}

export default useLoggedOutReroute;
