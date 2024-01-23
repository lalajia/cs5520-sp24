import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function Input({ inputHandler, modalVisible, dismissModal }) {
  const [text, setText] = useState("");
  function changeTextHandler(changeText) {
    setText(changeText);
  }

  function confirmHandler() {
    inputHandler(text);
  }

  function cancelHandler() {
    dismissModal();
  }

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1694/1694364.png",
          }}
          style={styles.image}
        />
        <TextInput
          placeholder="Input here"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        ></TextInput>
        <View style={styles.button}>
          <Button title="Confirm" onPress={confirmHandler}></Button>
          <Button title="Cancel" onPress={cancelHandler}></Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },

  input: {
    borderBottomWidth: 2,
    width: 200,
  },
  image: {
    alignItems: "center",
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    marginTop: 20,
  },
});
