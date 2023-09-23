import React, { useContext } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CameraDefault from "../../../Components/CameraDefault";
import { MediaItem } from '../../../Components/CameraDefault/CameraProvider';
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from './OccurrenceRegisterProvider';
import IAttachmentPayload from '../../../Patterns/IAttachmentPayload';
import FetchFileContentService from '../../../Services/App/FetchFileContentService';



function OccurrenceAccessCameraComponent(props: any){
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        setOccurrence,
        occurrence
    } = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);


    async function handleOnNext(medias: MediaItem[]): Promise<void>{
        const uris: string[] = medias.map(media => media.uri);

        const attachments: IAttachmentPayload[] = 
            await new FetchFileContentService({ uris }).execute();

        setOccurrence({
            ...occurrence,
            attachments
        });

        navigation.navigate("OccurrenceCaptureEvidence");
    }

    return (
        <CameraDefault onNext={handleOnNext}/>
    );
}



export default React.memo(OccurrenceAccessCameraComponent);