import { Button, Card, Container, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Vehicle from "./Vehicle";
import axios, { AxiosRequestConfig } from "axios";
import authHeader from "../../models/auth/AuthHeader";
import { useNavigate } from "react-router-dom";
import MaintenanceButton from "../maintenance/MaintenanceButton";
import checkLogin from "../../hooks/checkLogin";

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
          authHeader(localStorage.getItem("access_token"))
        )
        .then(() => navigate(0));
      //   props.onDelete();
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

function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const navigate = useNavigate();

   // check if logged in
   checkLogin();
   
  useEffect(() => {
    axios
      .get<Vehicle[]>(
        `http://localhost:8080/drive-doctor/v1/users/${localStorage.getItem(
          "user_id"
        )}/vehicles`,
        authHeader(localStorage.getItem("access_token"))
      )
      .then((response) => setVehicles(response.data));
  }, []);
  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.vehicle_id} vehicleData={vehicle} />
          ))}
        </SimpleGrid>
        <MaintenanceButton
        className="bg-dark m-2"
        onClick={() => navigate("/vehicles/add")}
      >
        Add Vehicle
      </MaintenanceButton>
      </SimpleGrid>
    </>
  );
}

export default VehiclesPage;
