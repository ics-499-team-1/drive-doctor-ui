import { Button } from "@chakra-ui/button";
import { FocusLock } from "@chakra-ui/focus-lock";
import { useDisclosure } from "@chakra-ui/hooks";
import { SimpleGrid } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/popover";
import React, { useEffect, useState } from "react";
import useUserTrips from "../../hooks/useUserTrips";
import { UserTripsResponse } from "../../models/user/UserTrips";
import { GetTripsByUserId } from "../../services/TripService";
import TripForm from "./TripForm";
import TripsCard from "./TripsCard";

function TripGrid() {
  const [userTrips, setUserTrips] = useState<UserTripsResponse[]>([]);

  useUserTrips(203, setUserTrips)

  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  const onClick = () => {
    console.log("new vehicle added");
    GetTripsByUserId(203).then((data: UserTripsResponse[]) => {
      setUserTrips(data);
    });
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={10} margin="10px" height="100%">
        {userTrips.map((trip) => (
          <TripsCard key={trip.trip_id} trip={trip} />
        ))}
      </SimpleGrid>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="auto"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button width="99%">Add</Button>
        </PopoverTrigger>
        <PopoverContent p={7}>
          <FocusLock persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <TripForm
              firstFieldRef={firstFieldRef}
              onCancel={onClose}
              refreshPageData={onClick}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default TripGrid;
