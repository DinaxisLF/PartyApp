import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Linking} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import Checkbox from 'expo-checkbox';
import { useState, useRef } from 'react';
import * as DocumentPicker from "expo-document-picker";
import AnimatedBackground from "@/assets/components/AnimatedBackground";

export default function GroupReigster() {
const [isChecked, setChecked] = useState(false);
const [documentName, setDocumentName] = useState("");
const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.assets && result.assets.length > 0) {
        setDocumentName(result.assets[0].name);
      }
    } catch (error) {
      console.log("Error al subir documento:", error);
    }
  };
    
  return (
    <SafeAreaView>
    <AnimatedBackground />

    

      <TouchableOpacity className="absolute top-12 left-6">
        <Entypo name="chevron-left" size={28} color="white" />
      </TouchableOpacity>
      
      <Text className="text-white text-[24px] font-kronaone mb-2 pt-8 text-center">Crear Cuenta</Text>
      <View className='flex-row items-center justify-center pb-1'>
        <Image source={require('@/assets/images/icon _music mic_.png')} className="w-14 h-14 -mb-4"/>
        <Image source={require('@/assets/images/icon _star fill_.png')} className="w-5 h-5 -mb-9 -ml-5"/>
      </View>

      <ScrollView>
        <View className="bg-[#3C3C432E] p-6 rounded-[20px] m-7 mb-28">
          
          <Text className="text-sm font-inter-bold font-medium text-white py-2 ml-2">Nombre del Grupo o Solista</Text>
          <View className="flex-row bg-[#3C3C434D] h-[42px] w-[272px] mb-3 self-center pb-1 px-4 rounded-lg border border-gray-300">
            <Image
            source={require('@/assets/images/user.png')}
            className="w-4 h-4 mt-[12px] mr-2"
            />

            <TextInput
            placeholder="Nombre"
            placeholderTextColor="white"
            className="text-white font-inter text-sm"
            />
          </View>
          
          <Text className="text-sm font-inter-bold font-medium text-white py-2 ml-2">Generos Musicales</Text>
          <View className="flex-row px-4 bg-[#3C3C434D] h-[42px] w-[272px] mb-3 self-center rounded-lg border border-gray-300">
            <Image
              source={require('@/assets/images/file-music.png')}
              className="w-4 h-4 mt-[12px] mr-2"
              />
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              placeholder={{ label: 'Genero(s)', value: '' }}
              items={[
                { label: 'Rock', value: 'rock' },
                { label: 'Pop', value: 'pop' },
                { label: 'Electronica', value: 'electronica' },
                { label: 'Clásico/Instrumental', value: 'clasico/instrumental'},
                { label: 'Música Latina', value: 'musica latina'},
                { label: 'Country/Folk', value: 'country/folk'},
                { label: 'Música del Mundo', value: 'musica del mundo'},
                { label: 'Bailable/Fiesta', value: 'bailable/fiesta'},
                { label: 'Ambiente/Experimental', value: 'ambiente/experimental'},

              ]}
              style={{
                inputIOS: {
                  color: 'white',
                  fontFamily: 'inter',
                  fontSize: 14,
                  lineHeight: 20,
                  paddingTop: 7,
                  paddingRight: 15,
                },
                placeholder: {
                  color: 'white',
                  fontFamily: 'inter',
                  fontSize: 14,
                  lineHeight: 20,
                  paddingTop: 7,
                  paddingRight: 15,
                },
              }}
              Icon={() => <Image
                source={require('@/assets/images/chevron-down.png')}
                className="w-4 h-4 mt-[14px]"
                />}
            />
          </View>

          <Text className="text-sm font-inter-bold font-medium text-white py-2 ml-2">Correo</Text>
          <View className="flex-row px-4 bg-[#3C3C434D] h-[42px] w-[272px] mb-3 self-center pb-1 rounded-lg border border-gray-300">
            <Image
              source={require('@/assets/images/envelope.png')}
              className="w-4 h-4 mt-[14px] mr-2"
              />
            <TextInput
              placeholder="email@example.com"
              placeholderTextColor="white"
              className="text-white font-inter text-sm "
              />
          </View>
          
          <Text className="text-sm font-inter-bold font-medium text-white py-2 ml-2">Contraseña</Text>
          <TextInput
            placeholder="••••••••••"
            placeholderTextColor="white"
            secureTextEntry={!passwordVisible}
            className="text-white font-inter text-sm px-4 bg-[#3C3C434D] h-[42px] w-[272px] self-center pb-1 rounded-lg border border-gray-300"
          />

        <TouchableOpacity onPress={handlePickDocument} className="flex-row justify-center mt-5 rounded-[8px] h-[25px] w-[272px] self-center bg-white">
          <Image
            source={require('@/assets/images/upload.png')}
            className="w-4 h-4 mt-[5px] mr-2"
            />
          <Text className="text-sm text-center pt-[3px] font-inter">Subir identificacion oficial</Text>
        </TouchableOpacity>

        <View className="flex-row space-x-2 mt-6 self-center">
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          style={{
            borderColor: '#ffff',
            borderWidth: 2,
          }}
        />
        <Text className="text-sm font-inter text-white ml-1">
          Acepto los
          <Text
            className="text-sm font-inter underline text-white"
            onPress={() => Linking.openURL('https://google.com/')}
          >
            {" "}Términos & Condiciones
          </Text>
        </Text>
        </View>

        <TouchableOpacity className="mt-7 rounded-lg h-[41px] w-[272px] self-center bg-blue-700">
          <Text className="text-white text-sm text-center pt-3 font-inter font-medium">Acceder</Text>
        </TouchableOpacity>
        
      </View>  
      </ScrollView>

    </SafeAreaView>
  );
}
