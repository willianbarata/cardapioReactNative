import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

function HorarioScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('../src/img/relogio.png')} 
                style={styles.imgRelogio} />
        <Text style={styles.label} > Horário de atendimento </Text>
        <Text style={styles.label} >  </Text>
        <Text style={styles.label}> Almoço </Text>
        <Text style={styles.label}> Segunda à Sábado </Text>
        <Text style={styles.label}> 10:30 às 14:00 hrs </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
        imgRelogio:{
            height: 100,
            width: 100,
            marginTop:30,
            marginBottom: 60
        },
        label:{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            alignItems: 'center'
        }

  });

  export default HorarioScreen;