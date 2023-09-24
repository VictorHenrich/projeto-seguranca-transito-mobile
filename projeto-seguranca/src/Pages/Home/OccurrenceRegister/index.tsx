import React from "react";

import StackNavigation, { IStackScreen } from "../../../Components/StackNavigation";
import AccessCameraComponent from "./AccessCameraComponent";
import CaptureEvidenceComponent from "./CaptureEvidenceComponent";
import AccidentLocalComponent from "./AccidentLocalComponent";
import OccurrenceRegisterProvider from "./OccurrenceRegisterProvider";
import SelectVehicleComponent from "./SelectVehicleComponent";
import FinishOccurrenceComponent from "./FinishOccurrenceComponent";
import InfoAddressComponent from "./InfoAddressComponent";




function OccurrenceProcessRegisterPage(props: any): React.ReactElement{
    const screens: IStackScreen[] = [
        {
            component: InfoAddressComponent,
            name: "InfoAddress"
        },
        {
            component: CaptureEvidenceComponent,
            name: "CaptureEvidence"
        },
        {
            component: AccidentLocalComponent,
            name: "AccidentLocal"
        },
        {
            component: AccessCameraComponent,
            name: "AccessCamera"
        },
        {
            name: "SelectVehicle",
            component: SelectVehicleComponent
        },
        {
            name: "FinishOccurrence",
            component: FinishOccurrenceComponent
        }
    ]

    return (
        <OccurrenceRegisterProvider>
            <StackNavigation 
                screens={screens}
                initialRouteName="AccidentLocal"
                navigationContainerProps={{
                    independent: true
                }}
            />
        </OccurrenceRegisterProvider>
    )
}


export default React.memo(OccurrenceProcessRegisterPage);