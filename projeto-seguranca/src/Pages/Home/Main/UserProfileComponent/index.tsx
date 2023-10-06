import React, {useContext, useState, useEffect} from "react";
import { Stack, Avatar, Heading, Text, Divider, Icon } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ContainerDefault from "../../../../Components/ContainerDefault";
import InputUserComponent from "./InputUserComponent";
import VehicleItemComponent from "./VehicleItemComponent";
import ButtonDefault from "../../../../Components/ButtonDefault";
import { ContextHome, IContextMain } from "../MainProvider";
import SelectDefault from "../../../../Components/SelectDefault";
import { states } from "../../../../Utils/Constants";
import InfoVehicleComponent from "./InfoVehicleComponent";
import IVehiclePayload from "../../../../Patterns/IVehiclePayload";
import CreateVehicleService from "../../../../Services/App/CreateVehicleService";
import UpdateVehicleService from "../../../../Services/App/UpdateVehicleService";
import UpdateUserService from "../../../../Services/App/UpdateUserService";
import LogoutService from "../../../../Services/App/LogoutService";
import IUserPayload from "../../../../Patterns/IUserPayload";
import IAddressPayload from "../../../../Patterns/IAddressPayload";
import AlertDefault, { AlertDefaultProps } from "../../../../Components/AlertDefault";



function UserProfileComponent(props: any): React.ReactElement{
    const {
        user,
        setUser,
        loadUser
    } =  useContext<IContextMain>(ContextHome);

    const navigation: NavigationProp<any> = useNavigation<any>();

    const [showVehicleModal, setShowVehicleModal] = useState<boolean>(false);

    const [vehicleSelected, setVehicleSelected] = useState<IVehiclePayload | void>();

    const [alertState, setAlertState] = useState<Omit<AlertDefaultProps, "stateOpen">>({
        text: "",
        open: false,
        status: "info"
    });

    useEffect(() => {
        setShowVehicleModal(Boolean(vehicleSelected));
    }, [vehicleSelected]);

    function changeUser(userData: Partial<IUserPayload>): void{
        setUser({...user, ...userData});
    }

    function changeAddress(addressData: Partial<IAddressPayload>): void{
        changeUser({
            address: {
                ...user.address,
                ...addressData
            }
        })
    }

    function resetProps(): void{
        setVehicleSelected(undefined);
        setShowVehicleModal(false);
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

            await loadUser();

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
    }

    async function createOrUpdateVehicle(vehicle: IVehiclePayload): Promise<void>{
        resetProps();

        if(!vehicle.uuid)
            await createVehicle(vehicle);

        else
            await updateVehicle(vehicle);

        await loadUser();
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
                            color="primary"
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
                            <InputUserComponent 
                                label="EMAIL"
                                InputDefaultProps={{
                                    value: user.email,
                                    onChangeText: (value) => {
                                        changeUser({ email: value });
                                    }
                                }}
                            />
                            <InputUserComponent 
                                label="CPF"
                                InputDefaultProps={{
                                    value: user.documentCpf,
                                    onChangeText: (value) => {
                                        changeUser({ documentCpf: value });
                                    }
                                }}
                            />
                            <InputUserComponent 
                                label="RG"
                                InputDefaultProps={{
                                    value: user.documentRg,
                                    onChangeText: (value) => {
                                        changeUser({ documentRg: value });
                                    }
                                }}
                            />
                            <InputUserComponent 
                                label="TELEFONE"
                                InputDefaultProps={{
                                    value: user.telephone,
                                    onChangeText: (value) => {
                                        changeUser({ telephone: value });
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
                            <SelectDefault 
                                itens={states}
                                selectedValue={user.address.state}
                                onValueChange={(value) => {
                                    changeAddress({state: value});
                                }}
                            />
                            <InputUserComponent 
                                label="CIDADE"
                                InputDefaultProps={{
                                    value: user.address.city,
                                    onChangeText: (value) => {
                                        changeAddress({ city: value });
                                    }
                                }}
                            />
                            <InputUserComponent 
                                label="BAIRRO"
                                InputDefaultProps={{
                                    value: user.address.district,
                                    onChangeText: (value) => {
                                        changeAddress({ district: value });
                                    }
                                }}
                            />
                            <InputUserComponent 
                                label="LOGRADOURO"
                                InputDefaultProps={{
                                    value: user.address.street,
                                    onChangeText: (value) => {
                                        changeAddress({ street: value });
                                    }
                                }}
                            />
                            <InputUserComponent 
                                label="NUMERO"
                                InputDefaultProps={{
                                    value: `${user.address.number}`,
                                    onChangeText: (value) => {
                                        changeAddress({ number: value });
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
                                    onChange={() => setVehicleSelected(vehicle)}
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
        </>
    );
}


export default React.memo(UserProfileComponent);