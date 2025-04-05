import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const fonts = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-col px-5 py-10">
        <Text className="text-xl font-biryani">Biryani Regular</Text>
        <Text className="mb-10">classname="font-biryani"</Text>
        <Text className="text-xl font-biryani">Biryani Bold</Text>
        <Text className="mb-10">classname="font-biryani-bold"</Text>
        <Text className="text-xl font-biryani">Biryani ExtraBold</Text>
        <Text className="mb-10">classname="font-biryani-extrabold"</Text>
        <Text className="text-xl font-biryani-black">Biryani Black</Text>
        <Text className="mb-10">classname="font-biryani-bold"</Text>
        <Text className="text-xl font-biryani-semibold">Biryani Semibold</Text>
        <Text className="mb-10">classname="font-biryani-bold"</Text>
        <Text className="text-xl font-biryani-light">Biryani Light</Text>
        <Text className="mb-10">classname="font-biryani-bold"</Text>
        <Text className="text-xl font-biryani-extralight">
          Biryani ExtraLight
        </Text>
        <Text className="mb-10">classname="font-biryani-bold"</Text>
        <Text className="text-xl font-biryani">KronaOne Regular</Text>
        <Text>classname="font-kronaone"</Text>
      </View>
    </SafeAreaView>
  );
};

export default fonts;
