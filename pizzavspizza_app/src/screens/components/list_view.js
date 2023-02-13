import { StyleSheet, Text, Button, SafeAreaView, Image} from "react-native";
import React from 'react'

export default function ListView({ navigation }) {

    const myText = "by: itsgabeover"
      return (
        <SafeAreaView style={styles.center}>
            <Image 
            style={styles.pizzaImage}
            source={{
                uri: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            }}/>
            <Text style={styles.baseText}>I love pizza</Text>
            <Text style={styles.newText}>{myText}</Text>
            <Text style={styles.title}>List View</Text>
            <Button
                title="list Item, Click for Details"
                onPress={() => navigation.navigate("Detail")}
            />
      </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    baseText: {
      color: "navy",
      fontSize: 30,
      fontStyle: "italic",
    },
    newText:{
      color: "red",
    },
    pizzaImage: {
      width: 200,
      height: 200,
    },
  });