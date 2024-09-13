import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import UserPhoto from "../UserPhoto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import supabase from "../../database/database";

export default function HomeHeader({ route, navigation }) {
  console.log("HomeHeader received route prop:", route);

  const { username } = route.params ? route.params : { username: "" };
  const [loading, setLoading] = useState(true);
  const [infoUsuarioMaster, setInfoUsuarioMaster] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve email from AsyncStorage
        const storedEmail = await AsyncStorage.getItem("email");
        if (storedEmail) {
          // Fetch infoUsuarioMaster data
          const { data, error } = await supabase
            .from("infoUsuarioMaster")
            .select("*");

          if (error) {
            console.error("Error fetching master user:", error);
          } else {
            setInfoUsuarioMaster(data);
          }
        } else {
          console.error("Email not found in AsyncStorage");
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const dadosUsuarioMasterFiltrado = infoUsuarioMaster.find(
    (info) => info.emailUsuarioMaster === username
  );

  const handleExitApp = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={styles.cabecalho}>
        <TouchableOpacity>
          <View style={styles.nomeFoto}>
            <UserPhoto
              source={{ uri: "https://github.com/abnercoolman.png" }}
            />
            <View style={styles.textoCabecalho}>
              <Text style={styles.textoCumprimento}>Olá,</Text>
              {loading ? (
                <ActivityIndicator />
              ) : dadosUsuarioMasterFiltrado ? (
                <Text style={styles.textoUsuario}>
                  {dadosUsuarioMasterFiltrado.nomeUsuarioMaster}
                </Text>
              ) : (
                <Text style={styles.textoUsuario}>Usuário não encontrado</Text>
              )}
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