import { useEffect, useState } from 'react';
import driveDoctorClient from '../clients/drive-doctor-client';
import authHeader from '../models/auth/AuthHeader';
import { UserTripsResponse } from '../models/user/UserTrips';
import { GetToken } from '../services/LocalStorageService';

const useUserTrips = (userId: string | null, setTrips: any) => {
  const [userTrips, setUserTrips] = useState<UserTripsResponse[]>([]);

  if (userId === null) {
    return userTrips;
  }

  useEffect(() => {
    const controller = new AbortController();

    driveDoctorClient
      .get<UserTripsResponse[]>(`/users/${userId}/trips`,
      authHeader(GetToken())
      )
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
