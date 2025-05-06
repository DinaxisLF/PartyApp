import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
