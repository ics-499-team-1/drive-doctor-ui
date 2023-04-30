import { useEffect, useState } from 'react';
import driveDoctorClient from '../clients/drive-doctor-client';
import authHeader from '../models/auth/AuthHeader';
import MilesByVehicle from '../models/trips/MilesByVehicle';
import { UserVehiclesResponse } from '../models/user/UserVehicles';
import { GetToken } from '../services/LocalStorageService';

const useUserVehicleTotalMiles = (userId: string | null, setMiles: any) => {
    const [milesByVehicle, setMilesByVehicle] = useState<MilesByVehicle[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    if (userId === null) {
      return
    }

    driveDoctorClient
      .get<UserVehiclesResponse[]>(`/trips/mileage/${userId}`, authHeader(GetToken()))
      .then((res) => {
        setMiles(res.data)
      })
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.log(err.name)
        }
      });

      return () => controller.abort();
  }, []);

  return milesByVehicle;
}

export default useUserVehicleTotalMiles;
