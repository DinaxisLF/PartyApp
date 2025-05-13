import { useState } from "react";
import GradientBackground from "@/assets/components/gradientBackground";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";
import EventCard from "@/assets/components/event-card";
import { router } from "expo-router";

const eventsData = [
  {
    id: "1",
    groupName: "20/04/2025",
    time: "8:00 PM - 11:00 PM",
    image: require("@/assets/images/event-icon.png"),
    status: "En espera", // can be 'active' or 'cancelled'
  },
  {
    id: "2",
    groupName: "18/04/2025",
    time: "8:00 PM - 11:00 PM",
    image: require("@/assets/images/event-icon.png"),
    status: "Pendiente",
  },
  {
    id: "3",
    groupName: "18/04/2025",
    time: "8:00 PM - 11:00 PM",
    image: require("@/assets/images/event-icon.png"),
    status: "En Curso",
  },
  {
    id: "4",
    groupName: "15/03/2025",
    time: "8:00 PM - 11:00 PM",
    image: require("@/assets/images/event-icon.png"),
    status: "Completado",
  },
];

export default function GroupEvents() {
  const [activeTab, setActiveTab] = useState<"eventos" | "calendario">(
    "eventos"
  );

  const handleDayPress = () => {
    router.push("/screens/event-details");
  };

  return (
    <GradientBackground>
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <Text className="font-biryani-semibold color-white text-[32px] text-center mt-10">
            {activeTab === "eventos" ? "Eventos" : "Calendario"}
          </Text>

          {/* Tabs remain the same */}
          <View className="flex-row self-center mt-2">
            <TouchableOpacity
              className={`h-[28px] w-[130px] rounded-[4px] ${
                activeTab === "eventos" ? "bg-[#7E3AF2]" : "bg-[#374151]"
              }`}
              onPress={() => setActiveTab("eventos")}
            >
              <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">
                Eventos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`h-[28px] w-[130px] rounded-[4px] ${
                activeTab === "calendario" ? "bg-[#7E3AF2]" : "bg-[#374151]"
              }`}
              onPress={() => setActiveTab("calendario")}
            >
              <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">
                Calendario
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-1 mt-2">
            {activeTab === "eventos" ? (
              <FlatList
                data={eventsData}
                renderItem={({ item }) => (
                  <View className="mb-7">
                    <EventCard event={item} />
                  </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerClassName="px-5 pb-20"
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <View className="flex-1">
                <View className="flex-col items-center">
                  <View className="w-[300px] h-[310px] mt-2">
                    <Calendar
                      onDayPress={handleDayPress} // Add this line
                      theme={{
                        calendarBackground: "#1C1C1E",
                        monthTextColor: "#FFFFFF",
                        dayTextColor: "#FFFFFF",
                        textMonthFontWeight: "bold",
                        textDayFontWeight: "bold",
                      }}
                    />
                  </View>

                  {/* Legend remains the same */}
                  <View className="flex-row self-center mt-5 gap-2">
                    <View className="h-[20px] w-[100px] bg-[#27272A] rounded-[99px] flex-row gap-1 px-1 items-center">
                      <Image
                        source={require("@/assets/images/Ellipse 3.png")}
                        className="h-[10px] w-[10px]"
                      />
                      <Text className="font-biryani color-white text-[11px] ml-2">
                        No Disponible
                      </Text>
                    </View>

                    <View className="h-[20px] w-[80px] bg-[#27272A] rounded-[99px] flex-row gap-1 px-1 items-center">
                      <Image
                        source={require("@/assets/images/Ellipse 2.png")}
                        className="h-[10px] w-[10px]"
                      />
                      <Text className="font-biryani color-white text-[11px] ml-2">
                        Evento
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}
