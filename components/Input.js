import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Input() {
  function changeTextHandler(changeText) {
    setText(changeText);
  }
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Input here"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      ></TextInput>
      {/* <Button></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    width: 200,
  },
});
