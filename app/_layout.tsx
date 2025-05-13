import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import AnimatedBackground from "../assets/components/AnimatedBackground";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Biryani-Black": require("../assets/fonts/Biryani-Black.ttf"),
    "Biryani-Bold": require("../assets/fonts/Biryani-Bold.ttf"),
    "Biryani-ExtraBold": require("../assets/fonts/Biryani-ExtraBold.ttf"),
    "Biryani-ExtraLight": require("../assets/fonts/Biryani-ExtraLight.ttf"),
    "Biryani-Light": require("../assets/fonts/Biryani-Light.ttf"),
    "Biryani-Regular": require("../assets/fonts/Biryani-Regular.ttf"),
    "Biryani-SemiBold": require("../assets/fonts/Biryani-SemiBold.ttf"),
    "KronaOne-Regular": require("../assets/fonts/KronaOne-Regular.ttf"),
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log("Fonts loaded");
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
