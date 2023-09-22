import Axios, {AxiosResponse} from "axios";
import AbstractService from "../Patterns/AbstractService";
import IAttachmentPayload from "../Patterns/IAttachmentPayload";


export interface FetchFileContentServiceProps{
    uris: string[]
}


export default class FetchFileContentService extends AbstractService<FetchFileContentServiceProps, IAttachmentPayload[]>{

    private getFilesResponse(): Promise<AxiosResponse>[]{
        return this.payload.uris.map(uri => {
            return Axios.get(uri, {responseEncoding: "blob"});
        });
    }

    private getFilesBlob(filesResponse: AxiosResponse[]): Blob[]{
        return filesResponse.map(response => {
            return response.data;
        });
    }

    private parseBlobToBase64(blob: Blob): Promise<IAttachmentPayload>{
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.addEventListener("load", ()=>{
                const result: string = reader.result.toString();
                
                const fileData: IAttachmentPayload = {
                    content: Buffer.from(result, "base64").toString(),
                    type: blob.type
                }

                resolve(fileData);
            });

            reader.addEventListener("error", () => {
                reject(new Error("Falha ao processar o arquivo!"));
            });

            reader.readAsText(blob);
        });
    }

    private getBlobsResponse(blobs: Blob[]): Promise<IAttachmentPayload>[]{
        return blobs.map(blob => {
            return this.parseBlobToBase64(blob);
        })
    }

    async execute(): Promise<IAttachmentPayload[]> {
        try{

            const filesResponse: AxiosResponse[] = await Promise.all(this.getFilesResponse());

            const blobs: Blob[] = this.getFilesBlob(filesResponse);

            return await Promise.all(this.getBlobsResponse(blobs));

        }catch(error){
            throw new Error("Falha ao processar os arquivos");
        }
    }

}