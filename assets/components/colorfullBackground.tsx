import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const ColorGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={[
        "#405DE6", // 2%
        "#465AE3", // 14%
        "#4C57E1", // 26%
        "#6849CA", // 36%
        "#943FA7", // 48%
        "#C92E62", // 59%
        "#E32F40", // 69%
        "#ED4E3B", // 79%
        "rgba(244, 127, 64, 0.25)", // 88% (25% opacity)
        "#FFDC80", // 99%
      ]}
      locations={[0.02, 0.14, 0.26, 0.36, 0.48, 0.59, 0.69, 0.79, 0.88, 0.99]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default ColorGradient;
