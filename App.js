import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const appName = "My second App";
  function changeTextHandler(changeText) {
    setText(changeText);
  }
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header name={appName} version={2}></Header>
        <TextInput
          placeholder="Input here"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        ></TextInput>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderBottomWidth: 2,
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
