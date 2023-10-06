import { SelectDefaultItemProps } from "../Components/SelectDefault";
import { VehicleTypes } from "../Patterns/IVehiclePayload";


const colors: SelectDefaultItemProps[] = [
    {
        label: "Preto",
        value: "PRETO",
    },
    {
        label: "Branco",
        value: "BRANCO"
    },
    {
        label: "Azul",
        value: "AZUL"
    },
    {
        label: "Laranja",
        value: "LARANJA"
    },
    {
        label: "Amarelo",
        value: "AMARELO"
    },
    {
        label: "Vermelho",
        value: "VERMELHO"
    },
    {
        label: "Prata",
        value: "PRATA"
    },
    {
        label: "Dourado",
        value: "DOURADO"
    },
    {
        label: "Marrom",
        value: "MARROM"
    },
    {
        label: "Roxo",
        value: "ROXO"
    }
];


const states: SelectDefaultItemProps[] = [
    {
        label: "Santa Catarina - SC",
        value: "SC",
    },
    {
        label: "Rio Grande do Sul - RS",
        value: "RS",
    },
    {
        label: "Paraná - PR",
        value: "PR",
    },
    {
        label: "São Paulo - SP",
        value: "SP",
    },
    {
        label: "Bahia - BH",
        value: "BH",
    },
    {
        label: "Rio de Janeiro - RJ",
        value: "RJ",
    },
    {
        label: "Rio Grande do Norte - RN",
        value: "RN",
    },
    {
        label: "Minas Gerais - MG",
        value: "MG",
    }
]


const issueStates: SelectDefaultItemProps[] = [
    {
        label: "Santa Catarina - SC",
        value: "SANTA CATARINA",
    },
    {
        label: "Rio Grande do Sul - RS",
        value: "RIO GRANDE DO SUL",
    },
    {
        label: "Paraná - PR",
        value: "PARANA",
    },
    {
        label: "São Paulo - SP",
        value: "SAO PAULO",
    },
    {
        label: "Bahia - BH",
        value: "BAHIA",
    },
    {
        label: "Rio de Janeiro - RJ",
        value: "RIO DE JANEIRO",
    },
    {
        label: "Rio Grande do Norte - RN",
        value: "RIO GRANDE DO NORTE",
    },
    {
        label: "Minas Gerais - MG",
        value: "MINAS GERAIS",
    }
]


const vehicleTypes: SelectDefaultItemProps[] = [
    {
        label: "Carro",
        value: VehicleTypes.CAR
    },
    {
        label: "Moto",
        value: VehicleTypes.MOTORCYCLE
    }
];


export {
    colors,
    states,
    issueStates,
    vehicleTypes
};