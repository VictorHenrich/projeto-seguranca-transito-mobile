import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


import ComponentOccurrencesList from "./ComponentOccurrencesList";
import HomeNavigation, { ScreenNavigationProps } from "./HomeNavigation";
import OccurrenceListComponent from "./OccurrencesListComponent";
import OccurrenceRegisterComponent from "./OccurrenceRegisterComponent";




const screens: ScreenNavigationProps[] = [
    {
        component: OccurrenceListComponent,
        icon: <FontAwesome5 name="clipboard-list"/>,
        name: "OccurrencesList",
        title: "Ocorrências"
    },
    {
        component: OccurrenceRegisterComponent,
        icon: <MaterialIcons name="add-circle"/>,
        name: "OccurrenceRegister",
        title: "Criar Ocorrência"
    },
    {
        component: ComponentOccurrencesList,
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