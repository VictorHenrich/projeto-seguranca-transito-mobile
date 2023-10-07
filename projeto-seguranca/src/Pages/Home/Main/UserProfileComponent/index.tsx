import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Avatar, Heading, Text, Divider, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ContainerDefault from "../../../../Components/ContainerDefault";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import VehicleItemComponent from "./VehicleItemComponent";
import ButtonDefault from "../../../../Components/ButtonDefault";
import SelectDefault from "../../../../Components/SelectDefault";
import { states } from "../../../../Utils/Constants";
import InfoVehicleComponent from "./InfoVehicleComponent";
import IVehiclePayload from "../../../../Patterns/IVehiclePayload";
import CreateVehicleService from "../../../../Services/App/CreateVehicleService";
import UpdateVehicleService from "../../../../Services/App/UpdateVehicleService";
import DeleteVehicleService from "../../../../Services/App/DeleteVehicleService";
import UpdateUserService from "../../../../Services/App/UpdateUserService";
import LogoutService from "../../../../Services/App/LogoutService";
import IUserPayload from "../../../../Patterns/IUserPayload";
import IAddressPayload from "../../../../Patterns/IAddressPayload";
import AlertDefault, { AlertDefaultProps } from "../../../../Components/AlertDefault";
import { IGlobalState } from "../../../../Redux/GlobalSlice";
import { loadUserFull } from "../Functions";
import ModalConfirm from "../../../../Components/ModalConfirm";


