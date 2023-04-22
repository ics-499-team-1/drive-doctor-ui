import { SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  const onClick = () => {
    localStorage.clear();
    navigate("/login")
  };

  return (
    <SimpleGrid columns={2}>
      <div style={{ display: "flex" }}>
        <img
          src="/images/drive_doctor_logo.png"
          alt="logo"
          style={{ width: 50, maxHeight: 100 }}
        />
        <img
          src="/images/drive_doctor_text.png"
          alt="text"
          style={{ width: 50, maxHeight: 100 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="btnLogOut"
          onClick={onClick}
          style={{ margin: 10, marginRight: 20 }}
        >
          Log Out
        </button>
      </div>
    </SimpleGrid>
  );
}

export default Header;
