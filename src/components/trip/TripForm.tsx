import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";
import useUserVehicles from "../../hooks/useUserVehicles";
import Trip from "../../models/trips/Trip";
import { GetUserId } from "../../services/LocalStorageService";
import { CreateTrip } from "../../services/TripService";

// todo: create effect to get vehicles for a given user id

const TripForm = ({ firstFieldRef, onCancel, refreshPageData }: any) => {
  const vehicles = useUserVehicles(GetUserId());
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

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    setFormData((v) => ({ ...v, [e.target.id]: e.target.value }));
  };

  const onClick = () => {
    CreateTrip(formData).then(() => {
      setFormData({
        name: "",
        vehicle_id: 0,
        type: "",
        start: "",
        end: "",
        mileage: 0,
      });
      refreshPageData();
    });

    onCancel();
  };

  return (
    <Stack spacing={4}>
      <Input
        id="name"
        ref={firstFieldRef}
        placeholder="Trip Name"
        onChange={handleValueChange}
      />
      <Select
        id="vehicle_id"
        placeholder="Select Vehicle"
        onChange={handleSelect}
      >
        {vehicles.map((vehicle) => (
          <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
            {vehicle.name}
          </option>
        ))}
      </Select>

      <Input
        id="type"
        placeholder="Trip Type (Business)"
        onChange={handleValueChange}
      />
      <Input
        id="start"
        placeholder="Start Location"
        onChange={handleValueChange}
      />
      <Input id="end" placeholder="End Location" onChange={handleValueChange} />
      <Input
        id="mileage"
        placeholder="Miles Driven"
        type="number"
        onChange={handleValueChange}
      />

      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button colorScheme="teal" onClick={onClick}>
        Save
      </Button>
    </Stack>
  );
};

export default TripForm;
