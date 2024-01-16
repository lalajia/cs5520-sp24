import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My second App";

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header name={appName} version={2}></Header>
        <Input></Input>
        {/* <Text>{text}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
