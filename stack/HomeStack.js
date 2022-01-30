import React, { Component, useState } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

export default class HomeStack extends Component {

    constructor(props){
        super(props);

        this.state = {
            list:[
                {   
                    key: 1,
                    title: 'Prato Executivo',
                    img: require('../src/img/tipos/pe.png'),
                    descricao: 'Pratos prontos',
                    bg: '#e35339',
                    produtos: [
                        {key: 1, name: 'Prato de frango', img: require('../src/img/cardapio/pe/executivos_frang_.png')},
                        {key: 2, name: 'Prato de peixe', img: require('../src/img/cardapio/pe/executivos_peix_.png')},
                        {key: 3, name: 'Prato de picanha', img: require('../src/img/cardapio/pe/executivos_picanh_.png')}
                    ]
                },
                {
                    key: 2,
                    title: 'Saladas',
                    img: require('../src/img/tipos/saladas.png'),
                    descricao: 'Pratos Saudáveis',
                    bg: '#a6bb24',
                    produtos: [
                        {key: 1, name: 'Salada Água Doce', img: require('../src/img/cardapio/saladas/salada_aguadoc_.png')},
                        {key: 2, name: 'Salada Salmão', img: require('../src/img/cardapio/saladas/salada_salma.png')},
                        {key: 3, name: 'Salada Frango', img: require('../src/img/cardapio/saladas/salada-fr.png')}
                    ]
                },
                {
                    key: 3,
                    title: 'Bebidas',
                    img: require('../src/img/tipos/bebidas.png'),
                    descricao: 'Bebidas',
                    bg: '#079ed4',
                    produtos: [
                        {key: 1, name: 'Caipirosca', img: require('../src/img/cardapio/bebidas/capirosc_3.png')},
                        {key: 2, name: 'Cookies', img: require('../src/img/cardapio/bebidas/cookies_crea.png')},
                        {key: 3, name: 'Morango', img: require('../src/img/cardapio/bebidas/morango_gd.png')},
                        {key: 4, name: 'Prata', img: require('../src/img/cardapio/bebidas/patra.png')},
                        {key: 5, name: 'Suco Fitnes', img: require('../src/img/cardapio/bebidas/suco_fitines_gd.png')}
                    ]
                },
                {
                    key: 4,
                    title: 'Sobremesa',
                    img: require('../src/img/tipos/sobremesa.png'),
                    descricao: 'Sobremesa',
                    bg: '#fcb81c',
                    produtos: [
                        {key: 1, name: 'Brownie', img: require('../src/img/cardapio/sobremesas/brownie_gd.png')},
                        {key: 2, name: 'Creme Papaya', img: require('../src/img/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {key: 3, name: 'Delicia Gelada', img: require('../src/img/cardapio/sobremesas/delicia_gelada_gd.png')}
                    ]
                }
            ]
        }
    }

    render (){
        return(
            <View style={styles.container}>
              <FlatList 
                  data={this.state.list}
                  renderItem={({item}) => <Lista data={item}
                  navigation={this.props.navigation} />}
              />
          </View>
        );
    }   
  }

  
  class Lista extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.prod = this.prod.bind(this);
    }    

    
    
    prod(){
        this.props.navigation.navigate('Details', {
            titulo: this.props.data.title,
            produtos: this.props.data.produtos,
          });//{title:this.props.data.title ,produtos:this.props.data.produtos});
    }

    render(){
            return(
                <TouchableHighlight 
                underlayColor="#CCCCCC" 
                onPress={this.prod} 
                style={[styles.listaItem, 
                {backgroundColor: this.props.data.bg}]}>
                   <View style={[styles.listaItem, {backgroundColor: this.props.data.bg}]}> 
                        <Image source={this.props.data.img} style={styles.listaImagem}/>
                        <View >
                            <Text style={styles.listaTitle}>{this.props.data.title}</Text>
                            <Text style={styles.listaDescricao}>{this.props.data.descricao}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        }
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10
    },
    listaItem:{
        height: 100,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center' 
    },
    listaImagem:{
        width: 64,
        height: 64,
        marginLeft:25,
        marginRight: 20
    },
    listaTitle:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    listaDescricao:{
        color: 'white',
        fontSize: 16
    },
    input:{
        width: 250,
        padding: 10,
        fontSize:15,
        backgroundColor:'#DDD'
    }
  });