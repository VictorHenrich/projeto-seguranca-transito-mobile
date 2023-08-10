import React from "react";
import { Icon, Image, Stack } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from 'expo-image-picker';

import HeadingDefault from "../../../../Components/HeadingDefault";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import ButtonDefault from "../../../../Components/ButtonDefault";



function OccurrenceCaptureEvidenceComponent(props: any): React.ReactElement{
    async function accessGallery(): Promise<void>{
        const { status }: ImagePicker.MediaLibraryPermissionResponse = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status === ImagePicker.PermissionStatus.DENIED)
            throw new Error("Permissão de acesso a galeria rejeitado!");

        const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync();
    }

    return (
        <OccurrenceRegisterContainer>
            <Stack
                width="full"
                direction="column"
                space={10}
                alignItems="center"
            >
                <HeadingDefault fontSize={28} textAlign="left">
                    Capture algumas {" "}

                    <HeadingDefault color="primary" fontSize={28} textAlign="left"> 
                        fotos e vídeos do local 
                    </HeadingDefault>

                    {" "} para ilustrar e informar melhor.
                </HeadingDefault>
                <Image 
                    source={require("../../../../../assets/photo.png")}
                    alt="photo"
                    width={200}
                    height={200}
                />
            </Stack>
            <Stack
                width="full"
                space={5}
                direction="column"
                alignItems="center"
            >
                <ButtonDefault 
                    text="Tirar foto | vídeo"
                    rightIcon={
                        <Icon 
                            as={<FontAwesome5 name="camera" />}
                            color="#FFFFFF"
                            size="xl"
                        />
                    }
                    TextProps={{
                        fontSize: 18
                    }}
                    onPress={() => {
                        props.navigation.navigate("Camera")
                    }}
                />
                <ButtonDefault 
                    text="Selecionar foto | vídeo"
                    rightIcon={
                        <Icon 
                            as={<FontAwesome5 name="file-video" />}
                            color="#FFFFFF"
                            size="xl"
                        />
                    }
                    TextProps={{
                        fontSize: 18
                    }}
                    onPress={() => accessGallery()}
                />
            </Stack>
        </OccurrenceRegisterContainer>
    );
}


export default React.memo(OccurrenceCaptureEvidenceComponent);