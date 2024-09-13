import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import UserPhoto from "../UserPhoto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeHeader({ route, navigation }) {
  const { username } = route.params ? route.params : { username: '' }; // Valor padrão se indefinido
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    async function teste() {
      const valor = await AsyncStorage.getItem("email");

      if (valor != null) {
        setEmail(valor);
      } else setEmail("Erro!");

      setLoading(false); // Indica que o carregamento terminou
    }
    teste();
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  // const handleOpenPerfil = () => {
  //   navigation.navigate("profile");
  // };

  const handleExitApp = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={styles.cabecalho}>
        <TouchableOpacity /* onPress={handleOpenPerfil} */>
          <View style={styles.nomeFoto}>
            <UserPhoto
              source={{ uri: "https://github.com/abnercoolman.png" }}
            />
            <View style={styles.textoCabecalho}>
              <Text style={styles.textoCumprimento}>Olá,</Text>
              <Text style={styles.textoUsuario}>{username}</Text>
              <Text style={styles.textoUsuario}>{email}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleExitApp}>
          <MaterialIcons name="exit-to-app" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}