function UserProfileComponent(props: any): React.ReactElement{
    const dispatch = useDispatch();

    const globalUser: IUserPayload = useSelector<IGlobalState, IUserPayload>((state) => state.user);
    
    const navigation: NavigationProp<any> = useNavigation<any>();

    const [user, setUser] = useState<IUserPayload>(globalUser);

    const [showVehicleModal, setShowVehicleModal] = useState<boolean>(false);

    const [vehicleSelected, setVehicleSelected] = useState<IVehiclePayload | void>();

    const [alertState, setAlertState] = useState<Omit<AlertDefaultProps, "stateOpen">>({
        text: "",
        open: false,
        status: "info"
    });

    const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false);

    useEffect(() => {
        setUser({...globalUser});
    }, [globalUser]);

    function handleChangeUser(userData: Partial<IUserPayload>): void{
        setUser({...user, ...userData});
    }

    function handleChangeAddress(addressData: Partial<IAddressPayload>): void{
        setUser({
            ...user, 
            address: {
                ...user.address,
                ...addressData
            }
        });
    }

    function resetProps(): void{
        setVehicleSelected(undefined);
        setShowVehicleModal(false);
        setShowModalConfirm(false);
    }

    async function logout(): Promise<void>{
        await new LogoutService().execute();

        navigation.navigate("LoginPage");
    }

    async function createVehicle(vehicle: IVehiclePayload): Promise<void>{
        try{
            await new CreateVehicleService(vehicle).execute();

            setAlertState({
                open: true,
                text: "Veículo criado com sucesso",
                status: "success",
            });

        }catch(error){
            setAlertState({
                open: true,
                status: "error",
                text: "Falha ao criar novo veículo",
            });
        }
    }


    async function updateVehicle(vehicle: IVehiclePayload): Promise<void>{
        try{
            await new UpdateVehicleService(vehicle).execute();

            setAlertState({
                open: true,
                text: "Veículo atualizado com sucesso",
                status: "success"
            });

        }catch(error){
            setAlertState({
                open: true,
                text: "Falha ao atualizar novo veículo",
                status: "success"
            });
        }
    }

    async function updateUser(): Promise<void>{
        try{
            await new UpdateUserService(user).execute();

            await loadUserFull(dispatch);

            setAlertState({
                open: true,
                text: "Perfil atualizado com sucesso",
                status: "success"
            });

        }catch(error){
            setAlertState({
                open: true,
                text: "Falha ao atualizar perfil",
                status: "error"
            });

        }

        resetProps();
    }

    async function createOrUpdateVehicle(vehicle: IVehiclePayload): Promise<void>{
        if(!vehicle.uuid)
            await createVehicle(vehicle);

        else
            await updateVehicle(vehicle);

        await loadUserFull(dispatch);

        resetProps();
    }


    async function deleteVehicle(): Promise<void>{
        if(!vehicleSelected) return;

        try{
            await new DeleteVehicleService(vehicleSelected).execute();

            await loadUserFull(dispatch);

            setAlertState({
                open: true,
                text: "Veículo excluido com sucesso",
                status: "success"
            });

        }catch(error){
            setAlertState({
                open: true,
                text: "Falha ao excluir veículo",
                status: "error"
            });
        }

        resetProps();
    }

    return (
        <>
            <ContainerDefault 
                background="secondary"
                justifyContent="flex-start"
                padding={5}
            >
                <Stack
                    direction="column"
                    space={20}
                    width="full"
                >
                    <Stack 
                        direction="column" 
                        space={5}
                        alignItems="center"
                        width="full"
                    >
                        <Avatar 
                            size="xl"
                            backgroundColor="black"
                        />
                        <Heading
                            fontWeight={700}
                            color="white"
                            textAlign="center"
                            textTransform="capitalize"
                        >
                            {user.name}
                        </Heading>
                    </Stack>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <Stack
                            width="full"
                            space={2}
                            direction="column"
                        >
                            <Stack 
                                direction="row"
                                alignItems="flex-end"
                                space={5}
                                paddingBottom={2}
                            >
                                <Text
                                    fontWeight={700}
                                    color="primary"
                                >
                                    DADOS PESSOAIS
                                </Text>
                                <Icon
                                    size="xl"
                                    as={<FontAwesome5 name="user-cog"/>}
                                    color="primary"
                                />
                            </Stack>
                            <Divider 
                                backgroundColor="primary" 
                                height={1}
                                borderRadius={5}
                            />
                        </Stack>
                        <Stack
                            width="full"
                            space={10}
                        >
                            <InputComponent 
                                label="EMAIL"
                                InputDefaultProps={{
                                    value: user.email,
                                    onChangeText: (value) => {
                                        handleChangeUser({ email: value });
                                    }
                                }}
                            />
                            <InputComponent 
                                label="CPF"
                                InputDefaultProps={{
                                    value: user.documentCpf,
                                    onChangeText: (value) => {
                                        handleChangeUser({ documentCpf: value });
                                    }
                                }}
                            />
                            <InputComponent 
                                label="RG"
                                InputDefaultProps={{
                                    value: user.documentRg,
                                    onChangeText: (value) => {
                                        handleChangeUser({ documentRg: value });
                                    }
                                }}
                            />
                            <InputComponent 
                                label="TELEFONE"
                                InputDefaultProps={{
                                    value: user.telephone,
                                    onChangeText: (value) => {
                                        handleChangeUser({ telephone: value });
                                    }
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <Stack
                            width="full"
                            space={2}
                            direction="column"
                        >
                            <Stack 
                                direction="row"
                                alignItems="flex-end"
                                space={5}
                                paddingBottom={2}
                            >
                                <Text
                                    fontWeight={700}
                                    color="primary"
                                >
                                    DADOS DE ENDEREÇO
                                </Text>
                                <Icon
                                    size="xl"
                                    as={<FontAwesome5 name="map-marker-alt"/>}
                                    color="primary"
                                />
                            </Stack>
                            <Divider 
                                backgroundColor="primary" 
                                height={1}
                                borderRadius={5}
                            />
                        </Stack>
                        <Stack
                            width="full"
                            space={10}
                        >
                            <SelectComponent
                                label="UF"
                                selectDefaultProps={{
                                    itens: states,

                                    selectedValue:user.address.state,

                                    onValueChange: (value) => {
                                        handleChangeAddress({state: value});
                                    }
                                }}
                            />
                            <InputComponent 
                                label="CIDADE"
                                InputDefaultProps={{
                                    value: user.address.city,
                                    onChangeText: (value) => {
                                        handleChangeAddress({ city: value });
                                    }
                                }}
                            />
                            <InputComponent 
                                label="BAIRRO"
                                InputDefaultProps={{
                                    value: user.address.district,
                                    onChangeText: (value) => {
                                        handleChangeAddress({ district: value });
                                    }
                                }}
                            />
                            <InputComponent 
                                label="LOGRADOURO"
                                InputDefaultProps={{
                                    value: user.address.street,
                                    onChangeText: (value) => {
                                        handleChangeAddress({ street: value });
                                    }
                                }}
                            />
                            <InputComponent 
                                label="NUMERO"
                                InputDefaultProps={{
                                    value: `${user.address.number}`,
                                    onChangeText: (value) => {
                                        handleChangeAddress({ number: value });
                                    }
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        width="full"
                        space={10}
                    >
                        <Stack
                            width="full"
                            space={2}
                            direction="column"
                        >
                            <Stack 
                                direction="row"
                                alignItems="flex-end"
                                space={5}
                                paddingBottom={2}
                            >
                                <Text
                                    fontWeight={700}
                                    color="primary"
                                >
                                    VEÍCULOS CADASTRADOS
                                </Text>
                                <Icon
                                    size="xl"
                                    as={<FontAwesome5 name="car"/>}
                                    color="primary"
                                />
                            </Stack>
                            <Divider 
                                backgroundColor="primary" 
                                height={1}
                                borderRadius={5}
                            />
                        </Stack>
                        {
                            user.vehicles.map((vehicle, index) => (
                                <VehicleItemComponent 
                                    {...vehicle}
                                    onChange={() => {
                                        setVehicleSelected(vehicle);
                                        setShowVehicleModal(true);
                                    }}
                                    onDelete={() => {
                                        setVehicleSelected(vehicle);
                                        setShowModalConfirm(true);
                                    }}
                                    key={index}
                                />
                            ))
                        }
                    </Stack>

                    <Stack 
                        width="full"
                        direction="column"
                        alignItems="center"
                        space={5}
                        borderTopWidth={1}
                        borderTopColor="#999999"
                        paddingTop={5}
                    >
                        <ButtonDefault 
                            text="Salvar Alterações"
                            rightIcon={
                                <Icon 
                                    as={<FontAwesome5 name="user-edit"/>}
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => updateUser()}
                        />
                        <ButtonDefault 
                            text="Adicionar Veículo"
                            rightIcon={
                                <Icon 
                                    as={<FontAwesome5 name="car-side"/>}
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => setShowVehicleModal(true)}
                        />
                        <ButtonDefault
                            backgroundColor="red"
                            text="Sair"
                            rightIcon={
                                <Icon 
                                    as={<MaterialCommunityIcons name="logout"/>}
                                    color="#FFFFFF"
                                />
                            }
                            onPress={() => logout()}
                        />
                    </Stack>
                </Stack>
            </ContainerDefault>
            <InfoVehicleComponent 
                open={showVehicleModal}
                vehicle={vehicleSelected ? vehicleSelected: undefined}
                onClose={resetProps}
                onChange={(vehicle) => createOrUpdateVehicle(vehicle)}
            />
            <AlertDefault
                {...alertState}
                stateOpen={(open) =>{
                    setAlertState({ ...alertState, open })
                }}
            />
            <ModalConfirm 
                open={showModalConfirm} 
                text="Você deseja realizar a exclusão desse registro?"
                onConfirm={() => deleteVehicle()}
                onClose={resetProps}
            />
        </>
    );
}


export default React.memo(UserProfileComponent);