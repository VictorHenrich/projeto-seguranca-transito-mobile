import { useEffect } from "react";

import { Alert, Heading, Slide } from "native-base";

type AlertStatus = "successs" | "error" | "warning" | "info"


export interface AlertDefaultProps{
    text: string,
    status: AlertStatus,
    open: boolean,
    stateOpen: (open: boolean) => void,
    timeout?: number
}


export default function AlertDefault({
    text,
    status,
    open,
    stateOpen,
    timeout = 3000
}: AlertDefaultProps){

    useEffect(() =>{
        if(!open) return;

        setTimeout(() =>{
            stateOpen(false);
        }, timeout);

    }, [open]);

    return (
        <Slide in={open} placement="top" >
            <Alert
                status={status}
                opacity={0.8}
            >
                <Alert.Icon size="xl"/>

                <Heading 
                    color="secondary"
                    fontSize={20}
                >
                    {text}
                </Heading>
            </Alert>
        </Slide>
    )
}