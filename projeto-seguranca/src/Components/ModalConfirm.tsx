import React from "react";
import ModalDefault, { ModalDefaultProps } from "./ModalDefault";
import HeadingDefault from "./HeadingDefault";


export interface ModalConfirmProps extends Omit<ModalDefaultProps, "heading">{
    text: string
}


export default function ModalConfirm({
    text,
    ...props
}: ModalConfirmProps): React.ReactElement{

    return (
        <ModalDefault 
            heading=""
            ModalProps={{
                size: "xl"
            }}
            {...props}
        >
            <HeadingDefault color="white">
                {text}
            </HeadingDefault>
        </ModalDefault>
    )
}