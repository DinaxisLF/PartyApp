import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
  <View className="mt-1 flex-col items-center">
    {icon}
    <Text className="text-white text-xs mt-1">{title}</Text>
  </View>
);

const TabsLayout = () => {
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
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
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
        name="user-events"
        options={{
          title: "Eventos",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
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
        name="search_for_groups"
        options={{
          title: "Buscar",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon
              focused={focused}
              icon={
                <MaterialCommunityIcons
                  name="note-search"
                  size={20}
                  color={focused ? "#1C64F2" : "#9CA3AF"}
                />
              }
              title="Buscar"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user-profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
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

export default TabsLayout;
