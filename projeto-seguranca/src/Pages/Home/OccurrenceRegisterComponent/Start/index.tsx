import CameraDefault from "../../../../Components/CameraDefault";
import StackNavigation, { IStackScreen } from "../../../../Components/StackNavigation";
import OccurrenceAccessCameraComponent from "./OccurrenceAccessCameraComponent";
import OccurrenceAddressLocalComponent from "./OccurrenceAddressLocalComponent";
import OccurrenceRegisterProvider from "./OccurrenceRegisterProvider";




export default function StartProcessRegisterOccurrenceComponent(props: any){
    const screens: IStackScreen[] = [
        {
            component: OccurrenceAccessCameraComponent,
            name: "OccurrenceAccessCamera"
        },
        {
            component: OccurrenceAddressLocalComponent,
            name: "OccurrenceAddressLocal"
        },
        {
            component: CameraDefault,
            name: "Camera"
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