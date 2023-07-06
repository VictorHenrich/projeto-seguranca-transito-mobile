import VideoDefault from "../VideoDefault";
import ModalDefault, { ModalDefaultProps } from "../ModalDefault";
import ImageDefault from "../ImageDefault";
import { Center } from "native-base";


export interface ModalViewAttachmentProps extends Omit<ModalDefaultProps, "heading">{
    type: "video" | "image"
    uri: string
}


export default function ModalViewAttachmentComponent({
    type,
    uri,
    ...props
}: ModalViewAttachmentProps){
    return (
        <ModalDefault
            heading="Visualização do documento!"
            {...props}
        >
            <Center 
                width="full" 
                minHeight={500}
            >
                {
                    type === "video"
                        ? (
                            <VideoDefault 
                                source={{ uri }}
                            />
                        )

                        : (
                            <ImageDefault 
                                source={{ uri }} 
                                alt="image_view"
                            />
                        )
                }
            </Center>
        </ModalDefault>
    )
}