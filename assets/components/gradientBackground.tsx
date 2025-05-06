import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ViewStyle } from "react-native";

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  style,
}) => {
  return (
    <LinearGradient
      colors={["#4A60C9", "#4A60C9", "#9663BA"]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
