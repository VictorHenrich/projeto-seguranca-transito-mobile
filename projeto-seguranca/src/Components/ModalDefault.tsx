import { PropsWithChildren, ReactElement } from "react";
import { Modal, Stack } from "native-base";
import ButtonDefault from "./ButtonDefault";
import HeadingDefault from "./HeadingDefault";
import ContainerDefault from "./ContainerDefault";



export interface ModalDefaultProps extends PropsWithChildren{
    heading: string,
    open?: boolean,
    onClose?: () => void
}


export default function ModalDefault({
    heading,
    open = true,
    onClose = () => null,
    ...props
}: ModalDefaultProps): ReactElement{
    return (
        <Modal isOpen={open} size="lg" >
            <Modal.Content>
                <Modal.Header 
                    backgroundColor="primary"
                >
                    <HeadingDefault color="secondary">{heading}</HeadingDefault>
                </Modal.Header>
                <Modal.Body backgroundColor="secondary">
                    <ContainerDefault 
                        justifyContent="flex-start"
                        minHeight={100}
                        boxSize="container"
                    >
                        {props.children}
                    </ContainerDefault>
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