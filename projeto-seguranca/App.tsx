import { NativeBaseProvider } from 'native-base';

import HomePage from './src/Pages/Home';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';
import RegisterPage from './src/Pages/Register';
import StackNavigation, {IStackScreen} from './src/Components/StackNavigation';


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
];

export default function App() {
  return (
    <NativeBaseProvider theme={globalTheme}>
      <StackNavigation
          initialRouteName="HomePage"
          screens={screens}
      />
    </NativeBaseProvider>
  );
}
