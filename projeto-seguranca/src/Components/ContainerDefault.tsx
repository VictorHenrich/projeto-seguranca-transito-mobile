import {
    Center,
    ScrollView,
    ICenterProps
} from "native-base";


export interface ContainerDefaultProps extends ICenterProps{
    haveScrool?: boolean
}


export default function ContainerDefault({
    haveScrool = true,
    ...props
}: ContainerDefaultProps){

    return (
        haveScrool ? (
            <ScrollView
                width="full"
                height="full"
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