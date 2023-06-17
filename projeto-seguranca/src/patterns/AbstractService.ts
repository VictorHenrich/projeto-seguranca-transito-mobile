export default abstract class AbstractService<P, T = void>{
    constructor(
        protected readonly payload: P
    ){

    }

    abstract execute(): Promise<T> | T
}