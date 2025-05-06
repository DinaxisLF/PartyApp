import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import AnimatedBackground from "../assets/components/AnimatedBackground";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedBackground />
      <View style={styles.container}>
        <View style={styles.topContent}>
          <Text style={styles.title}>PartyApp</Text>
          <Image
            source={require("@/assets/images/logo-principal.png")}
            style={[styles.logo, { marginTop: 50 }]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/screens/login")}
          >
            <Text className="text-m font-biryani text-white">
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/screens/user-type")}
          >
            <Text className="text-m font-biryani text-white">Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.08,
  },
  topContent: {
    alignItems: "center",
  },
  title: {
    fontSize: width * 0.09,
    fontWeight: "bold",
    color: "white",
    marginBottom: height * 0.04,
    fontFamily: "KronaOne-Regular",
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
  },
  bottomButtons: {
    alignSelf: "center",
    gap: height * 0.02,
  },
  button: {
    backgroundColor: "rgba(48, 48, 52, 0.6)", // Using rgba for opacity (0.6 = 60% opacity)
    paddingVertical: height * 0.018,
    borderRadius: 12,
    minWidth: "60%",
    maxWidth: 280,
    alignItems: "center",
  },
});
