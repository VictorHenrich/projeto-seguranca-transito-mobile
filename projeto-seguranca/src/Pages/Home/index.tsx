import React from "react";
import StackNavigation, { IStackScreen } from "../../Components/StackNavigation";
import MainPage from "./Main";
import OccurrenceProcessRegisterPage from "./OccurrenceProcessRegister";


function HomePage(props: any): React.ReactElement{
    const screens: IStackScreen[] = [
        {
            component: MainPage,
            name: "Main"
        },
        {
            component: OccurrenceProcessRegisterPage,
            name: "OccurrenceProcessRegister"
        },
    ]

    return (
        <StackNavigation 
            screens={screens}
            initialRouteName="Main"
            navigationContainerProps={{
                independent: true
            }}
        />
    );
}

export default React.memo(HomePage);