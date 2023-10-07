import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IUserPayload from '../Patterns/IUserPayload';
import IAddressPayload from '../Patterns/IAddressPayload';
import IVehiclePayload from '../Patterns/IVehiclePayload';
import { OccurrenceItemType } from '../Services/App/GetOccurrencesService';


export interface IGlobalState{
    user: IUserPayload,
    occurrences: OccurrenceItemType[]
}


const state: IGlobalState = {
    user: {
        name: "",
        email: "",
        telephone: "",
        birthday: new Date(),
        documentCpf: "",
        documentRg: "",
        issuerState: "",
        address: {
            zipcode: "",
            state: "",
            city: "",
            district: "",
            street: "",
            number: 0
        },
        vehicles: []
    },
    occurrences: []
}


export const globalSlice = createSlice({
    name: "global",
    initialState: state,
    reducers: {
        changeUser(state: IGlobalState, action: PayloadAction<Partial<IUserPayload>>){
            state.user = {
                ...state.user,
                ...action.payload
            };
        },
    
        changeAddress(state: IGlobalState, action: PayloadAction<Partial<IAddressPayload>>){
            state.user.address = {
                ...state.user.address,
                ...action.payload
            };
        },
    
        changeVehicles(state: IGlobalState, action: PayloadAction<IVehiclePayload[]>) {
            state.user.vehicles = action.payload;
        },
    
        changeOccurrences(state: IGlobalState, action: PayloadAction<OccurrenceItemType[]>) {
            state.occurrences = action.payload;
        },
    }
});


export const {
    changeAddress,
    changeUser,
    changeVehicles,
    changeOccurrences
} = globalSlice.actions;


export default globalSlice.reducer;