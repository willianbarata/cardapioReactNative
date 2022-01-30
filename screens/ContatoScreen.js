import React from 'react';
import { View,Button, Text, Linking, Image, StyleSheet } from 'react-native';

function ContatoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.label} > Aceitamos encomendas</Text>
        
        
                   <Image style={styles.whatsImg} 
                   source={require('../src/img/whats.png')}
                   />   
                   
                <Button color="#34af23" title='Enviar Mensagem !' onPress={() =>
                    Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
                        if (supported) {
                        return Linking.openURL(
                            "whatsapp://send?phone=5531999999999&text=Oi"
                        );
                        } else {
                        return Linking.openURL(
                            "https://api.whatsapp.com/send?phone=5531999999999&text=Oi"
                        );
                        }
                    })
                    }/>
                
            </View>
      
    );
  }

  const styles = StyleSheet.create({
    whatsImg: {
        width: 80,
        height: 80,
        margin: 40
    },
    label:{
        fontSize: 20,
        color: 'black',
        alignItems: 'center'

    }
  })

  export default ContatoScreen;

  