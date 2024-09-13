import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import HomeHeader from "../../components/HomeHeader";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home({ route, navigation }) {

  // console.log("Parâmetros recebidos em Home:", route.params);

  function handleOpenFuncionarioPage() {
    navigation.navigate("Funcionarios");
  }

  // function handleOpenAdicionarFuncionarioPage() {
  //   navigation.navigate("cadastroFuncionario");
  // }

  return (
    <>
      <View style={styles.container}>
        <HomeHeader route={route} navigation={navigation} />
        <View style={styles.containerColuna}>
          <TouchableOpacity style={styles.botaoHome} onPress={handleOpenFuncionarioPage} >
            <FontAwesome name="group" size={75} color="#082777" />
            <Text style={styles.textoTitulo1}>Visualizar Funcionários</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerColuna}>
          <TouchableOpacity style={styles.botaoHome} /* onPress={handleOpenAdicionarFuncionarioPage} */ >
            <AntDesign name="adduser" size={75} color="#082777" />
            <Text style={styles.textoTitulo1}>Adicionar Funcionário</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}
