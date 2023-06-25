import { Camera, PermissionResponse, CameraCapturedPicture } from 'expo-camera';
import RequestCameraPermissionsError from '../../Exceptions/RequestCameraPermissionsError';


export type CameraComponentType = "video" | "photo"

export type CameraComponentPosition = "front" | "back"


export interface CameraStateProps{
    buttonRecordPressed: boolean,
    flashActivated: boolean,
    cameraPosition: CameraComponentPosition,
    cameraType: CameraComponentType,
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
    
        return await cameraRef.takePictureAsync({ scale: 1 });
    }


    static async startingVideo(cameraRef: Camera | null): Promise<Pick<CameraCapturedPicture, "uri"> | void>{
        if(!cameraRef) return;
    
        return await cameraRef.recordAsync({ quality: 720 });
    }


    static async stopingVideo(cameraRef: Camera | null): Promise<void>{
        if(!cameraRef) return;
    
        await cameraRef.stopRecording();
    }
    
}






