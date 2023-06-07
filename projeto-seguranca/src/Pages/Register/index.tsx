import {  createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentRegisterPerson from "./ComponentRegisterPerson";
import ComponentRegisterAddress from "./ComponentRegisterAddress";
import RegisterProvider from "./RegisterProvider";
import ComponentRegisterVehicle from "./ComponentRegisterVehicle";



const Stack = createNativeStackNavigator();


export default function RegisterPage(props: any){

    return (
        <RegisterProvider>
            <Stack.Navigator initialRouteName="RegisterPerson">
                <Stack.Screen name="RegisterPerson" component={ComponentRegisterPerson}/>
                <Stack.Screen name="RegisterAddress" component={ComponentRegisterAddress}/>
                <Stack.Screen name="RegisterVehicle" component={ComponentRegisterVehicle}/>
            </Stack.Navigator>
        </RegisterProvider>
    )
}