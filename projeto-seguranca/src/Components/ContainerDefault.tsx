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


function CenterComponent(props: ICenterProps){
    return (
        <Center
            backgroundColor="secondary"
            width="full"
            height="full"
            paddingTop={20}
            paddingBottom={10}
            paddingLeft={5}
            paddingRight={5}
            {...props}
            position="relative"
        />
    )
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
                position="relative"
                {...ScroolProps}
            >
                <CenterComponent {...props}/>
            </ScrollView>
        ) :
        
        <CenterComponent {...props}/>
    )
}