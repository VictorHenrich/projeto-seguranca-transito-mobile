import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './src/Pages/Home';
import globalTheme from './src/Themes/GlobalTheme';
import LoginPage from './src/Pages/Login';
import RegisterPage from './src/Pages/Register';
import StackNavigation from './src/Components/StackNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={globalTheme}>
      <StackNavigation>
        
      </StackNavigation>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginPage'>
          <Stack.Screen component={RegisterPage} name='RegisterPage'/>
          <Stack.Screen component={LoginPage} name='LoginPage' />
          <Stack.Screen component={HomePage} name='HomePage' />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
