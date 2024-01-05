import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = () => {
  const handlePress = () => {
    // Add functionality for the button press here
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/imageHomeScreen.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.homeScreenButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Start Now!</Text>
      </TouchableOpacity>
      <Text style={styles.forText}>Ready to explore?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  forText: {
    fontSize: 30,
    color: "white",
    position: "absolute",
    bottom: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  homeScreenButton: {
    position: "absolute",
    top: 20,
    padding: 10,
    backgroundColor: "#000080",
    borderRadius: 5,
    zIndex: 1,
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default WelcomeScreen;
