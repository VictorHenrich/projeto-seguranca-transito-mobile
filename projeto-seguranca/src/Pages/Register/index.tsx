import React from "react";

import InfoPersonComponent from "./InfoPersonComponent";
import InfoAddressComponent from "./InfoAddressComponent";
import RegisterProvider from "./RegisterProvider";
import InfoVehicleComponent from "./InfoVehicleComponent";
import InfoAccessComponent from "./InfoAccessComponent";
import FinishRegisterComponent from "./FinishRegisterComponent";
import RegisterNavigation from "./RegisterNavigation";
import { IStackScreen } from "../../Components/StackNavigation";


const screens: IStackScreen[] = [
    {
        component: InfoPersonComponent,
        name: "InfoPerson"
    },
    {
        component: InfoAddressComponent,
        name: "InfoAddress"
    },
    {
        component: InfoVehicleComponent,
        name: "InfoVehicle"
    },
    {
        component: InfoAccessComponent,
        name: "InfoAccess"
    },
    {
        component: FinishRegisterComponent,
        name: "FinishRegister"
    }
]


function RegisterPage(props: any): React.ReactElement{

    return (
        <RegisterProvider>
            <RegisterNavigation 
                screens={screens}
                initialRouteName="InfoPerson"
            />
        </RegisterProvider>
    )
}


export default React.memo(RegisterPage);