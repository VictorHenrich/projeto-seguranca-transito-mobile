import React from "react";
import { PresenceTransition, Spinner, Stack } from "native-base";
import HeadingDefault from "./HeadingDefault";


export interface LoadingComponentProps{
    open: boolean,
    message?: string
}


export default function LoadingComponent({ 
    open,
    message = "Carregando"
}: LoadingComponentProps): React.ReactElement{
    return (
        <PresenceTransition
            visible={open}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute"
            }}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 250
                }
            }}
        >
            <Stack
                width="full" 
                height="full"
                alignItems="center"
                justifyContent="center"
                space={10}
                backgroundColor="rgba(0, 0, 0, 0.8)"
            >
                <Spinner 
                    accessibilityLabel={message} 
                    color="primary"
                    size="lg"
                />
                <HeadingDefault color="primary">{message}</HeadingDefault>
            </Stack>
        </PresenceTransition>
    );  
}