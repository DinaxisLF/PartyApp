import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video, ResizeMode } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

export default function PortfolioScreen() {
  const [images, setImages] = useState<string[]>([]);
  const [videoLinks, setVideoLinks] = useState<string[]>([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      setVideoLinks([...videoLinks, result.assets[0].uri]);
    }
  };

  const previewImages = [
    ...images,
    "https://placekitten.com/400/300",
    "https://picsum.photos/seed/picsum/400/300",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // nueva
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", // nueva
  ];

  const previewVideos = [
    ...videoLinks,
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // nuevo
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", // nuevo
  ];

  const [activeTab, setActiveTab] = useState<"portafolio" | "preview">(
    "portafolio"
  );

  return (
    <LinearGradient
      colors={["#4A60C9", "#4A60C9", "#4A60C9", "#9663BA", "#9663BA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView className="h-full">
        <Text className="font-biryani-semibold color-white text-[32px] text-center mt-10">
          {activeTab === "portafolio" ? "Portafolio" : "Preview"}
        </Text>

        <View className="flex-row self-center mt-2">
          <TouchableOpacity
            className={`h-[28px] w-[130px] rounded-[4px] ${
              activeTab === "portafolio" ? "bg-[#7E3AF2]" : "bg-[#374151]"
            }`}
            onPress={() => setActiveTab("portafolio")}
          >
            <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">
              Portafolio
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`h-[28px] w-[130px] rounded-[4px] ${
              activeTab === "preview" ? "bg-[#7E3AF2]" : "bg-[#374151]"
            }`}
            onPress={() => setActiveTab("preview")}
          >
            <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">
              Preview
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "portafolio" ? (
          <ScrollView className="px-5 py-8 mb-10">
            <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5">
              <Text style={styles.sectionTitle}>Fotos</Text>
              <View className="flex-row flex-wrap gap-2 justify-center mb-5">
                {images.map((uri, index) => (
                  <View
                    key={index}
                    className="w-36 h-36 bg-white rounded-sm justify-center items-center"
                  >
                    <Image
                      source={{ uri }}
                      className="w-full h-full rounded-sm"
                    />
                  </View>
                ))}

                {/* Siempre mostrar el botón para subir más */}
                <TouchableOpacity
                  className="w-36 h-36 bg-white rounded-sm justify-center items-center"
                  onPress={pickImage}
                >
                  <FontAwesome name="cloud-upload" size={24} color="black" />
                  <Text className="text-black text-center font-biryani-semibold text-xs mt-1">
                    Sube una imagen
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5 p-2">
              <Text style={styles.sectionTitle}>Videos</Text>
              <View style={styles.row}>
                {videoLinks.map((link, index) => (
                  <View key={index} style={styles.videoContainer}>
                    <Video
                      key={index}
                      source={{ uri: link }}
                      style={styles.video}
                      useNativeControls
                      resizeMode={ResizeMode.CONTAIN}
                    />
                  </View>
                ))}
                <TouchableOpacity
                  style={styles.videoContainer}
                  onPress={pickVideo}
                >
                  <FontAwesome name="cloud-upload" size={24} color="black" />
                  <Text className="text-black text-center font-biryani-semibold text-xs mt-1">
                    Sube un video
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5 p-2">
              <Text style={styles.sectionTitle}>Redes sociales</Text>
              <View className="flex-col gap-2 mb-5 w-full px-5">
                <Text className="text-white font-biryani-semibold text-lg mt-1">
                  Facebook
                </Text>
                <TouchableOpacity className="bg-white rounded-md p-2">
                  <TextInput
                    style={styles.textInput}
                    placeholder="URL: Facebook"
                    placeholderTextColor="#000"
                  />
                </TouchableOpacity>
                <Text className="text-white font-biryani-semibold text-lg mt-1">
                  Instagram
                </Text>
                <TouchableOpacity className="bg-white rounded-md p-2">
                  <TextInput
                    style={styles.textInput}
                    placeholder="URL: Instagram"
                    placeholderTextColor="#000"
                  />
                </TouchableOpacity>
                <Text className="text-white font-biryani-semibold text-lg mt-1">
                  TikTok
                </Text>
                <TouchableOpacity className="bg-white rounded-md p-2">
                  <TextInput
                    style={styles.textInput}
                    placeholder="URL: TikTok"
                    placeholderTextColor="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          // Preview Tab
          <ScrollView className="px-5 mb-10 py-8">
            <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5">
              <Text style={styles.sectionTitle}>Fotos</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pb-4"
              >
                <View className="flex-row">
                  {previewImages.map((uri, index) => (
                    <Image
                      key={index}
                      source={{ uri }}
                      className="w-60 h-40 rounded-lg mr-4"
                      resizeMode="cover"
                    />
                  ))}
                </View>
              </ScrollView>
            </View>

            <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5 p-2">
              <Text style={styles.sectionTitle}>Videos</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-4 pb-4"
              >
                <View className="flex-row">
                  {previewVideos.map((uri, index) => (
                    <Video
                      key={index}
                      source={{ uri }}
                      style={{
                        width: 240,
                        height: 135,
                        borderRadius: 10,
                        marginRight: 16,
                      }}
                      useNativeControls
                      resizeMode={ResizeMode.CONTAIN}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>

            <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5 p-2">
              <Text style={styles.sectionTitle}>Redes sociales</Text>
              <View className="flex-row gap-2 mb-5">
                <TouchableOpacity className="bg-white rounded-md p-2">
                  <FontAwesome name="facebook" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white rounded-md p-2">
                  <FontAwesome name="instagram" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white rounded-md p-2">
                  <FontAwesome name="twitter" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Removed duplicate container property
  image: {
    width: 200,
    height: 200,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
    textAlign: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#111827",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  uploadBox: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  videoContainer: {
    width: 150,
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textInput: {
    width: "100%",
    padding: 8,
    color: "black",
    backgroundColor: "#fff",
  },
  video: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Biryani-Bold",
    height: 20,
  },
});
