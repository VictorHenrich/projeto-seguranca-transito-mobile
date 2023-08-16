import { useState, useEffect } from "react";
import { NativeBaseProvider } from 'native-base';
import HomePage from './src/Pages/Home';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';
import RegisterPage from './src/Pages/Register';
import StackNavigation, {IStackScreen} from './src/Components/StackNavigation';
import StartProcessRegisterOccurrenceComponent from './src/Pages/Home/OccurrenceRegisterComponent/Start';
import AuthRefreshService from "./src/Services/AuthRefreshService";


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
  const [userLogged, setUserLogged] = useState<boolean>(false);

  useEffect(() => {
    verifyAuthToken();
  }, []);

  async function verifyAuthToken(): Promise<void>{
    const userLogged: boolean = await new AuthRefreshService().execute();

    setUserLogged(userLogged);
  }

  return (
    <NativeBaseProvider theme={globalTheme}>
      <StackNavigation
          initialRouteName={userLogged ? "HomePage" : "LoginPage"}
          screens={screens}
      />
    </NativeBaseProvider>
  );
}
