import * as Location from 'expo-location';

import AbstractService from "../../Patterns/AbstractService";
import ILocationPayload from "../../Patterns/ILocationPayload";





export default class AccessLocationService extends AbstractService<void, ILocationPayload>{
    private async verifyPermissions(): Promise<void>{
        const permission: Location.PermissionResponse = await Location.requestForegroundPermissionsAsync();

        if(!permission.granted)
            throw new Error("Falha ao permitir utilizar geolocalização pelo aplicativo!");
    }

    private async getLocation(): Promise<ILocationPayload>{
        const location: Location.LocationObject = await Location.getCurrentPositionAsync();

        return {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        }
    }

    async execute(): Promise<ILocationPayload> {
        await this.verifyPermissions();

        return await this.getLocation();
    }

}