import { ComponentType } from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigationContainer,  } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export interface IStackNavigation extends NativeStackNavigationOptions{
    routeDefault: string
}


export default function StackNavigation({
    routeDefault,
    ...props
}: IStackNavigation){
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={routeDefault}
            screenOptions={{
                headerTransparent: true,
                headerBackVisible: false,
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                ...props
            }}

        >

        </Stack.Navigator>
    </NavigationContainer>
}