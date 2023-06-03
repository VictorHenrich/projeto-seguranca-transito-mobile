import {
    Center,
    Image
} from "native-base";


export default function BackgroundApp(props: any){

    return (
        <Image
            background="secondary"
            source={require("../../assets/background_login.png")}
            width="full"
            height="full"
            alt="background-login"
            position="absolute"
        />
    )
}