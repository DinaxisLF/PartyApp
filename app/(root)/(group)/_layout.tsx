import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: React.ReactNode;
  title: string;
}) => (
  <View className="mt-1 flex-col items-center justify-center w-full">
    {icon}
    <Text
      className="text-white text-[7px] mt-[2px] text-center"
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {title}
    </Text>
  </View>
);

const GroupTabs = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#374151",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      {/* Artist-specific tabs */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Entypo
                  name="home"
                  size={20}
                  color={focused ? "#1C64F2" : "#9CA3AF"}
                />
              }
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="group-events"
        options={{
          title: "Eventos",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <FontAwesome5
                  name="calendar-alt"
                  size={20}
                  color={focused ? "#1C64F2" : "#9CA3AF"}
                />
              }
              title="Evento"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portafolio",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <FontAwesome5
                  name="briefcase"
                  size={20}
                  color={focused ? "#1C64F2" : "#9CA3AF"}
                />
              }
              title="Portafolio"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="group-profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Ionicons
                  name="person-circle"
                  size={20}
                  color={focused ? "#1C64F2" : "#9CA3AF"}
                />
              }
              title="Perfil"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default GroupTabs;
