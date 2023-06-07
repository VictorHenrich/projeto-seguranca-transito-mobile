import {  createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentRegisterPerson from "./ComponentRegisterPerson";
import ComponentRegisterAddress from "./ComponentRegisterAddress";
import RegisterProvider from "./RegisterProvider";
import ComponentRegisterVehicle from "./ComponentRegisterVehicle";
import ComponentRegisterAccess from "./ComponentRegisterAccess";
import ComponentRegisterFinish from "./ComponentRegisterFinish";



const Stack = createNativeStackNavigator();


export default function RegisterPage(props: any){

    return (
        <RegisterProvider>
            <Stack.Navigator 
                initialRouteName="RegisterPerson"
                screenOptions={{
                    headerTransparent: true,
                    headerTintColor: "primary",
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    title: ""
                }}
            >
                <Stack.Screen name="RegisterPerson" component={ComponentRegisterPerson}/>
                <Stack.Screen name="RegisterAddress" component={ComponentRegisterAddress}/>
                <Stack.Screen name="RegisterVehicle" component={ComponentRegisterVehicle}/>
                <Stack.Screen name="RegisterAccess" component={ComponentRegisterAccess}/>
                <Stack.Screen name="RegisterFinish" component={ComponentRegisterFinish}/>
            </Stack.Navigator>
        </RegisterProvider>
    )
}