import AsyncStorage from '@react-native-async-storage/async-storage';
import { UNSET_OCCURRENCE_KEY } from "@env";

import AbstractService from "../../Patterns/AbstractService";
import IOccurrencePayload from "../../Patterns/IOccurrencePayload";



export default class GetUnsetOccurrenceService extends AbstractService<void, IOccurrencePayload[]>{
    async execute(): Promise<IOccurrencePayload[]> {
        const occurrencesData: string = 
            await AsyncStorage.getItem(UNSET_OCCURRENCE_KEY) || "[]";

        return JSON.parse(occurrencesData);
    }
}