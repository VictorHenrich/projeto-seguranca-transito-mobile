import {Stack, Box} from "native-base";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import { useContext } from "react";

export default function ComponentPositionStep(props: any){

    const {
        pageIndex
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <Stack direction="row" width="full" space={10} justifyContent="center">
            {[1,2,3,4,5].map((index)=>{
                const backgroundColor: string = index == pageIndex ? "primary" : "#000000"

                return (
                    <Box 
                        width={5}
                        height={5}
                        backgroundColor={backgroundColor}
                        borderRadius="100%"
                    />
                );
            })}
        </Stack>
    )
}