import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from "@env";

import AbstractService from "../../Patterns/AbstractService";


export default class LogoutService extends AbstractService<void, void>{
    async execute(): Promise<void> {
        await AsyncStorage.setItem(AUTH_KEY, "");
    }

}