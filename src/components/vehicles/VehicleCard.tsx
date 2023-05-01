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
  const [loading, setLoading] = useState<boolean>(false)

  // Handles vehicle deletion
  const handleDelete = async () => {
    setLoading(true)
    try {
      await axios
        .delete(
          `http://localhost:8080/drive-doctor/v1/vehicles/${props.vehicleData.vehicle_id}`,
          authHeader(GetToken())
        )
        .then(() => {
          props.refreshVehicles().then(() => {
            setLoading(false)
          });
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
      <CardBody paddingBottom="5px">
        <Text fontSize='2xl'>{year} {make} {model} {trim}</Text>
          <SimpleGrid columns={2} spacingX={10}>
            <Text fontSize='lg'>Name: {name}</Text>
            <Text fontSize='lg'>Mileage: {odometer}</Text>
            <Text fontSize='lg'>License Plate: {license_plate_number}</Text>
            <Text fontSize='lg'>VIN: {vin}</Text>
          </SimpleGrid>
      </CardBody>
      <CardFooter paddingTop="0">
        <Button
            size="md"
            colorScheme="red"
            onClick={handleDelete}
            isLoading={loading}
            onMouseEnter={() => setOnHover("danger")}
            onMouseLeave={() => setOnHover("dark")}
          >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default VehicleCard;
