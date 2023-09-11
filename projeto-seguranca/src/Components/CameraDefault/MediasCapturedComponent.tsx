import { ReactElement, useContext, useState, useEffect, memo } from "react";
import { Center, Icon, Stack, Box, FlatList} from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import ContainerDefault from "../ContainerDefault";
import ImageDefault from "../ImageDefault";
import { ContextCamera, IContextCamera, MediaItem } from "./CameraProvider";
import ButtonDefault from "../ButtonDefault";



function MediasCapturedComponent(props: any): ReactElement{
    const navigation: NavigationProp<any> = useNavigation();

    const [indexMediasSelected, setIndexMediasSelected] = useState<number[]>([]);
    const [selectable, setSelectable] = useState<boolean>(false);

    const {
        medias,
        setMediaSelected,
        removeMedias
    }: IContextCamera = useContext(ContextCamera);


    useEffect(()=>{
        if(!medias.length)
            returnToCamera()
    },[medias]);


    function returnToCamera(): void{
        navigation.navigate("AccessCamera");
    }


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

            navigation.navigate("MediaView");
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
                    width={150}
                    onTouchStart={()=> {
                        setSelectable(!selectable);

                        if(!selectable)
                            setIndexMediasSelected([]);
                    }}
                    rightIcon={
                        <Icon 
                            as={<AntDesign name="select1"/>}
                            color="#ffffff"
                            size="lg"   
                        />
                    }
                />
                {
                    selectable && (
                        <ButtonDefault 
                            text="Remover"
                            width={100}
                            backgroundColor="red"
                            onTouchStart={()=> {
                                if(medias.length)
                                    removeMedias(...indexMediasSelected);

                                setIndexMediasSelected([]);
                            }}
                        />
                    )
                }
            </Box>
            <Center
                height="80%"
                width="full"
                padding={5}
            >
                <Center
                    width="full"
                    height={200}
                    margin={1}
                    backgroundColor="#000000"
                    onTouchStart={()=> {
                        navigation.navigate("AccessCamera");
                    }}
                >
                    <Icon 
                        as={<FontAwesome5 name="camera"/>}
                        size="xl"
                        color="primary"
                    />
                </Center>
                <FlatList
                    width="full"
                    data={medias}
                    renderItem={(media) => {
                        const attachment: MediaItem = media.item;

                        const index: number = media.index;

                        let selected: boolean = false;

                        if(indexMediasSelected.length)
                            selected = existsIndex(index);

                        return (
                            <Center
                                position="relative"
                                key={index}
                                width="100%"
                                height={200}
                                margin={1}
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
                    }}
                />
            </Center>
        </Stack>
    );
}


export default memo(MediasCapturedComponent);