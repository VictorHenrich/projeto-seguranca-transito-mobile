import React, { useContext } from "react";
import { Icon, Image, Stack } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from 'expo-image-picker';

import HeadingDefault from "../../../Components/HeadingDefault";
import OccurrenceRegisterContainer from "./OccurrenceRegisterContainer";
import ButtonDefault from "../../../Components/ButtonDefault";
import IAttachmentPayload from "../../../Patterns/IAttachmentPayload";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from "./OccurrenceRegisterProvider";



function OccurrenceCaptureEvidenceComponent(props: any): React.ReactElement{
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        setOccurrence,
        occurrence
    } = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);

    async function accessGallery(): Promise<void>{
        const { status }: ImagePicker.MediaLibraryPermissionResponse = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status === ImagePicker.PermissionStatus.DENIED)
            throw new Error("Permissão de acesso a galeria rejeitado!");

        const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
            allowsMultipleSelection: true,
            base64: true
        });

        if(result.canceled) return;

        const attachments: IAttachmentPayload[] = result.assets.map(asset => {
            return {
                content: asset.base64 || "",
                type: asset.type || ""
            }
        });

        setOccurrence({
            ...occurrence,
            attachments
        });
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
                            navigation.navigate("OccurrenceAccessCamera");
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

            ComponentBottom={
                occurrence.attachments.length
                    ?
                    [(
                        <ButtonDefault
                            key="button-capture-evidence"
                            text="Próximo"
                            rightIcon={
                                <Icon 
                                    as={<FontAwesome5 name="arrow-right" />}
                                    color="#FFFFFF"
                                    size="xl"
                                />
                            }
                            TextProps={{
                                fontSize: 20
                            }}
                            onPress={() => {
                                navigation.navigate("OccurrenceFinish");
                            }}
                        />
                    )]

                    : undefined
            }
        />
    );
}


export default React.memo(OccurrenceCaptureEvidenceComponent);