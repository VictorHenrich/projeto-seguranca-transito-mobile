import {Image, IImageProps } from "native-base";




export default function ImageDefault(props: IImageProps){
    return (
        <Image 
            size="full"
            {...props}
        />
    )
}