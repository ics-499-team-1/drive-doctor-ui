import { useEffect, useState } from 'react';
import driveDoctorClient from '../clients/drive-doctor-client';
import authHeader from '../models/auth/AuthHeader';
import { UserVehiclesResponse } from '../models/user/UserVehicles';
import { GetToken } from '../services/LocalStorageService';

const useUserVehicles = (userId: string | null, setVehicles: any) => {
    const [userVehicles, setUserVehicles] = useState<UserVehiclesResponse[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    if (userId === null) {
      return
    }

    driveDoctorClient
      .get<UserVehiclesResponse[]>(`/users/${userId}/vehicles`, authHeader(GetToken()))
      .then((res) => {
        setUserVehicles(res.data)
        setVehicles(res.data)
      })
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
