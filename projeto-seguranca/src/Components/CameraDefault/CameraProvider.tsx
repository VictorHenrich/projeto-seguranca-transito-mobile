import { CameraCapturedPicture } from "expo-camera";
import { useState, createContext, Context, PropsWithChildren } from "react";



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
    removeMedia: (index: number) => void
}


const initialValues: IContextCamera = {
    medias: [],
    mediaSelected: null,
    setMediaSelected: (media: MediaItem)=> null,
    addMedia: ()=> null,
    removeMedia: ()=> null
}

export const ContextCamera: Context<IContextCamera> = createContext(initialValues);

export default function CameraProvider({ children }: PropsWithChildren){

    const [medias, setMedias] = useState<MediaItem[]>(initialValues.medias);
    const [mediaSelected, setMediaSelected] = useState<MediaItem | null>(null);

    function addMedia(media: MediaItem): void{
        setMedias([...medias, media ]);
    }

    function removeMedia(index: number): void{
        const mediasUpdate = [...medias];

        mediasUpdate.splice(index, 1);

        setMedias([ ...mediasUpdate ]);
    }

    return (
        <ContextCamera.Provider value={{
            medias,
            addMedia,
            removeMedia,
            setMediaSelected,
            mediaSelected
        }}>
            {children}
        </ContextCamera.Provider>
    )
}