import React, { useContext } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CameraDefault from "../../../Components/CameraDefault";
import { MediaItem } from '../../../Components/CameraDefault/CameraProvider';
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from './OccurrenceRegisterProvider';
import IAttachmentPayload from '../../../Patterns/IAttachmentPayload';



function OccurrenceAccessCameraComponent(props: any){
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        setOccurrence,
        occurrence
    } = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);


    async function handleOnNext(medias: MediaItem[]): Promise<void>{
        const attachments: IAttachmentPayload[] = medias.map(media => ({
            content: media.base64 || "",
            type: media.type
        }));

        setOccurrence({
            ...occurrence,
            attachments
        });

        navigation.navigate("OccurrenceCaptureEvidence");
    }

    return (
        <CameraDefault onNext={(medias) => handleOnNext(medias)}/>
    );
}



export default React.memo(OccurrenceAccessCameraComponent);