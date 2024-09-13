import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import HomeHeader from "../../components/HomeHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ route, navigation }) {
  const handleOpenFuncionarioPage = async () => {
    try {
      // Recupera email do AsyncStorage
      const userEmail = await AsyncStorage.getItem('email');
      if (userEmail) {
        // Teste
        // console.log("Navegando para Funcionários com email:", { username: userEmail });

        navigation.navigate('Funcionarios', { username: userEmail });
      } else {
        console.error('Email do usuário não encontrado no AsyncStorage');
      }
    } catch (error) {
      console.error('Erro ao recuperar o email do usuário do AsyncStorage:', error);
    }
  };

  // function handleOpenAdicionarFuncionarioPage() {
  //   navigation.navigate("cadastroFuncionario");
  // }

  return (
    <>
      <View style={styles.container}>
        <HomeHeader route={route} navigation={navigation} />
        <View style={styles.containerColuna}>
          <TouchableOpacity
            style={styles.botaoHome}
            onPress={handleOpenFuncionarioPage}
          >
            <FontAwesome name="group" size={75} color="#082777" />
            <Text style={styles.textoTitulo1}>Visualizar Funcionários</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerColuna}>
          <TouchableOpacity
            style={
              styles.botaoHome
            } /* onPress={handleOpenAdicionarFuncionarioPage} */
          >
            <AntDesign name="adduser" size={75} color="#082777" />
            <Text style={styles.textoTitulo1}>Adicionar Funcionário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
