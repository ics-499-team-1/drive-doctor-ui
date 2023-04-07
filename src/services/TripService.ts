import driveDoctorClient from '../clients/drive-doctor-client';
import Trip from '../models/trips/Trip';
import { UserTripsResponse } from '../models/user/UserTrips';

export const GetTripsByUserId = async (userId: number): Promise<UserTripsResponse[]> => {
    try {
        const res = await driveDoctorClient
            .get<UserTripsResponse[]>(`/users/${userId}/trips`);
        return res.data;
    } catch (err) {
        console.log(err.response);
    }

    return []
}

export const CreateTrip = async (newTrip: Trip) => {
    try {
        const res = await driveDoctorClient
            .post<Trip>(`/trips`, newTrip);
        return res.data;
    } catch (err) {
        return console.log(err.response);
    }
}
