import driveDoctorClient from '../clients/drive-doctor-client';
import { UserVehiclesResponse } from '../models/user/UserVehicles';

export const GetVehiclesByUser = async (userId: number): Promise<UserVehiclesResponse[]> => {
    try {
        const res = await driveDoctorClient
            .get<UserVehiclesResponse[]>(`/users/${userId}/vehicles`);
        return res.data;
    } catch (err) {
        console.log(err.response);
    }

    return []
}
