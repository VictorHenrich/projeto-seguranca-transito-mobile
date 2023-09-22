import React from "react";

import StackNavigation, { IStackScreen } from "../../../Components/StackNavigation";
import OccurrenceAccessCameraComponent from "./OccurrenceAccessCameraComponent";
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
            name: "OccurrenceCaptureEvidence"
        },
        {
            component: OccurrenceAddressLocalComponent,
            name: "OccurrenceAddressLocal"
        },
        {
            component: OccurrenceAccessCameraComponent,
            name: "OccurrenceAccessCamera"
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