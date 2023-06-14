import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';


export interface ScreenNavigationProps{
    component: any,
    icon: any,
    title: string,
    name: string
}


export interface HomeNavigationProps{
    screens: ScreenNavigationProps[]
}

export interface HomeNavigationStyle{
    colorPrimary: string,
    colorSecondary: string
}


const Tab = createBottomTabNavigator();

const colorPrimary: string = "#93c5fd";

const colorSecondary: string = "#52525b";


export default function HomeNavigation({ screens, ...props }: HomeNavigationProps){
    return (
        <Tab.Navigator 
            screenOptions={{
                headerTransparent: true,
                headerTitle: "",
                tabBarInactiveBackgroundColor: colorPrimary,
                tabBarActiveBackgroundColor: colorSecondary,
                tabBarActiveTintColor: colorPrimary,
                tabBarInactiveTintColor: colorSecondary,
                tabBarLabelStyle: {
                    fontWeight: "700",
                    fontSize: 15
                },
                tabBarStyle: {
                    minHeight:  60
                }
            }}
            {...props}
        >   
            {screens.map((item, index) => {

                return (
                    <Tab.Screen
                        component={item.component}
                        name={item.name}
                        options={{
                            tabBarLabel: item.title,
                            tabBarIcon: (props) => {
                                return (
                                    <Icon
                                        as={item.icon}
                                        color={
                                            props.focused ? colorPrimary : colorSecondary
                                        }
                                        size="lg"
                                    />
                                )
                            }
                        }}
                        key={index}
                    />
                )
            })}
        </Tab.Navigator>
    );
}