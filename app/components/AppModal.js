import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import colors from "../config/colors";

import Screen from "./Screen";

const AppModal = ({ showModal, setShowModal }) => {
  return (
    <Modal visible={showModal} animationType="slide" statusBarTranslucent>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          opacity: 100,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "#FFF",
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
          }}
        >
          <Text>This is a modal</Text>
          <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default AppModal;
