



export default interface IService<T = void>{
    execute: ()=> Promise<T> | T
}