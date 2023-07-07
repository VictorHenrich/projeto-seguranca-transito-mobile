import StackNavigation, { IStackScreen } from "../StackNavigation";
import AccessCameraComponent from "./AccessCameraComponent";
import CameraProvider from "./CameraProvider";
import MediaViewComponent from "./MediaViewComponent";
import MediasCapturedComponent from "./MediasCapturedComponent";

export default function CameraDefault(props: any){

    const componentes: IStackScreen[] = [
        {
            component: AccessCameraComponent,
            name: "AccessCamera"
        },
        {
            component: MediasCapturedComponent,
            name: "MediasCaptured"
        },
        {
            component: MediaViewComponent,
            name: "MediaView"
        }
    ]

    return (
        <CameraProvider>
            <StackNavigation
                initialRouteName="AccessCamera" 
                screens={componentes}
                navigationContainerProps={{
                    independent: true
                }}
            />
        </CameraProvider>
    )
}