import {useState} from "react";
import { Select, Text, ISelectProps, ISelectItemProps } from "native-base"



export interface SelectDefaultItensProps extends Omit<ISelectItemProps, "label" | "key" | "value">{
    itens: [{
        text: string,
        value?: string,
        icon?: any
    }]
}


export interface SelectDefaultProps extends ISelectProps{
    selectItem: SelectDefaultItensProps,
    colorDefault?: string,
    colorFocus?: string,
    backgroundColor?: string
}

interface IStyleSelect{
    color: string,
    opacity: number,
    backgroundColor: string
}

export default function SelectDefault({
    selectItem: {
        itens,
        ...selectItensProps
    },
    colorDefault = "#97A6B4",
    colorFocus = "primary",
    backgroundColor = "rgba(0,0,0, 0.5)",
    ...selectProps
}: SelectDefaultProps){
    const [styleInput, setSyleInput] = useState<IStyleSelect>({
        color: colorDefault,
        opacity: 1,
        backgroundColor: "transparent"
    });

    return (
        <Select
                maxHeight={80}
                minHeight={70}
                {...selectProps}
                variant="outline"
                borderWidth="3px"
                backgroundColor={styleInput.backgroundColor}
                color={styleInput.color}
                borderColor={styleInput.color}
                width="full"
                fontWeight={700}
                placeholderTextColor={styleInput.color}
                opacity={styleInput.opacity}
                onOpen={()=>{
                    setSyleInput({
                        color: colorFocus,
                        opacity: 1,
                        backgroundColor
                    })
                }}
                onClose={()=>{
                    setSyleInput({
                        color: colorDefault,
                        opacity: 0.3,
                        backgroundColor: "transparent"
                    })
                }}
        >
            {itens.map((item, index) => {
                return (
                    <Select.Item
                        key={index}
                        value={item.value || item.text}
                        label={item.text}
                        textAlign="center"
                        rightIcon={item.icon && item.icon}
                        padding={5}
                        margin={1}
                        borderRadius={20}
                        backgroundColor={colorFocus}
                        color={colorDefault}
                        {...selectItensProps}
                    />
                )
            })}
        </Select>
    )
}