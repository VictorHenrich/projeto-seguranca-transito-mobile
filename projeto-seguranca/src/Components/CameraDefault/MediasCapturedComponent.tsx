import { ReactElement, useContext, useState, useEffect } from "react";
import { Center, Icon, Stack, Box} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import ContainerDefault from "../ContainerDefault";
import ImageDefault from "../ImageDefault";
import { ContextCamera, IContextCamera, MediaItem } from "./CameraProvider";
import ButtonDefault from "../ButtonDefault";



export default function MediasCapturedComponent(props: any): ReactElement{
    const [indexMediasSelected, setIndexMediasSelected] = useState<number[]>([]);
    const [selectable, setSelectable] = useState<boolean>(false);

    const {
        medias,
        setMediaSelected,
        removeMedia
    }: IContextCamera = useContext(ContextCamera);


    useEffect(()=>{
        if(!medias.length)
            props.navigation.navigate("AccessCamera");
    },[medias]);


    function addIndex(index: number): void{
        setIndexMediasSelected([...indexMediasSelected, index]);
    }

    function removeIndex(index: number): void{
        const indexMedias: number[] = [...indexMediasSelected]

        indexMedias.splice(index, 1);

        setIndexMediasSelected([...indexMedias]);
    }

    function existsIndex(index: number): boolean{
        return indexMediasSelected.some((indexItem) => index === indexItem);
    }
    
    function handleClickMedia(media: MediaItem, selected: boolean, index: number): void{
        if(selectable){
            if(selected)
                removeIndex(index);

            else
                addIndex(index);

        }else{
            setMediaSelected(media);

            props.navigation.navigate("MediaView");
        }
    }

    return (
        <Stack 
            height="full"
            width="full" 
            backgroundColor="secondary"
            paddingTop={50}
            space={5}
        >
            <Box 
                width="full"
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
                flexDirection="row-reverse"
                padding={5}
            >
                <ButtonDefault 
                    text={!selectable ? "Selecionar" : "Cancelar"}
                    width={100}
                    onTouchStart={()=> {
                        setSelectable(!selectable);

                        if(!selectable)
                            setIndexMediasSelected([]);
                    }}
                />
                {
                    selectable && (
                        <ButtonDefault 
                            text="Remover"
                            width={100}
                            backgroundColor="red"
                            onTouchStart={()=> {
                                if(medias.length)
                                    indexMediasSelected.forEach(indexItem => removeMedia(indexItem));
                            }}
                        />
                    )
                }
            </Box>
            <ContainerDefault>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    width="full"
                    height="full"
                    space={1}
                >
                    <Center
                        width="48%"
                        height="30%"
                        backgroundColor="#000000"
                        onTouchStart={()=> {
                            props.navigation.navigate("AccessCamera");
                        }}
                    >
                        <Icon 
                            as={<FontAwesome5 name="camera"/>}
                            size="xl"
                            color="primary"
                        />
                    </Center>
                    {medias.map((attachment, index) => {
                        let selected: boolean = false;

                        if(indexMediasSelected.length)
                            selected = existsIndex(index);

                        return (
                            <Center
                                position="relative"
                                key={index}
                                width="48%"
                                height="30%"
                                onTouchEnd={()=> handleClickMedia(attachment, selected, index)}
                            >
                                {
                                    selectable ? (
                                        <Icon 
                                            as={
                                                <MaterialIcons 
                                                    name={selected ? "check-box" : "check-box-outline-blank"}
                                                />
                                            }
                                            color="primary"
                                            size="xl"
                                            position="absolute"
                                            top={5}
                                            right={5}
                                            zIndex={100}
                                        />
                                    )

                                    : null
                                }
                                <ImageDefault 
                                    source={{
                                        uri: attachment.uri
                                    }}
                                    alt={`myphoto${index}`}
                                />
                            </Center>
                        );
                    })}
                </Stack>
            </ContainerDefault>
        </Stack>
    );
}