import {
    Center,
    ScrollView,
    ICenterProps,
    IScrollViewProps
} from "native-base";


export interface ContainerDefaultProps extends ICenterProps{
    haveScrool?: boolean,
    ScroolProps?: IScrollViewProps
}


export default function ContainerDefault({
    haveScrool = true,
    ScroolProps = {},
    ...props
}: ContainerDefaultProps){

    return (
        haveScrool ? (
            <ScrollView
                width="full"
                height="full"
                {...ScroolProps}
            >
                <Center
                    width="full"
                    height="full"
                    paddingTop={20}
                    paddingBottom={10}
                    paddingLeft={5}
                    paddingRight={5}
                    {...props}
                />
            </ScrollView>
        ) :
        
        <Center
            width="full"
            height="full"
            paddingTop={20}
            paddingBottom={10}
            paddingLeft={5}
            paddingRight={5}
            {...props}
        />

    )
}