import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import MainNavigation, { ScreenNavigationProps } from "./MainNavigation";
import OccurrenceListComponent from "./OccurrencesListComponent";
import OccurrenceRegisterComponent from "./OccurrenceRegisterComponent";
import UserProfileComponent from "./UserProfileComponent";
import { loadUserFull } from "../../../Redux/Functions";



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
        icon: <FontAwesome name="address-card"/>,
        name: "UserProfile",
        title: "Conta"
    }
]


function MainPage(props: any){
    const dispatch = useDispatch();

    useEffect(() => {
        loadUserFull(dispatch);
    }, []);

    return (
        <MainNavigation screens={screens}/>
    )
}


export default React.memo(MainPage);