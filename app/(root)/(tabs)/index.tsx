import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-col px-5 my-20 items-center justify-center">
        <Text className="font-bold text-4xl mt-10">PartyApp</Text>
        <Text className="font-bold text-xl mt-10">Home Screen</Text>
        <Link className="mt-10" href={"/sign-in"}>
          <Text className="font-bold text-xl">Sign In</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
