import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";

import {
  Alert, Image, Modal,
  StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";

const Calculaora = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [valor, setValor] = useState(valor);

  const [number, onChangeNumber] = useState("");
  const [number1, onChangeNumber1] = useState(0);

  let [fontsLoaded] = useFonts({
    PoppinsMedium: require("./src/fonts/Poppins/PoppinsMedium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function mais() {
    onChangeNumber((pastNumber) => Number(pastNumber) + Number(0.01));
    console.log(number);
  }
  function menos() {
    onChangeNumber((pastNumber) => pastNumber > 0 ? Number(pastNumber) - Number(0.01) : 0);
    console.log(number);
  }
  function onModal() {
    setModalVisible(true);
  }
  function onPress() {
    var aDilatar = Number(number1);
    var interferencia = Number(number);
    const folgaMontagem = aDilatar / 1000;
    const alfa = 0.000011454;
    const deltaT = (interferencia + folgaMontagem) / aDilatar / alfa;
    const ta = 20;
    const deltaP = 28;
    var temperatura = Math.round(deltaT + deltaP + ta);
    setValor(temperatura);
    if (aDilatar == "" || interferencia == "") {
      Alert.alert("Insira um número válido");
    } else {
      onModal();
      //Alert.alert('Aquecer a ' + temperatura + 'º'+'.')
    }
  }

  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <Text style={styles.tit}>DILATAÇÃO TÉRMICA</Text>
        <Image
          style={{ width: "100%" }}
          source={require("../dilatacao/images/calc.png")}
          resizeMode="contain"
        />
        <Text style={styles.parag}>
          Medida encontrada no diâmetro interno da peça a ser aquecida em mm.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="0,00"
          keyboardType="numeric"
          maxLength={7}
        />
        <Text style={styles.parag1}>
          Diferença entre os diâmetros da peça e do local de montagem em mm.
        </Text>
        <View style={styles.maisContainer}>
          <TouchableOpacity style={styles.menos} onPress={menos}>
            <Text style={styles.calcular}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input1}
            placeholder="0,00"
            value={number.toString()}
            showSoftInputOnFocus={false}
            maxLength={4}
          />
          <TouchableOpacity style={styles.mais} onPress={mais}>
            <Text style={styles.calcular}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          //onPress={() => {onPress(); onModal()}}
        >
          <Text style={styles.calcular}> CALCULAR</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <View style={styles.modal1}>
              <Text style={styles.modalText}>
                {"Aquecer a " + valor + "°."}
              </Text>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.calcular1}>VOLTAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "rgba(244, 244, 244, 1)",
    height: "100%",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(244, 244, 244, 1)",
    marginHorizontal: 35,
  },

  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(136, 136, 136, 0.3)",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
  input1: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(136, 136, 136, 0.3)",
    padding: 10,
    textAlign: "center",
    marginBottom: 50,
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    width: '70%',
    height: 50,
  },
  maisContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 0,
    textAlign: "center",
  },
  mais: {
    width: '15%',
    backgroundColor: "rgba(24, 144, 255, 0.3)",
    height: 50,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    right: 0,
  },
  menos: {
    width: '15%',
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    height: 50,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    left: 0,
  },
  tit: {
    fontFamily: "PoppinsMedium",
    marginBottom: 60,
    fontSize: 24,
    textAlign: "center",
  },
  parag: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
    padding: 10,
    fontFamily: "PoppinsMedium",
  },
  parag1: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsMedium",
    padding: 10,
  },
  calc: {
    resizeMode: "contain",
    width: 120,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(24, 144, 255, 1)",
    padding: 10,
    borderRadius: 5,
    width: 320,
  },
  calcular: {
    fontSize: 20,
    color: "white",
    fontFamily: "PoppinsMedium",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modal1: {
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderRadius: 10,
    padding: 35,
    width: 250,
    height: 150,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontFamily: "PoppinsMedium",
    alignItems: "center",
  },
  modalText1: {
    fontSize: 10,
    fontFamily: "PoppinsMedium",
    justifyContent: "center",
  },
  button1: {
    alignItems: "center",
    backgroundColor: "rgba(24, 144, 255, 1)",
    padding: 10,
    borderRadius: 5,
  },
  calcular1: {
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
});

export default Calculaora;
