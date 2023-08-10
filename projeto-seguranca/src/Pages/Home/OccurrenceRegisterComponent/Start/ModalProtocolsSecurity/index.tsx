import React, {  useState } from "react";
import { Modal, IModalProps } from "native-base";
import ProtocolSegurityComponent1 from "./ProtocolSegurityComponent1";
import ButtonDefault from "../../../../../Components/ButtonDefault";
import ProtocolSegurityComponent2 from "./ProtocolSegurityComponent2";
import ProtocolSegurityComponent3 from "./ProtocolSegurityComponent3";



interface ProtocolSecurityItemProps{
    key: string,
    nextKey: string
    title: string,
    component: any
}


const itens: ProtocolSecurityItemProps[] = [
    {
        title: "Obter evidencias",
        key: "protocol1",
        nextKey: "protocol2",
        component: ProtocolSegurityComponent1
    },
    {
        title: "Desobistruir a via",
        key: "protocol2",
        nextKey: "protocol3",
        component: ProtocolSegurityComponent2
    },
    {
        title: "Se prepare",
        key: "protocol3",
        nextKey: "",
        component: ProtocolSegurityComponent3
    }
]

function ModalProtocolsSegurity(props: IModalProps): React.ReactElement{

    const [itemSelected, setItemSelected] = useState<ProtocolSecurityItemProps>(itens[0]);

    return (
        <Modal {...props}>
            <Modal.Content
                minHeight={200}
            >
                <Modal.Header> </Modal.Header>
                <Modal.Body>
                    {itens.find(item => {
                        if(item.key === itemSelected.key)
                            return item.component
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <ButtonDefault 
                        text="próximo"
                        onPress={() => {
                            const itemLocated: ProtocolSecurityItemProps | void = itens.find(
                                i => i.key === itemSelected.key
                            );

                            if(itemLocated)
                                setItemSelected(itemLocated);
                        }}
                    />
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}

export default React.memo(ModalProtocolsSegurity);