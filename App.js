import React from "react";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react'
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity, Alert } from "react-native";

const Calculaora = () => {

  const [number, onChangeNumber] = React.useState(null);
  const onPress = () => Alert.alert('APERTOU NÉ DANADO');
  let [fontsLoaded] = useFonts({
    'PoppinsMedium': require('./src/fonts/Poppins/PoppinsMedium.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <Text style={styles.tit} >
          DILATAÇÃO TÉRMICA
        </Text>
        <Image
          style={{ width: '100%' }}
          source={require('../dilatacao/images/calc.png')}
          resizeMode='contain'


        />
        <Text style={styles.parag} >
          Medida encontrada no diâmetro interno da
          peça a ser aquecida em mm.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="0,00"
          keyboardType="numeric"
        />
        <Text style={styles.parag1} >
          Diferença entre os diâmetros da peça e do
          local de montagem em mm.
        </Text>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="0,00"
          keyboardType="numeric"

        />

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.calcular}> CALCULAR</Text>
      </TouchableOpacity>

      </View >
    </View >
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'rgba(244, 244, 244, 1)',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'rgba(244, 244, 244, 1)',
    marginHorizontal: 35,
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(136, 136, 136, 0.3)',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
    fontFamily:'PoppinsMedium',
  },
  input1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(136, 136, 136, 0.3)',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 16,
    fontFamily:'PoppinsMedium',
  },
  tit: {
    fontFamily:'PoppinsMedium',
    marginBottom: 60,
    fontSize: 24,
    textAlign: 'center',

  },
  parag: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    padding: 10,
    fontFamily:'PoppinsMedium',
  },
  parag1: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'PoppinsMedium',
    padding: 10,
  },
  calc: {
    resizeMode: 'contain',
    width: 120,
  
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(24, 144, 255, 1)",
    padding: 10,
    borderRadius: 5,
  },
  calcular:{
    fontSize:20,
        fontFamily:'PoppinsMedium',
  }


});

export default Calculaora;