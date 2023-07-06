import { PropsWithChildren, ReactElement } from "react";
import { Modal, Stack, IModalProps } from "native-base";
import ButtonDefault from "./ButtonDefault";
import HeadingDefault from "./HeadingDefault";
import ContainerDefault from "./ContainerDefault";



export interface ModalDefaultProps extends PropsWithChildren{
    heading: string,
    open?: boolean,
    onClose?: () => void,
    ModalProps?: IModalProps
}


export default function ModalDefault({
    heading,
    open = true,
    onClose = () => null,
    ModalProps = {},
    ...props 
}: ModalDefaultProps): ReactElement{
    return (
        <Modal 
            isOpen={open} 
            size="full"
            {...ModalProps}
        >
            <Modal.Content>
                <Modal.Header 
                    backgroundColor="primary"
                >
                    <HeadingDefault color="secondary">{heading}</HeadingDefault>
                </Modal.Header>
                <Modal.Body backgroundColor="secondary">
                    {props.children}
                </Modal.Body>
                <Modal.Footer 
                    backgroundColor="secondary"
                    borderColor="rgb(100, 100, 100)"
                >
                    <Stack
                        width="full"
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        space={20}
                    >
                        <ButtonDefault
                            text="Fechar"
                            maxWidth={100}
                            backgroundColor="red"
                            onPress={onClose}
                        />
                    </Stack>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}