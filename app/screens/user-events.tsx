import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Calendar } from 'react-native-calendars';
import EventCard from "@/assets/components/event-card";

export default function UserEvents(){
    const [activeTab, setActiveTab] = useState<"eventos" | "calendario">("eventos");

    return(
        <LinearGradient
        colors={["#4A60C9", "#4A60C9", "#4A60C9", "#9663BA", "#9663BA"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        >
            <SafeAreaView className="h-full">
                <Text className="font-biryani-semibold color-white text-[32px] text-center mt-10">
                    {activeTab === "eventos" ? "Eventos" : "Calendario"}
                </Text>

                <View className="flex-row self-center mt-2">
                    <TouchableOpacity
                    className={`h-[28px] w-[158px] rounded-[4px] ${activeTab === "eventos" ? "bg-[#7E3AF2]" : "bg-[#374151]"}`}
                    onPress={() => setActiveTab("eventos")}
                    >
                        <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">Eventos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    className={`h-[28px] w-[158px] rounded-[4px] ${activeTab === "calendario" ? "bg-[#7E3AF2]" : "bg-[#374151]"}`}
                    onPress={() => setActiveTab("calendario")}
                    >
                        <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">Calendario</Text>
                    </TouchableOpacity>
                </View>

                {activeTab === "eventos" ? (
                    <ScrollView className="self-center mt-5">
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                    </ScrollView>
                ) : (
                    <>
                    <ScrollView>
                    <View style={{ width: 350, alignSelf: 'center', marginTop: 20 }}>
                        <Calendar
                        theme={{
                            calendarBackground: '#1C1C1E',
                            monthTextColor: '#FFFFFF',
                            dayTextColor: '#FFFFFF',
                            textMonthFontWeight: 'bold',
                            textDayFontWeight: 'bold'
                            }} />
                    </View>

                    <View className="flex-row self-center mt-2 gap-4">
                        <View className="h-[22px] w-[112px] bg-[#27272A] rounded-[99px] flex-row gap-2 px-2">
                            <Image 
                            source={require('@/assets/images/Ellipse 1.png')}
                            className="h-[12px] w-[12px] mt-[4.5px]"/>
                            <Text className="font-biryani color-white text-[12px]">Completado</Text>
                        </View>

                        <View className="h-[22px] w-[112px] bg-[#27272A] rounded-[99px] flex-row gap-2 px-2">
                            <Image 
                            source={require('@/assets/images/Ellipse 2.png')}
                            className="h-[12px] w-[12px] mt-[4.5px]"/>
                            <Text className="font-biryani color-white text-[12px]">Evento</Text>
                        </View>
                    </View>

                    <View className="self-center mt-1">
                        <EventCard/>
                    </View>
                    </ScrollView>
                    </>
                )}



            </SafeAreaView>
        </LinearGradient>
    );
}
