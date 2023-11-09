import { ReactElement, useContext, memo } from "react";
import { Center } from "native-base";
import VideoDefault from "../VideoDefault";
import  { ModalDefaultProps } from "../ModalDefault";
import ImageDefault from "../ImageDefault";
import { ContextCamera, IContextCamera, MediaTypes } from "./CameraProvider";
import ButtonDefault from "../ButtonDefault";
import { NavigationProp, useNavigation } from "@react-navigation/native";


export interface ModalViewAttachmentProps extends Omit<ModalDefaultProps, "heading">{
    type: "video" | "image"
    uri: string
}


function MediaViewComponent(props: any): ReactElement{
    const navigation: NavigationProp<any> = useNavigation();

    const {
        mediaSelected
    }: IContextCamera = useContext(ContextCamera);


    return (
        <Center 
            height="full" 
            width="full"
            position="relative"
            backgroundColor="red"
            padding="0px"
        >
            <Center
                width="full"
                position="absolute"
                top={20}
                zIndex={1000}
            >
                <ButtonDefault 
                    text="Retornar"
                    maxWidth={200}
                    onPress={() => navigation.navigate("MediasCaptured")}
                />
            </Center>
            {
                mediaSelected?.type === MediaTypes.VIDEO ?
                    (
                        <VideoDefault 
                            source={{ uri: mediaSelected.uri }}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    )

                : mediaSelected?.type === MediaTypes.IMAGE ?
                    (
                        <ImageDefault 
                            source={{ uri: mediaSelected.uri }} 
                            alt="image_view"
                            width="full"
                            height="full"
                        />
                    )

                : null
            }
        </Center>
    )
}


export default memo(MediaViewComponent);