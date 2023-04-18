import { useEffect, useState } from 'react';
import driveDoctorClient from '../clients/drive-doctor-client';
import { UserVehiclesResponse } from '../models/user/UserVehicles';

const useUserVehicles = (userId: number) => {
    const [userVehicles, setUserVehicles] = useState<UserVehiclesResponse[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    driveDoctorClient
      .get<UserVehiclesResponse[]>(`/users/${userId}/vehicles`, { signal: controller.signal })
      .then((res) => setUserVehicles(res.data))
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.log(err.name)
        }
      });

      return () => controller.abort();
  }, []);

  return userVehicles;
}

export default useUserVehicles;
