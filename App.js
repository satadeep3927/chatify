import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
/*======================================
| Components
|=======================================
*/
import Login from './Pages/Login';
import Register from './Pages/Register';
import Verify from './Pages/Verify';
import Home from './Pages/Home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  let [fontsLoaded] = useFonts({
    'Font awesome 6 pro': require('./assets/fonts/fa-regular-400.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register', headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{ title: 'Verify', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
