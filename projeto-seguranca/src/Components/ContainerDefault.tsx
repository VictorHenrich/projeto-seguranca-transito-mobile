import {
    Center,
    ScrollView,
    ICenterProps
} from "native-base";


export interface ContainerDefaultProps extends ICenterProps{
    minHeightContainer: number
}


export default function ContainerDefault({
    minHeightContainer,
    ...props
}: ContainerDefaultProps){

    return (
        <ScrollView>
            <Center {...props} minHeight={minHeightContainer}/>
        </ScrollView>
    )
}