import React from "react";
import { Icon, Image, Stack } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from 'expo-image-picker';

import HeadingDefault from "../../../Components/HeadingDefault";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import ButtonDefault from "../../../Components/ButtonDefault";



function OccurrenceCaptureEvidenceComponent(props: any): React.ReactElement{
    async function accessGallery(): Promise<void>{
        const { status }: ImagePicker.MediaLibraryPermissionResponse = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status === ImagePicker.PermissionStatus.DENIED)
            throw new Error("Permissão de acesso a galeria rejeitado!");

        const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync();
    }

    return (
        <OccurrenceRegisterContainer 
        
            ComponentTop={(
                <Stack
                    width="full"
                    direction="column"
                    space={5}
                    alignItems="center"
                >
                    <HeadingDefault fontSize={30} textAlign="left">
                        Tire ou escolha algumas{" "}

                        <HeadingDefault color="primary" fontSize={30} textAlign="left"> 
                            fotos e vídeos do local {" "}
                        </HeadingDefault>

                        para uma melhor ilustração e informação.
                    </HeadingDefault>
                    <Image 
                        source={require("../../../../assets/photo.png")}
                        alt="photo"
                        width={200}
                        height={200}
                    />
                </Stack>
            )}

            ComponentCenter={(
                <Stack
                    width="full"
                    space={5}
                    direction="column"
                    alignItems="center"
                >
                    <ButtonDefault
                        padding={5} 
                        text="Tirar foto | vídeo"
                        rightIcon={
                            <Icon 
                                as={<FontAwesome5 name="camera" />}
                                color="#FFFFFF"
                                size="xl"
                            />
                        }
                        TextProps={{
                            fontSize: 20
                        }}
                        onPress={() => {
                            props.navigation.navigate("OccurrenceCamera")
                        }}
                    />
                    <ButtonDefault 
                        padding={5}
                        text="Selecionar foto | vídeo"
                        rightIcon={
                            <Icon 
                                as={<FontAwesome5 name="file-video" />}
                                color="#FFFFFF"
                                size="xl"
                            />
                        }
                        TextProps={{
                            fontSize: 20
                        }}
                        onPress={() => accessGallery()}
                    />
                </Stack>
            )}
        
        />
    );
}


export default React.memo(OccurrenceCaptureEvidenceComponent);