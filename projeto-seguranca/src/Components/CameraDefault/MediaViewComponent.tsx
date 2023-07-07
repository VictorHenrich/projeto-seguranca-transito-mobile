import { ReactElement, useContext } from "react";
import VideoDefault from "../VideoDefault";
import  { ModalDefaultProps } from "../ModalDefault";
import ImageDefault from "../ImageDefault";
import ContainerDefault from "../ContainerDefault";
import { ContextCamera, IContextCamera, MediaTypes } from "./CameraProvider";


export interface ModalViewAttachmentProps extends Omit<ModalDefaultProps, "heading">{
    type: "video" | "image"
    uri: string
}


export default function MediaViewComponent(props: any): ReactElement{
    const {
        mediaSelected
    }: IContextCamera = useContext(ContextCamera);


    return (
        <ContainerDefault height="full" width="full">
            {
                mediaSelected?.type === MediaTypes.VIDEO ?
                    (
                        <VideoDefault 
                            source={{ uri: mediaSelected.uri }}
                        />
                    )

                : mediaSelected?.type === MediaTypes.IMAGE ?
                    (
                        <ImageDefault 
                            source={{ uri: mediaSelected.uri }} 
                            alt="image_view"
                        />
                    )

                : null
            }
        </ContainerDefault>
    )
}