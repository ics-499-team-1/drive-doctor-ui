import { Button, Card, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Vehicle from "../../models/vehicles/Vehicle";

type VehicleCardProps = {
  vehicleData: Vehicle;
  onDelete: () => void;
};

// Handles Vehicle Card Display on VehiclesPage
function VehicleCard(props: VehicleCardProps) {
  // Handles vehicle deletion
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/drive-doctor/v1/vehicles/${props.vehicleData.vehicle_id}`
      );
      props.onDelete();
      console.log("Vehicle deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const { name, year, make, model, trim, odometer, license_plate, vin } =
    props.vehicleData;

  return (
    <Card borderRadius="10px" height="200px" bg="#0">
      <div>
        <h2>
          {name}
          <Button className="btn" bg="#0" onClick={handleDelete}>
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
