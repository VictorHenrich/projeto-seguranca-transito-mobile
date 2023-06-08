import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


export interface IDrawerScreen{
    component: any,
    name: string
}

export interface IDrawerNavigation{
    screens: IDrawerScreen[],
    navigationContainerProps?: Omit<NavigationContainerProps, "children">
}

export default function DrawerNavigation({
    screens,
    navigationContainerProps = {},
  ...props
}: IDrawerNavigation){
    return (
        <NavigationContainer {...navigationContainerProps}>
            <Drawer.Navigator {...props}>
                {screens.map((item, index) => {
                    return (
                        <Drawer.Screen 
                            component={item.component}
                            name={item.name}
                            key={index}
                        />
                    )
                })}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}