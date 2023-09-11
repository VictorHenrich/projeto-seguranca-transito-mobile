import { CameraCapturedPicture } from "expo-camera";
import { useState, createContext, Context, PropsWithChildren, memo } from "react";



export enum MediaTypes{
    VIDEO = "video",
    IMAGE = "image"
}

export interface MediaItem extends Pick<CameraCapturedPicture, "uri">{
    type: MediaTypes
}

export interface IContextCamera{
    medias: MediaItem[],
    mediaSelected: MediaItem | null,
    setMediaSelected: (media: MediaItem) => void,
    addMedia: (media: MediaItem) => void,
    removeMedias: (...indexes: number[]) => void
    onNext: (medias: MediaItem[]) => void
}


const initialValues: IContextCamera = {
    medias: [],
    mediaSelected: null,
    setMediaSelected: (media: MediaItem)=> null,
    addMedia: ()=> null,
    removeMedias: (...indexes: number[])=> null,
    onNext: (medias: MediaItem[]) => null
}


export interface CameraProviderProps extends PropsWithChildren{
    onNext: (media: MediaItem[]) => void
}

export const ContextCamera: Context<IContextCamera> = createContext(initialValues);

function CameraProvider({ children,  onNext }: CameraProviderProps){

    const [medias, setMedias] = useState<MediaItem[]>(initialValues.medias);
    const [mediaSelected, setMediaSelected] = useState<MediaItem | null>(null);

    function addMedia(media: MediaItem): void{
        setMedias([...medias, media ]);
    }

    function removeMedias(...indexes: number[]): void{
        setMedias(medias.filter((m, index) => {
            return !indexes.some((itemIndex) => index === itemIndex);
        }));
    }

    return (
        <ContextCamera.Provider value={{
            medias,
            addMedia,
            removeMedias,
            setMediaSelected,
            mediaSelected,
            onNext
        }}>
            {children}
        </ContextCamera.Provider>
    )
}


export default memo(CameraProvider);