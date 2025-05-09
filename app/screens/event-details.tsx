import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function EventDetailsScreen() {
  const [activeTab, setActiveTab] = useState<"detalles" | "reseñas">(
    "detalles"
  );

  // Static event data
  const event = {
    groupName: "Grupo Farenheit",
    date: "15/06/2023",
    time: "20:00",
    duration: 4,
    location: "Salón Jardines, CDMX",
    pricePerHour: 3600,
    image: require("@/assets/images/farenheit.jpg"),
  };

  // Single review data
  const review = {
    user: "Eduardo Flores",
    comment: "Excelente ambiente, y un gran repertorio musical",
  };

  const totalPrice = event.pricePerHour * event.duration;

  return (
    <LinearGradient
      colors={["#4A60C9", "#4A60C9", "#4A60C9", "#9663BA", "#9663BA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <View className="flex flex-col px-5 my-5 items-center">
            <Text className="font-bold font-biryani-black text-4xl py-5 text-white">
              Detalles
            </Text>

            {/* Tabs */}
            <View className="flex-row self-center mb-5">
              <TouchableOpacity
                className={`h-[28px] w-[130px] rounded-[4px] ${
                  activeTab === "detalles" ? "bg-[#7E3AF2]" : "bg-[#374151]"
                }`}
                onPress={() => setActiveTab("detalles")}
              >
                <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">
                  Detalles
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`h-[28px] w-[130px] rounded-[4px] ${
                  activeTab === "reseñas" ? "bg-[#7E3AF2]" : "bg-[#374151]"
                }`}
                onPress={() => setActiveTab("reseñas")}
              >
                <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">
                  Reseñas
                </Text>
              </TouchableOpacity>
            </View>

            {activeTab === "detalles" ? (
              /* Details Tab Content */
              <View className="bg-slate-800 p-6 rounded-xl shadow-md w-full max-w-md">
                {/* Event Image */}
                <Image
                  source={event.image}
                  className="w-full h-48 rounded-lg mb-5"
                  resizeMode="cover"
                />

                {/* Event Details */}
                <View className="mb-2 items-center">
                  <Text className="text-white font-biryani-semibold text-xl mb-3">
                    {event.groupName}
                  </Text>

                  <View className="space-y-2 items-center">
                    <Text className="text-white font-biryani-semibold">
                      Fecha:{" "}
                      <Text className="font-biryani-extralight">
                        {event.date}
                      </Text>
                    </Text>
                    <Text className="text-white font-biryani-semibold">
                      Hora:{" "}
                      <Text className="font-biryani-extralight">
                        {event.time}
                      </Text>
                    </Text>
                    <Text className="text-white font-biryani-semibold">
                      Duración:{" "}
                      <Text className="font-biryani-extralight">
                        {event.duration} horas
                      </Text>
                    </Text>
                    <Text className="text-white font-biryani-semibold">
                      Ubicación:{" "}
                      <Text className="font-biryani-extralight">
                        {event.location}
                      </Text>
                    </Text>
                  </View>

                  <View className="border-t border-gray-600 my-4" />

                  <Text className="text-white font-biryani-semibold text-lg">
                    Total:{" "}
                    <Text className="text-green-500 font-biryani-bold">
                      ${totalPrice} MXN
                    </Text>
                  </Text>
                </View>

                {/* Action Buttons */}
                <View className="flex flex-row justify-between mt-6 gap-4">
                  <TouchableOpacity
                    className="bg-blue-500 px-4 py-3 rounded-md flex-1 items-center"
                    onPress={() =>
                      router.push("/screens/profile-musical-group")
                    }
                  >
                    <Text className="text-white font-biryani-bold">
                      Ver Grupo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              /* Reviews Tab Content */
              <View className="bg-slate-800 p-6 rounded-xl shadow-md w-full max-w-md">
                <Text className="text-white font-biryani-semibold text-xl mb-5 text-center">
                  Mi Reseña
                </Text>

                {/* Single Review Card */}
                <View className="bg-[#3C3C434D] p-5 rounded-lg">
                  {/* Centered Stars */}
                  <View className="flex-row justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FontAwesome
                        key={i}
                        name={
                          i <= 3
                            ? "star"
                            : i === 4
                            ? "star-half-full"
                            : "star-o"
                        }
                        size={18}
                        color="#FFD700"
                      />
                    ))}
                  </View>

                  <Text className="text-white text-lg font-biryani-bold mb-3 text-center">
                    "{review.comment}"
                  </Text>

                  <View className="flex-row items-center justify-center">
                    {/* User Image */}
                    <Image
                      source={require("@/assets/images/avatar.png")}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <Text className="text-white font-biryani-semibold">
                      {review.user}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
