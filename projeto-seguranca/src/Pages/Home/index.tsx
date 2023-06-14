import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import ComponentOccurrencesList from "./ComponentOccurrencesList";
import ComponentOccurrencesList2 from "./ComponentOccurrencesList2";
import HomeNavigation, { ScreenNavigationProps } from "./HomeNavigation";




const screens: ScreenNavigationProps[] = [
    {
        component: ComponentOccurrencesList,
        icon: <FontAwesome5 name="clipboard-list"/>,
        name: "OccurrencesList",
        title: "Ocorrências"
    },
    {
        component: ComponentOccurrencesList2,
        icon: <MaterialIcons name="add-circle"/>,
        name: "OccurrenceRegister",
        title: "Criar Ocorrência"
    },
    {
        component: ComponentOccurrencesList2,
        icon: <FontAwesome5 name="address-card"/>,
        name: "UpdateUser",
        title: "Conta"
    }
]


export default function HomePage(props: any){
    return (
        <HomeNavigation screens={screens}/>
    )
}