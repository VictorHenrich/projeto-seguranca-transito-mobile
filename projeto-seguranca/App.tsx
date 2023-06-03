import { NativeBaseProvider } from 'native-base';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';
import RegisterPerson from './src/Pages/Register/RegisterPerson';

export default function App() {
  return (
    <NativeBaseProvider theme={globalTheme}>
      <RegisterPerson/>
    </NativeBaseProvider>
  );
}
