


export default class TokenExpiredError extends Error{
    constructor(){
        super("Token expirado!");
    }
}