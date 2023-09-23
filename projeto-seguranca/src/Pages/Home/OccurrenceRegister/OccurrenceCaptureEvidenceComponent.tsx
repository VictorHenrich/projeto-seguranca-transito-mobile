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
import AccessGalleryService from "../../../Services/Expo/AccessGalleryService";



function OccurrenceCaptureEvidenceComponent(props: any): React.ReactElement{
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        setOccurrence,
        occurrence
    }: IOccurrenceRegisterContext = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);

    async function accessGallery(): Promise<void>{
        const attachments: IAttachmentPayload[] = await new AccessGalleryService().execute();

        setOccurrence({
            ...occurrence,
            attachments
        });
    }

    return (
        <OccurrenceRegisterContainer 
            haveScrool={true}
            minHeight={500}
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