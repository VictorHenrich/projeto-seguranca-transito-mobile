import React, { useContext } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CameraDefault from "../../../Components/CameraDefault";
import { MediaItem } from '../../../Components/CameraDefault/CameraProvider';
import { IOccurrenceRegisterContext, OccurrenceRegisterContext } from './OccurrenceRegisterProvider';



function OccurrenceCameraComponent(props: any){
    const navigation: NavigationProp<any> = useNavigation<any>();

    const {
        setOccurrence,
        occurrence
    } = useContext<IOccurrenceRegisterContext>(OccurrenceRegisterContext);

    function handleOnNext(medias: MediaItem[]): void{
        setOccurrence({
            ...occurrence,
            attachments: medias.map(media => ({
                content: media.uri,
                type: media.type
            }))
        });

        navigation.navigate("OccurrenceFinish");
    }

    return (
        <CameraDefault onNext={handleOnNext}/>
    );
}



export default React.memo(OccurrenceCameraComponent);