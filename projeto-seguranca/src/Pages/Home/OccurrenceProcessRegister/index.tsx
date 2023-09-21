import React from "react";

import StackNavigation, { IStackScreen } from "../../../Components/StackNavigation";
import OccurrenceCameraComponent from "./OccurrenceCameraComponent";
import OccurrenceCaptureEvidenceComponent from "./OccurrenceCaptureEvidenceComponent";
import OccurrenceAddressLocalComponent from "./OccurrenceAddressComponent";
import OccurrenceRegisterProvider from "./OccurrenceRegisterProvider";
import OccurrenceVehicleComponent from "./OccurrenceVehicleComponent";
import OccurrenceRegisterFinishComponent from "./OccurrenceRegisterFinishComponent";
import OccurrenceInfoAddressComponent from "./OccurrenceInfoAddressComponent";




function OccurrenceProcessRegisterPage(props: any): React.ReactElement{
    const screens: IStackScreen[] = [
        {
            component: OccurrenceInfoAddressComponent,
            name: "OccurrenceInfoAddress"
        },
        {
            component: OccurrenceCaptureEvidenceComponent,
            name: "OccurrenceAccessCamera"
        },
        {
            component: OccurrenceAddressLocalComponent,
            name: "OccurrenceAddressLocal"
        },
        {
            component: OccurrenceCameraComponent,
            name: "OccurrenceCamera"
        },
        {
            name: "OccurrenceVehicle",
            component: OccurrenceVehicleComponent
        },
        {
            name: "OccurrenceFinish",
            component: OccurrenceRegisterFinishComponent
        }
    ]

    return (
        <OccurrenceRegisterProvider>
            <StackNavigation 
                screens={screens}
                initialRouteName="OccurrenceAddressLocal"
                navigationContainerProps={{
                    independent: true
                }}
            />
        </OccurrenceRegisterProvider>
    )
}


export default React.memo(OccurrenceProcessRegisterPage);