import {
    Center,
    ScrollView,
    ICenterProps
} from "native-base";


export interface ContainerDefaultProps extends ICenterProps{
    minHeightContainer?: number | string
}


export default function ContainerDefault({
    minHeightContainer = 900,
    ...props
}: ContainerDefaultProps){

    return (
        <ScrollView>
            <Center {...props} minHeight={minHeightContainer} boxSize="full"/>
        </ScrollView>
    )
}