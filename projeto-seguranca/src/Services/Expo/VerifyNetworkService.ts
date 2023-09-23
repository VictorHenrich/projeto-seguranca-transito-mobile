import * as Network from "expo-network";
import AbstractService from "../../Patterns/AbstractService";




export default class VerifyNetworkService extends AbstractService<void, boolean>{
    async execute(): Promise<boolean> {
        const networkState: Network.NetworkState = await Network.getNetworkStateAsync();

        return Boolean(networkState.isConnected);
    }

}