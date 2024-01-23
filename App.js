import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
} from "react-native";

import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My second App";
  const [text, setText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  function receiveInput(data) {
    console.log("receive input", data);
    setText(data);
  }

  function showModal() {
    setModalVisible(true);
  }

  function dismissModal() {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header name={appName} version={2}></Header>
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        ></Input>
        <Button title="Add a goal" onPress={showModal}></Button>
      </View>
      <View style={styles.text}>
        <Text>You typed: {text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "space-evenly",
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    flex: 4,
    backgroundColor: "lightblue",
    alignItems: "center",
    paddingTop: 10,
  },

  // header: {
  //   height: 150,
  //   backgroundColor: "blue",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // headerText: {
  //   color: "white",
  //   fontSize: 20,
  // },
  content: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  // footer: {
  //   height: 150,
  //   backgroundColor: "blue",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // footerText: {
  //   color: "white",
  //   fontSize: 20,
  // },
});
