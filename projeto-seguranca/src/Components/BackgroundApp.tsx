
import { Image, IImageProps } from "native-base";


export interface BackgroundAppProps extends Pick<IImageProps, "source">{}


export default function BackgroundApp({
    source = require(`../../assets/background_default.png`)
}: BackgroundAppProps){

    return (
        <Image
            source={source}
            width="full"
            height="full"
            alt="background"
            position="absolute"
        />
    )
}