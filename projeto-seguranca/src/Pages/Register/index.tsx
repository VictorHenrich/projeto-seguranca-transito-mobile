import { useContext } from "react";
import {  createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentRegisterPerson from "./ComponentRegisterPerson";
import ComponentRegisterAddress from "./ComponentRegisterAddress";
import RegisterProvider, { ContextRegister, IContextRegister } from "./RegisterProvider";



const Stack = createNativeStackNavigator();


export default function RegisterPage(props: any){
    const {
        setPageIndex
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <RegisterProvider>
            <Stack.Navigator initialRouteName="RegisterPerson">
                <Stack.Screen name="RegisterPerson" component={ComponentRegisterPerson}/>
                <Stack.Screen name="RegisterAddress" component={ComponentRegisterAddress}/>
            </Stack.Navigator>
        </RegisterProvider>
    )
}