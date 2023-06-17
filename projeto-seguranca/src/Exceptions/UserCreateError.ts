


export default class UserCreateError extends Error{
    constructor(error: string){
        let errorMessage: string = (
            "Falha ao cadastrar usuário!\n" +
            `Error: ${error}`
        )

        super(errorMessage);
    }
}