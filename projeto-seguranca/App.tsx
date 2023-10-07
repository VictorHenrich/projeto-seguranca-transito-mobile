import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux'

import HomePage from './src/Pages/Home';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';
import RegisterPage from './src/Pages/Register';
import StackNavigation, {IStackScreen} from './src/Components/StackNavigation';
import GlobalStore from './src/Redux/GlobalStore';


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
    <Provider store={GlobalStore}>
      <NativeBaseProvider theme={globalTheme}>
        <StackNavigation
            initialRouteName="LoginPage"
            screens={screens}
        />
      </NativeBaseProvider>
    </Provider>
  );
}
