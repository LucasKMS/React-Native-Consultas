import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';
import Footer from './src/components/Footer';

// Criando o Stack Navigator
const Stack = createStackNavigator();

export default function App() {

  return (
        <>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>

          <Stack.Screen name="Cadastro" component={CadastroScreen}/>

          <Stack.Screen name="Consulta" component={ConsultaScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Footer/>
      </>
  );
}
 