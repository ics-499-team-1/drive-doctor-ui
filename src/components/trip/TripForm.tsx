import { Button, ButtonGroup } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useState } from "react";
import Trip from "../../models/trips/Trip";
import { CreateTrip, GetTripsByUserId } from "../../services/TripService";

// todo: create effect to get vehicles for a given user id

// todo: add effect to save trip
// todo: add props

const TripForm = ({ firstFieldRef, onCancel, refreshPageData }: any) => {
  const [formData, setFormData] = useState<Trip>({
    name: "",
    vehicle_id: 0,
    type: "",
    start: "",
    end: "",
    mileage: 0,
  });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((v) => ({ ...v, [e.target.id]: e.target.value }));
  };

  const onClick = () => {
    CreateTrip(formData).then(() => {
        refreshPageData()
    });

    onCancel();
  };

  return (
    <Stack spacing={4}>
      <Input
        id="name"
        ref={firstFieldRef}
        defaultValue="Trip Name"
        onChange={handleValueChange}
      />
      <Input
        id="vehicle_id"
        defaultValue="Vehicle Name"
        onChange={handleValueChange}
      />
      <Input
        id="type"
        defaultValue="Trip Type (Business)"
        onChange={handleValueChange}
      />
      <Input
        id="start"
        defaultValue="Start Location"
        onChange={handleValueChange}
      />
      <Input
        id="end"
        defaultValue="End Location"
        onChange={handleValueChange}
      />
      <Input
        id="mileage"
        defaultValue="Miles Driven"
        onChange={handleValueChange}
      />

      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme="teal" onClick={onClick}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default TripForm
