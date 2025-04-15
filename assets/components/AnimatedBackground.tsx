import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedBackground = () => {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LottieView
        source={require("../animations/welcome_animation.json")}
        autoPlay
        loop
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};

export default AnimatedBackground;
