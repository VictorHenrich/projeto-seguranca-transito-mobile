import { Dispatch } from 'redux';

import { changeUser, changeVehicles, changeOccurrences } from "./GlobalSlice";
import GetUserService, { UserGetPayload } from "../Services/App/GetUserService";
import GetVehiclesService from "../Services/App/GetVehiclesService";
import GetOccurrencesService, { OccurrenceItemType } from "../Services/App/GetOccurrencesService";
import IVehiclePayload from "../Patterns/IVehiclePayload";


export async function loadOccurrencesPayload(dispatch: Dispatch): Promise<void>{
    const occurrences: OccurrenceItemType[] = await new GetOccurrencesService().execute();

    dispatch(changeOccurrences(occurrences));
}

export async function loadUserPayload(dispatch: Dispatch): Promise<void>{
    const [ user, vehicles]: [UserGetPayload, IVehiclePayload[]] = await Promise.all([
        new GetUserService().execute(),
        new GetVehiclesService().execute()
    ]);

    dispatch(changeUser(user));
    dispatch(changeVehicles(vehicles));
}

export async function loadUserFull(dispatch: Dispatch): Promise<void>{
    await Promise.all([
        loadOccurrencesPayload(dispatch),
        loadUserPayload(dispatch)
    ]);
}