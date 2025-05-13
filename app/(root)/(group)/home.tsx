import { Link } from "expo-router";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#4A60C9", "#4A60C9", "#4A60C9", "#9663BA", "#9663BA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView className="h-full">
        <View className="flex flex-col px-5 my-20 items-center justify-center">
          <Text className="font-bold font-biryani-black text-4xl py-5 mt-10 text-white">
            PartyApp
          </Text>
          <View style={styles.topContent}>
            <Image
              source={require("@/assets/images/logo-principal.png")}
              style={[styles.logo, { marginTop: 50 }]}
              resizeMode="contain"
            />
          </View>
          <Text className="font-bold font-biryani-black text-2xl py-5 mt-10 text-white">
            Bienvenido
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  topContent: {
    alignItems: "center",
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
  },
});
