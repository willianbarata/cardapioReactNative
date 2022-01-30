import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

function DetailsStack({route, navigation}){

    const { titulo, produtos } = route.params;

    navigation.setOptions({title: titulo});

    var prod = JSON.stringify(produtos)
        return(
            <View style={styles.container}>

    <FlatList 
     data={produtos}
     renderItem={(obj)=>{
           return(
                            
                    <View style={styles.produtos}>
                    <Image resizeMode="contain" 
                    source={obj.item.img} 
                    style={styles.produtosImagem} />
                    <Text  style={styles.produtosNome}>{obj.item.name}</Text>
                    </View>
                        )
                    }}
    /> 
            </View>
        );
    }
    const styles = StyleSheet.create({
        icone:{
            width:26,
            height: 26
        },
        container:{
            flex: 1,
            backgroundColor: '#CCCCCC'
        },
        produtos:{
            height: 100,
            backgroundColor: '#FFFFFF',
            margin: 10,
            borderRadius: 5,
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        },
        produtosImagem: {
            width: 100,
            height: 64
        },
        produtosNome: {
            fontSize: 25    
        }
    });
    
export default DetailsStack;