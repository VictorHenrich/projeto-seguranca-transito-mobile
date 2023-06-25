import {ReactElement} from "react";
import { Image, Stack} from "native-base";
import ModalDefault, {ModalDefaultProps} from "../ModalDefault";
import { CameraCapturedPicture } from "expo-camera";
import ContainerDefault from "../ContainerDefault";


export interface ModalAttachmentsProps extends Omit<ModalDefaultProps, "heading">{
    attachments: Pick<CameraCapturedPicture, "uri">[]
}



export default function ModalAttachments({ attachments, ...props }: ModalAttachmentsProps): ReactElement{

    return (
        <ModalDefault 
            heading="Images / Vídeos criados"
            {...props}
        >
            <Stack
                direction="column"
                width="full"
                space={20}
                alignItems="center"
            >
                {attachments.map((attachment, index) => {
                    return (
                        <Image 
                            source={{
                                uri: attachment.uri
                            }}

                            width={200}
                            height={200}
                            alt={`myphoto${index}`}
                            key={index}
                            borderRadius={20}
                            borderColor="primary"
                            borderWidth={3}
                        />
                    );
                })}
            </Stack>
        </ModalDefault>
    );
}