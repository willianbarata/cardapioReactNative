import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

function SobreScreen() {
    return (
      <View >
           <Image source={require('../src/img/dentroRestaurante.jpg')} style={styles.rest}/>
       <View style={{  alignItems: 'center' }}>
                <Text style={styles.label} > Conheça os melhores   </Text>
                <Text style={styles.label} > pratos da região</Text>
                <Text style={styles.label} > Com 20 anos de tradição  </Text>
                <View style={{ alignItems: 'center',margin: 20}}>
                <Text style={{fontSize: 20}} > Rua do Restaurante, 123   </Text>
                <Text style={{fontSize: 20}} > Cidade - UF</Text>
                </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
        rest:{
            width: 420,
            height: 230
        },
        label:{
            fontSize: 28,
            color: 'black',
            alignItems: 'center'
        }
  });

  

  export default SobreScreen;