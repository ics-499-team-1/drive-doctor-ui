import { Flex, SimpleGrid } from "@chakra-ui/react";

const imageText = document.getElementById(
  "drive_doctor_text.png"
) as HTMLImageElement;

function Footer() {
  return (
    <SimpleGrid className="footer" columns={4}>
      <SimpleGrid className="contributions" columns={2}>
        Contributors:
        <SimpleGrid className="contributors"columns={1}>
          <div>Alex Simpson</div>
          <div>Parker Talley</div>
          <div>Ryan Gallagher</div>
          <div>Jim Sawicki</div>
          <div>Vontha Chan</div>
        </SimpleGrid>
      </SimpleGrid>
      <div></div>
      <div></div>
      <Flex style={{ alignContent: "center", justifyContent: "flex-end" }}>
        <img
          src="/images/drive_doctor_text.png"
          alt="text"
          style={{ maxHeight: 100 }}
        />
      </Flex>
    </SimpleGrid>
  );
}

export default Footer;
