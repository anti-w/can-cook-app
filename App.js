import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CalculatorScreen from './src/screens/CalculatorScreen'

const Stack = createNativeStackNavigator()

import HomeScreen from './src/screens/HomeScreen'
// import LoginScreen from './src/screens/LoginScreen';



export default function App() {
  return (
    <NavigationContainer theme={{
      colors: {
        background: 'white'
      }
    }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            headerTintColor: '#88A61C',
            title: 'Calculadora Nutricional',
            headerStyle: {
              backgroundColor: 'white'
            }

          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}


