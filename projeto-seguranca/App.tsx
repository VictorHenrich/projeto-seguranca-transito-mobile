import { NativeBaseProvider } from 'native-base';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';

export default function App() {
  return (
    <NativeBaseProvider theme={globalTheme}>
      <LoginPage/>
    </NativeBaseProvider>
  );
}
