import { SimpleGrid, Button } from "@chakra-ui/react";

function Header() {
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
        <button className="btnLogOut" style={{ margin: 10, marginRight: 20 }}>
          Log Out
        </button>
      </div>
    </SimpleGrid>
  );
}

export default Header;
