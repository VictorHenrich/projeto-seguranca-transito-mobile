import { useState, useEffect } from "react";
import { NativeBaseProvider } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './src/Pages/Home';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';
import RegisterPage from './src/Pages/Register';
import StackNavigation, {IStackScreen} from './src/Components/StackNavigation';
import StartProcessRegisterOccurrenceComponent from './src/Pages/Home/OccurrenceRegisterComponent/Start';
import { AUTH_KEY } from "@env";


const screens: IStackScreen[] = [
  {
    component: RegisterPage,
    name: "RegisterPage"
  },
  {
    component: LoginPage,
    name: "LoginPage"
  },
  {
    component: HomePage,
    name: "HomePage"
  },
  {
    component: StartProcessRegisterOccurrenceComponent,
    name: "OccurrenceRegister"
  }
];

export default function App() {
  const [userChecked, setUserChecked] = useState<boolean>(false);

  useEffect(() => {
    verifyAuthToken();
  }, []);

  async function verifyAuthToken(): Promise<void>{
    const token: string | null = await AsyncStorage.getItem(AUTH_KEY);

    setUserChecked(!token);
  }

  return (
    <NativeBaseProvider theme={globalTheme}>
      <StackNavigation
          initialRouteName={userChecked ? "HomePage" : "LoginPage"}
          screens={screens}
      />
    </NativeBaseProvider>
  );
}
