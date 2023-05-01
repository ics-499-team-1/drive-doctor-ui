import { Button } from "@chakra-ui/button";
import { Card, CardBody } from "@chakra-ui/card";
import { Divider, SimpleGrid, Text } from "@chakra-ui/layout";
import { CardFooter, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import authHeader from "../../models/auth/AuthHeader";
import { UserVehiclesResponse } from "../../models/user/UserVehicles";
import { GetToken } from "../../services/LocalStorageService";

type VehicleCardProps = {
  vehicleData: UserVehiclesResponse;
  refreshVehicles: any;
};

// Handles Vehicle Card Display on VehiclesPage
function VehicleCard(props: VehicleCardProps) {
  // for button hover bg color
  const [onHover, setOnHover] = useState("dark");

  // Handles vehicle deletion
  const handleDelete = async () => {
    try {
      await axios
        .delete(
          `http://localhost:8080/drive-doctor/v1/vehicles/${props.vehicleData.vehicle_id}`,
          authHeader(GetToken())
        )
        .then(() => {
          props.refreshVehicles();
          console.log("Vehicle deleted successfully!");
        });
    } catch (error) {
      console.error(error);
    }
  };
  const { name, year, make, model, trim, odometer, license_plate_number, vin } =
    props.vehicleData;

  return (
    <Card bg="#333333" textColor="white">
      <CardBody>
        <Heading>{name}</Heading>
          <SimpleGrid columns={2} spacingX={10}>
            <Text fontSize='lg'>
              {year} {make} {model} {trim}
            </Text>
            <Text fontSize='lg'>Mileage: {odometer}</Text>
            <Text fontSize='lg'>License Plate: {license_plate_number}</Text>
            <Text fontSize='lg'>VIN: {vin}</Text>
          </SimpleGrid>
          <Button
            size="md"
            colorScheme="red"
            onClick={handleDelete}
            onMouseEnter={() => setOnHover("danger")}
            onMouseLeave={() => setOnHover("dark")}
          >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default VehicleCard;
