/* import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';




export default App; */


import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContatoScreen from './screens/ContatoScreen';
import HorarioScreen from './screens/HorarioScreen';
import SobreScreen from './screens/SobreScreen';

import HomeTelas from './stack/HomeTelas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? <Image source={require('../cardapio1/src/img/home_azul.png')} style={styles.icone} />
                : <Image source={require('../cardapio1/src/img/home_preto.png')} style={styles.icone} />;
            } else if(route.name === 'Contato'){
              iconName = focused
                ? <Image source={require('../cardapio1/src/img/contato_azul.png')} style={styles.icone} />
                : <Image source={require('../cardapio1/src/img/contato_preto.png')} style={styles.icone} />;
            } else if(route.name === 'Horário'){
              iconName = focused
                ? <Image source={require('../cardapio1/src/img/horario_azul.png')} style={styles.icone} />
                : <Image source={require('../cardapio1/src/img/horario_preto.png')} style={styles.icone} />;
            }else if(route.name === 'Sobre'){
              iconName = focused
                ? <Image source={require('../cardapio1/src/img/sobre_azul.png')} style={styles.icone} />
                : <Image source={require('../cardapio1/src/img/sobre_preto.png')} style={styles.icone} />;
            }

            // You can return any component that you like here!
            return iconName;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen options={{headerShown: false}} name="Home" component={HomeTelas} />
        <Tab.Screen name="Contato" component={ContatoScreen} 
           options={({route})=>({
           headerTitleAlign: 'center',headerTitleStyle: {
            fontWeight: 'bold',
          }
        })}
        />
        <Tab.Screen name="Horário" component={HorarioScreen} 
           options={({route})=>({
            headerTitleAlign: 'center', headerTitleStyle: {
              fontWeight: 'bold',
            }
         })} 
         />
        <Tab.Screen name="Sobre" component={SobreScreen}
          options={({route})=>({
            headerTitleAlign: 'center',headerTitleStyle: {
              fontWeight: 'bold',
            }
         })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icone:{
    width: 26,
    height: 26
  }
})


