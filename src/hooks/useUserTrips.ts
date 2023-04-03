import { useEffect, useState } from 'react';
import driveDoctorClient from '../clients/drive-doctor-client';
import { UserTripsResponse } from '../models/user/UserTrips';

const useUserTrips = () => {
    const [userTrips, setUserTrips] = useState<UserTripsResponse[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    driveDoctorClient
      .get<UserTripsResponse[]>(`/users/152/trips`, { signal: controller.signal })
      .then((res) => setUserTrips(res.data));

      return () => controller.abort();
  }, []);

  return userTrips;
}

export default useUserTrips;
