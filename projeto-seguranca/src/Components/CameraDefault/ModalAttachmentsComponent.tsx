import { ReactElement, useState } from "react";
import { Center, Stack} from "native-base";
import ModalDefault, { ModalDefaultProps } from "../ModalDefault";
import ModalViewAttachmentComponent, { ModalViewAttachmentProps } from "./ModalViewAttachmentComponent";
import ContainerDefault from "../ContainerDefault";
import ImageDefault from "../ImageDefault";
import { MediaItemType } from ".";


export interface ModalAttachmentsProps extends Omit<ModalDefaultProps, "heading">{
    attachments: MediaItemType[]
}



export default function ModalAttachments({ attachments, ...props }: ModalAttachmentsProps): ReactElement{
    const [modalViewMediaProps, setModalViewMediaProps] = useState<ModalViewAttachmentProps>({
        type: "image",
        uri: "",
        open: false
    });

    function handleSetModalViewMedia(props: Partial<ModalViewAttachmentProps>): void{
        setModalViewMediaProps({
            ...modalViewMediaProps,
            ...props
        })
    }

    return (
        <>
            <ModalDefault 
                heading="Images e vídeos criados"
                {...props}
            >
                <ContainerDefault
                    minHeight={200}
                >
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        width="full"
                        height="full"
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        {attachments.map((attachment, index) => {
                            return (
                                <Center
                                    key={index}
                                    onTouchStart={() =>{
                                        handleSetModalViewMedia({
                                            uri: attachment.uri,
                                            type: attachment.type,
                                            open: true
                                        })
                                    }}
                                    width="40%"
                                    height={170}
                                    padding={2}
                                >
                                    <ImageDefault 
                                        source={{
                                            uri: attachment.uri
                                        }}
                                        alt={`myphoto${index}`}
                                        borderRadius={20}
                                        borderColor="primary"
                                        borderWidth={3}
                                    />
                                </Center>
                            );
                        })}
                    </Stack>
                </ContainerDefault>
            </ModalDefault>
            <ModalViewAttachmentComponent 
                {...modalViewMediaProps}
                onClose={()=> {
                    handleSetModalViewMedia({ open: false });
                }}
            />
        </>
    );
}