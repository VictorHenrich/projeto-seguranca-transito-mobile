import { useEffect } from "react";

import { Alert, Heading, Stack } from "native-base";

type AlertStatus = "sucesss" | "error" | "warning" | "info"


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
        open ? (
                <Alert 
                    status={status}
                    opacity={0.8}
                >
                    <Stack
                        space={10}
                        flexWrap="nowrap"
                        direction="row"
                        alignItems="center"
                    >
                        <Alert.Icon size="xl"/>

                        <Heading 
                            color="secondary"
                            fontSize={20}
                        >
                            {text}
                        </Heading>
                    </Stack>
                </Alert>
            )
             
        : null
    )
}