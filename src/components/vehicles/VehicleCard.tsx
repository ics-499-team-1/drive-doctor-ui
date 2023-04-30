import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authHeader from "../../models/auth/AuthHeader";
import Vehicle from "../../models/vehicles/Vehicle";
import { GetToken } from "../../services/LocalStorageService";

type VehicleCardProps = {
  vehicleData: Vehicle;
};

// Handles Vehicle Card Display on VehiclesPage
function VehicleCard(props: VehicleCardProps) {
  // for button hover bg color
  const [onHover, setOnHover] = useState("dark");
  // used for navigation
  const navigate = useNavigate();

  // Handles vehicle deletion
  const handleDelete = async () => {
    try {
      const response = await axios
        .delete(
          `http://localhost:8080/drive-doctor/v1/vehicles/${props.vehicleData.vehicle_id}`,
          authHeader(GetToken())
        )
        .then(() => navigate(0));
      console.log("Vehicle deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  const { name, year, make, model, trim, odometer, license_plate, vin } =
    props.vehicleData;

  return (
    <Card borderRadius="10px" className=" bg-dark text-white" height="200px">
      <div>
        <h2>
          {name}
          <Button
            className={`btn bg-${onHover} text-white`}
            onClick={handleDelete}
            onMouseEnter={() => setOnHover("danger")}
            onMouseLeave={() => setOnHover("dark")}
          >
            Delete
          </Button>
        </h2>

        <SimpleGrid columns={2}>
          <p>
            {year} {make} {model} {trim}
          </p>
          <p>Mileage: {odometer}</p>
          <p>License Plate: {license_plate}</p>
          <p>VIN: {vin}</p>
        </SimpleGrid>
      </div>
    </Card>
  );
}

export default VehicleCard;
