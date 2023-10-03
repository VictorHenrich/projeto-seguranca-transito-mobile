import { PropsWithChildren, ReactElement } from "react";
import { Modal, Stack, IModalProps } from "native-base";
import ButtonDefault, { ButtonDefaultProps } from "./ButtonDefault";
import HeadingDefault from "./HeadingDefault";



export interface ModalDefaultProps extends PropsWithChildren{
    heading: string,
    open?: boolean,
    onClose?: () => void,
    onConfirm?: () => void,
    ButtonConfirmProps?: Partial<ButtonDefaultProps>,
    ButtonCancelProps?: Partial<ButtonDefaultProps>,
    ModalProps?: IModalProps
}


export default function ModalDefault({
    heading,
    open = false,
    onClose = () => null,
    onConfirm = () => null,
    ModalProps = {},
    ButtonCancelProps = {},
    ButtonConfirmProps = {},
    ...props 
}: ModalDefaultProps): ReactElement{
    return (
        <Modal 
            isOpen={open} 
            size="xl"
            {...ModalProps}
        >
            <Modal.Content>
                <Modal.Header 
                    backgroundColor="rgb(80, 80, 80)"
                >
                    <HeadingDefault 
                        color="rgb(255, 255, 255)"
                    >
                        {heading}
                    </HeadingDefault>
                </Modal.Header>
                <Modal.Body backgroundColor="secondary">
                    {props.children}
                </Modal.Body>
                <Modal.Footer 
                    backgroundColor="rgb(80, 80, 80)"
                    borderColor="rgb(100, 100, 100)"
                >
                    <Stack
                        width="full"
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        space={10}
                    >
                        <ButtonDefault
                            text="Ok"
                            width="40%"
                            backgroundColor="primary"
                            onPress={onConfirm}
                            {...ButtonConfirmProps}
                        />
                        <ButtonDefault
                            text="Fechar"
                            width="40%"
                            backgroundColor="red"
                            onPress={onClose}
                            {...ButtonCancelProps}
                        />
                    </Stack>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}