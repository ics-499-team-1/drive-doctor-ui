import driveDoctorClient from '../clients/drive-doctor-client';
import authHeader from '../models/auth/AuthHeader';
import MilesByVehicle from '../models/trips/MilesByVehicle';
import Trip from '../models/trips/Trip';
import { UserTripsResponse } from '../models/user/UserTrips';
import { GetToken } from './LocalStorageService';

export const GetTripsByUserId = async (userId: string): Promise<UserTripsResponse[]> => {
    try {
        const res = await driveDoctorClient
            .get<UserTripsResponse[]>(
                `/users/${userId}/trips`,
                authHeader(GetToken())
                );
        return res.data;
    } catch (err) {
        console.log(err.response);
    }

    return []
}

export const GetMilesByVehicle = async (vehicleId: string): Promise<MilesByVehicle | null> => {
    try {
        const res = await driveDoctorClient
            .get<MilesByVehicle>(
                `/trips/${vehicleId}/mileage`,
                authHeader(GetToken())
                );
        return res.data;
    } catch (err) {
        console.log(err.response);
    }

    return null
}

export const CreateTrip = async (newTrip: Trip) => {
    try {
        const res = await driveDoctorClient
            .post<Trip>(
                `/trips`, newTrip,
                authHeader(GetToken())
                );
        return res.data;
    } catch (err) {
        return console.log(err.response);
    }
}
