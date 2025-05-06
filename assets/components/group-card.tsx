import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

interface GroupCardProps {
  group: {
    id: string;
    name: string;
    image: any;
    tags: string[];
    price: number;
    rating: number;
  };
  onAddPress?: () => void;
}

const GroupCard: React.FC<GroupCardProps> = ({ group, onAddPress }) => {
  return (
    <View
      style={{
        backgroundColor: "#2e2e4e",
        borderRadius: 16,
        padding: 12,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={group.image}
        style={{ width: 80, height: 80, borderRadius: 10 }}
      />

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          {group.name}
        </Text>

        <View style={{ flexDirection: "row", marginVertical: 4, flexWrap: 'wrap' }}>
          {group.tags.map((tag, i) => (
            <Text
              key={i}
              style={{
                backgroundColor: "#4A60C9",
                color: "white",
                fontSize: 10,
                paddingVertical: 2,
                paddingHorizontal: 6,
                borderRadius: 10,
                marginRight: 4,
                marginBottom: 4,
              }}
            >
              {tag}
            </Text>
          ))}
        </View>

        <View style={{ flexDirection: "row" }}>
          {Array.from({ length: group.rating }, (_, i) => (
            <FontAwesome
              key={i}
              name="star"
              size={14}
              color="#FFD700"
              style={{ marginRight: 2 }}
            />
          ))}
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          ${group.price.toLocaleString()}
        </Text>
        <TouchableOpacity 
          style={{ marginTop: 8 }}
          onPress={onAddPress}
        >
          <Ionicons name="add-circle" size={32} color="#4A90E2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupCard;