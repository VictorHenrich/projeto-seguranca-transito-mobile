import CameraDefault from "../../../../Components/CameraDefault";
import StackNavigation, { IStackScreen } from "../../../../Components/StackNavigation";
import OccurrenceCaptureEvidenceComponent from "./OccurrenceCaptureEvidenceComponent";
import OccurrenceAddressLocalComponent from "./OccurrenceAddressLocalComponent";
import OccurrenceRegisterProvider from "./OccurrenceRegisterProvider";
import OccurrenceVehicleComponent from "./OccurrenceVehicleComponent";




export default function StartProcessRegisterOccurrenceComponent(props: any){
    const screens: IStackScreen[] = [
        {
            component: OccurrenceCaptureEvidenceComponent,
            name: "OccurrenceAccessCamera"
        },
        {
            component: OccurrenceAddressLocalComponent,
            name: "OccurrenceAddressLocal"
        },
        {
            component: CameraDefault,
            name: "Camera"
        },
        {
            name: "OccurrenceVehicle",
            component: OccurrenceVehicleComponent
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