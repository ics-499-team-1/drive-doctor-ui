import { SimpleGrid, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

type Props = {
  onNavChange: (setNav: boolean) => void
}

function Header(props: Props) {

  const navigate = useNavigate();

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
          style={{ margin: 10, marginRight: 20 }}
          onClick={() => {localStorage.setItem("user_id", "");
          localStorage.setItem("access_token", "");
          props.onNavChange(false);
          navigate("/login")}
      }
        >
          Log Out
        </button>
      </div>
    </SimpleGrid>
  );
}

export default Header;
