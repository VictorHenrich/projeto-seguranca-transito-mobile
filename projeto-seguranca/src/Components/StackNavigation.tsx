;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export interface IStackScreen{
    component: any,
    name: string
}

export interface IStackNavigation extends Omit<NativeStackNavigatorProps, "children">{
    screens: IStackScreen[],
    hasNavigationContainer?: boolean,
    navigationContainerProps?: Omit<NavigationContainerProps, "children">
}



export default function StackNavigation({
    screens,
    hasNavigationContainer = true,
    navigationContainerProps = {},
  ...props
}: IStackNavigation){
    const Navigator = (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            {...props}
        >
            {screens.map((item, index) => {
                return (
                    <Stack.Screen 
                        component={item.component}
                        name={item.name}
                        key={index}
                    />
                )
            })}
        </Stack.Navigator>
    )


    return !hasNavigationContainer
        ? Navigator

        : (
            <NavigationContainer {...navigationContainerProps}>
                {Navigator}
            </NavigationContainer>
        )
}