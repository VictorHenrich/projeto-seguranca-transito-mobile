import * as ImagePicker from 'expo-image-picker';

import AbstractService from "../../Patterns/AbstractService";
import IAttachmentPayload from "../../Patterns/IAttachmentPayload";




export default class AccessGalleryService extends AbstractService<void, IAttachmentPayload[]>{
    private async verifyPermissions(): Promise<void>{
        const { status }: ImagePicker.MediaLibraryPermissionResponse = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status === ImagePicker.PermissionStatus.DENIED)
            throw new Error("O Aplicativo não foi permitido para acessar a galeria!");
    }

    private async getAttachments(): Promise<IAttachmentPayload[]>{
        const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
            allowsMultipleSelection: true,
            base64: true
        });

        if(result.canceled)
            throw new Error("Nenhuma imagem foi selecionada!");

        return result.assets.map(asset => ({
            content: asset.base64 || "",
            type: asset.type || ""
        }));
    }

    async execute(): Promise<IAttachmentPayload[]> {
        await this.verifyPermissions();

        return await this.getAttachments();
    }   
}