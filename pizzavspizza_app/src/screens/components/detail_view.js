import { StyleSheet, View, Text, Button } from "react-native";
import React from 'react'

export default function DetailView({ navigation }) {
      return (
        <View style={styles.center}>
          <Text style={styles.title}>Detail View bby</Text>
          <Button
            title="Click for Tabs"
            onPress={() => navigation.navigate("Tabs")}
          />
        </View>
      )
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
})