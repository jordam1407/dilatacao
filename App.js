import React from "react";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Modal, StyleSheet, TextInput, Text, Image, TouchableOpacity, Alert, Pressable } from "react-native";

const Calculaora = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [valor, setValor] = useState(valor);

  const [number, onChangeNumber] = useState('');
  const [number1, onChangeNumber1] = useState('');




  let [fontsLoaded] = useFonts({
    'PoppinsMedium': require('./src/fonts/Poppins/PoppinsMedium.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function onModal() {
    setModalVisible(true)

  }
  function onPress() {

    var aDilatar = Number(number1);
    var interferencia = Number(number);
    const folgaMontagem = aDilatar / 1000;
    const alfa = 0.000011454;
    const deltaT = ((interferencia + folgaMontagem) / aDilatar) / alfa;
    const ta = 20;
    const deltaP = 28;
    var temperatura = Math.round(deltaT + deltaP + ta);
    setValor(temperatura)
    if (aDilatar == "" || interferencia == "") {
      Alert.alert('Insira um número válido');
    } else {
      onModal()
      //Alert.alert('Aquecer a ' + temperatura + 'º'+'.')
    }
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
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="0,00"
          keyboardType="numeric"
          maxLength={7}
        />
        <Text style={styles.parag1} >
          Diferença entre os diâmetros da peça e do
          local de montagem em mm.
        </Text>
        <TextInput
          step="0.01"
          style={styles.input1}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="0,00"
          keyboardType="numeric"
          maxLength={4}

        />

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        //onPress={() => {onPress(); onModal()}}
        >
          <Text style={styles.calcular}> CALCULAR</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <View style={styles.modal1}>
              <Text style={styles.modalText}>
                {'Aquecer a ' + valor + '°.'}

              </Text>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.calcular1}>VOLTAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    fontFamily: 'PoppinsMedium',
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
    fontFamily: 'PoppinsMedium',
  },
  tit: {
    fontFamily: 'PoppinsMedium',
    marginBottom: 60,
    fontSize: 24,
    textAlign: 'center',

  },
  parag: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    padding: 10,
    fontFamily: 'PoppinsMedium',
  },
  parag1: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
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
  calcular: {
    fontSize: 20,
    fontFamily: 'PoppinsMedium',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  modal1: {
    backgroundColor: 'rgba(244, 244, 244, 1)',
    borderRadius: 10,
    padding: 35,
    width: 250,
    height:150,
    alignItems: 'center'
  }
  ,
  modalText: {
    fontSize: 20,
    fontFamily: 'PoppinsMedium',
    alignItems: 'center'
  },
  modalText1: {
    fontSize: 10,
    fontFamily: 'PoppinsMedium',
    justifyContent: 'center'

  },
  button1: {
    alignItems: "center",
    backgroundColor: "rgba(24, 144, 255, 1)",
    padding: 10,
    borderRadius: 5,
  },
  calcular1: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
  },


});

export default Calculaora;