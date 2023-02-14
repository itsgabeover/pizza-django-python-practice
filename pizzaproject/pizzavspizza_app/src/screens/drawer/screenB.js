import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ScreenB() {

    return (
      <View style={styles.center}>
        <Text style={styles.title}>Screen A</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
});