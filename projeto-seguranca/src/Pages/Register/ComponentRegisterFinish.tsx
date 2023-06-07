import { Image, Icon, Center } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ComponentContainerRegister from "./ComponentContainerRegister";
import ButtonDefault from "../../Components/ButtonDefault";





export default function ComponentRegisterFinish(props: any){

    return (
        <ComponentContainerRegister 
            heading="Cadastro Concluido!"
        >
            <Center
                width="full"
                height="50%"
            >
                <Image
                    width="full"
                    height="full"
                    source={require("../../../assets/success.png")}
                    alt="success"
                />
            </Center>
            <ButtonDefault 
                text=""
                rightIcon={
                    <Icon as={<FontAwesome name="check"/>}/>
                }
            />
        </ComponentContainerRegister>
    )
}