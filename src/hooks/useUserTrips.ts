import { useEffect, useState } from 'react';
import driveDoctorClient from '../clients/drive-doctor-client';
import { UserTripsResponse } from '../models/user/UserTrips';

const useUserTrips = (userId: number, setTrips: any) => {
    const [userTrips, setUserTrips] = useState<UserTripsResponse[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    driveDoctorClient
      .get<UserTripsResponse[]>(`/users/${userId}/trips`, { signal: controller.signal })
      .then((res) => setTrips(res.data))
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.log(err.name)
        }
      });

      return () => controller.abort();
  }, []);

  return userTrips;
}

export default useUserTrips;
