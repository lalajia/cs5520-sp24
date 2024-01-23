import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ name, version }) {
  return (
    <View>
      <Text style={styles.header}>
        Welcome to my {name}! This is {version}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderWidth: 2,
    borderColor: "purple",
  },
});
