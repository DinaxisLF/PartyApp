import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-col px-5 my-20 items-center justify-center">
        <Text className="font-bold text-xl mt-10">Sign in Screen</Text>
      </View>
    </SafeAreaView>
  );
}
