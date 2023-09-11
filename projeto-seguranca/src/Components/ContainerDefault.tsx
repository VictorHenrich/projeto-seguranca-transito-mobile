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
            <Center
                {...props}
                width="full"
                height="full"
                paddingTop={20}
                paddingBottom={10}
                paddingLeft={5}
                paddingRight={5}
                minHeight={minHeightContainer}
            />
        </ScrollView>
    )
}