import { memo } from "react";
import StackNavigation, { IStackScreen } from "../StackNavigation";
import AccessCameraComponent from "./AccessCameraComponent";
import CameraProvider, { CameraProviderProps } from "./CameraProvider";
import MediaViewComponent from "./MediaViewComponent";
import MediasCapturedComponent from "./MediasCapturedComponent";



function CameraDefault(props: CameraProviderProps){

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
        <CameraProvider {...props}>
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


export default memo(CameraDefault);