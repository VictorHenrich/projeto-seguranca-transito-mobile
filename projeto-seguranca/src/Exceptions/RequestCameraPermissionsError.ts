


export default class RequestCameraPermissionsError extends Error{
    constructor(message: string){
        let messageError: string = (
            "Falha na requisição de permissões de uso da camera!\n" +
            `Message: ${message}`
        )

        super(messageError);
    }
}