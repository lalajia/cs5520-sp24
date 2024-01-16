import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import Header from "./components/Header";

export default function App() {
  const appName = "My first App";
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header name={appName} version={2}></Header>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 150,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 150,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "white",
    fontSize: 20,
  },
});
