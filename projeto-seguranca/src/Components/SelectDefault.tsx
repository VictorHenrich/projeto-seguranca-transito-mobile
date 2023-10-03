import {useState} from "react";
import { Select, Icon, ISelectProps, ISelectItemProps } from "native-base"



export interface SelectDefaultItemProps extends ISelectItemProps{
    //icon?: any
}


export interface SelectDefaultProps extends ISelectProps{
    itens: SelectDefaultItemProps[],
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
    itens,
    colorDefault = "#97A6B4",
    colorFocus = "primary",
    backgroundColor = "rgba(0,0,0, 0.5)",
    ...selectProps
}: SelectDefaultProps){
    return (
        <Select
                maxHeight={80}
                minHeight={70}
                {...selectProps}
                variant="outline"
                borderWidth="3px"
                backgroundColor="transparent"
                color={colorDefault}
                borderColor={colorDefault}
                width="full"
                fontWeight={700}
                placeholderTextColor={colorDefault}
                opacity={0.5}
                _selectedItem={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: colorFocus,
                    borderColor: colorFocus,
                    opacity: 1
                }}
        >
            {itens.map((item, index) => {
                return (
                    <Select.Item
                        key={index}
                        textAlign="center"
                        padding={5}
                        margin={1}
                        borderRadius={20}
                        backgroundColor={colorFocus}
                        color={colorDefault}
                        {...item}
                    />
                )
            })}
        </Select>
    )
}