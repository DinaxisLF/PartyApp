import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface BottomNavBarProps {
  activeTab?: 'home' | 'ordenes' | 'catalogo' | 'perfil';
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab }) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-800 py-3 px-6 flex-row justify-around items-center">
      <TouchableOpacity className="items-center">
        <FontAwesome
          name="home"
          size={22}
          color={activeTab === 'home' ? '#4A60C9' : 'gray'}
        />
        <Text className={`text-xs ${activeTab === 'home' ? 'text-[#4A60C9]' : 'text-gray-600'}`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <FontAwesome
          name="credit-card"
          size={22}
          color={activeTab === 'ordenes' ? '#4A60C9' : 'gray'}
        />
        <Text className={`text-xs ${activeTab === 'ordenes' ? 'text-[#4A60C9]' : 'text-gray-600'}`}>Ordenes</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <FontAwesome
          name="sliders"
          size={22}
          color={activeTab === 'catalogo' ? '#4A60C9' : 'gray'}
        />
        <Text className={`text-xs ${activeTab === 'catalogo' ? 'text-[#4A60C9]' : 'text-gray-600'}`}>Catalogo</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <FontAwesome
          name="user-circle"
          size={22}
          color={activeTab === 'perfil' ? '#4A60C9' : 'gray'}
        />
        <Text className={`text-xs ${activeTab === 'perfil' ? 'text-[#4A60C9]' : 'text-gray-600'}`}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
