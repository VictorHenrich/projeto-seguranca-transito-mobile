import { Camera, PermissionResponse, CameraCapturedPicture, CameraType, VideoCodec } from 'expo-camera';
import RequestCameraPermissionsError from '../../Exceptions/RequestCameraPermissionsError';
import { MediaTypes } from './CameraProvider';

export interface CameraStateProps{
    buttonRecordPressed: boolean,
    flashActivated: boolean,
    mediaType: MediaTypes,
    cameraType: CameraType,
    cameraRef: null | Camera
}



export default class CameraUtils{
    static async requestCameraPermission(): Promise<void>{
        const responsePermissionCamera: PermissionResponse = await Camera.requestCameraPermissionsAsync();

        const responsePermissionAudio: PermissionResponse = await Camera.requestMicrophonePermissionsAsync();

        if(!responsePermissionCamera.status)
            throw new RequestCameraPermissionsError("Acesso a camera negado!");

        if(!responsePermissionAudio.status)
            throw new RequestCameraPermissionsError("Acesso a camera negado!");
    }

    static async capturePhoto(cameraRef: Camera | null): Promise<CameraCapturedPicture | void>{
        if(!cameraRef) return;
    
        return await cameraRef.takePictureAsync({ 
            scale: 1,
            base64: true
        });
    }


    static async startingVideo(cameraRef: Camera | null): Promise<Pick<CameraCapturedPicture, "uri"> | void>{
        if(!cameraRef) return;
    
        return await cameraRef.recordAsync({ 
            quality: '720p', 
            codec: VideoCodec.H264
        });
    }


    static async stopingVideo(cameraRef: Camera | null): Promise<void>{
        if(!cameraRef) return;
    
        await cameraRef.stopRecording();
    }
    
}






