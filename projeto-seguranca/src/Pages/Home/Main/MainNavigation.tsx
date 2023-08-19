import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, useTheme, ITheme } from 'native-base';


export interface ScreenNavigationProps{
    component: any,
    icon: any,
    title: string,
    name: string
}


export interface MainNavigationProps{
    screens: ScreenNavigationProps[]
}


export default function MainNavigation({ screens, ...props }: MainNavigationProps){
    const { colors }: ITheme = useTheme();

    const Tab = createBottomTabNavigator();

    const colorPrimary: any = colors.primary;

    const colorSecondary: any = colors.secondary;

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
                    minHeight:  60,
                    borderTopWidth: 0,
                    backgroundColor: colorSecondary
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