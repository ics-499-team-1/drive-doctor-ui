import driveDoctorClient from '../clients/drive-doctor-client';
import authHeader from '../models/auth/AuthHeader';
import { UserVehiclesResponse } from '../models/user/UserVehicles';
import { GetToken } from './LocalStorageService';

export const GetVehiclesByUser = async (userId: string): Promise<UserVehiclesResponse[]> => {
    try {
        const res = await driveDoctorClient
            .get<UserVehiclesResponse[]>(
                `/users/${userId}/vehicles`,
                authHeader(GetToken())
                );
        return res.data;
    } catch (err) {
        console.log(err.response);
    }

    return []
}
