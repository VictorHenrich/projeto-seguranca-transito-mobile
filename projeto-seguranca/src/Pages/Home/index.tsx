import React from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import HomeNavigation, { ScreenNavigationProps } from "./HomeNavigation";
import OccurrenceListComponent from "./OccurrencesListComponent";
import OccurrenceRegisterComponent from "./OccurrenceRegisterComponent";
import UserProfileComponent from "./UserProfileComponent";
import HomeProvider from "./HomeProvider";




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
        component: UserProfileComponent,
        icon: <FontAwesome5 name="address-card"/>,
        name: "UserProfile",
        title: "Conta"
    }
]


function HomePage(props: any){
    return (
        <HomeProvider>
            <HomeNavigation screens={screens}/>
        </HomeProvider>
    )
}


export default React.memo(HomePage);