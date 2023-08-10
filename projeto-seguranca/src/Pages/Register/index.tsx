import React from "react";

import ComponentRegisterPerson from "./ComponentRegisterPerson";
import ComponentRegisterAddress from "./ComponentRegisterAddress";
import RegisterProvider from "./RegisterProvider";
import ComponentRegisterVehicle from "./ComponentRegisterVehicle";
import ComponentRegisterAccess from "./ComponentRegisterAccess";
import ComponentRegisterFinish from "./ComponentRegisterFinish";
import RegisterNavigation from "./RegisterNavigation";
import { IStackScreen } from "../../Components/StackNavigation";


const screens: IStackScreen[] = [
    {
        component: ComponentRegisterPerson,
        name: "RegisterPerson"
    },
    {
        component: ComponentRegisterAddress,
        name: "RegisterAddress"
    },
    {
        component: ComponentRegisterVehicle,
        name: "RegisterVehicle"
    },
    {
        component: ComponentRegisterAccess,
        name: "RegisterAccess"
    },
    {
        component: ComponentRegisterFinish,
        name: "RegisterFinish"
    }
]


function RegisterPage(props: any): React.ReactElement{

    return (
        <RegisterProvider>
            <RegisterNavigation 
                screens={screens}
                initialRouteName="RegisterPerson"
            />
        </RegisterProvider>
    )
}


export default React.memo(RegisterPage);