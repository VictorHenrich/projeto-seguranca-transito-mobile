import React from "react";
import {Stack, Circle} from "native-base";
import { ContextRegister, IContextRegister } from "./RegisterProvider";
import { useContext } from "react";

function ComponentPositionStep(props: any): React.ReactElement{

    const {
        pageIndex
    } = useContext<IContextRegister>(ContextRegister);

    return (
        <Stack direction="row" width="full" space={10} justifyContent="center">
            {[1,2,3,4,5].map((index)=>{
                const backgroundColor: string = index == pageIndex ? "primary" : "rgb(100, 100, 100)"

                return (
                    <Circle
                        key={index}
                        width={5}
                        height={5}
                        backgroundColor={backgroundColor}
                    />
                );
            })}
        </Stack>
    )
}


export default React.memo(ComponentPositionStep);