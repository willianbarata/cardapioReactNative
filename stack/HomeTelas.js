import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './HomeStack';
import DetailsStack from './DetailsStack';

const Stack = createNativeStackNavigator();

function HomeTelas({navigation}) {
  return (
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={HomeStack} 
            options={({route})=>({
                title: 'Cardápio',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            })}
        
        />
        <Stack.Screen name="Details" component={DetailsStack} 
        options={({route})=>({
            title: route.params.name,headerTitleAlign: 'center',
        })}/>
      </Stack.Navigator>  
  );
}
export default HomeTelas;