import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import ScreenHeader from "../../components/ScreenHeader";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DetalhesFuncionario({ route, navigation }) {
  const currentRoute = useRoute();
  const { funcionario } = currentRoute.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <ScreenHeader title="Detalhes do Funcionário" />
        </View>
        <View style={styles.containerColuna}>
          <View style={styles.fotoENome}>
            <Image
              style={styles.image}
              source={{ uri: funcionario.urlFoto }}
              alt="foto do perfil do funcionário"
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textoTitulo1}>Nome do Funcionário</Text>
              <Text style={styles.textoTitulo2}>{funcionario.nomeFuncionario}</Text>
            </View>
          </View>
          {/* Dados do funcionário */}

          <View style={styles.containerColunaLeft}>
            <Text style={styles.textoTitulo1}>Departamento</Text>
            <Text style={styles.textoTitulo2}>{funcionario.deptFuncionario}</Text>

            <Text style={styles.textoTitulo1}>Cargo</Text>
            <Text style={styles.textoTitulo2}>{funcionario.cargoFuncionario}</Text>

            <Text style={styles.textoTitulo1}>Modelo de Trabalho</Text>
            <Text style={styles.textoTitulo2}>{funcionario.modeloTrabalho}</Text>

            <Text style={styles.textoTitulo1}>Salário (R$)</Text>
            <Text style={styles.textoTitulo2}>3.000,00</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.buttonEditar}>
              <Feather name="edit" size={24} color="#FFF" />
              <Text style={styles.textButton}>Editar Informações</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttonDesligar}>
              <Feather name="x" size={24} color="#FFF" />
              <Text style={styles.textButton}>Desligar Funcionário</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttonRegistrarPonto}>
              <AntDesign name="pluscircleo" size={24} color="#FFF" />
              <Text style={styles.textButton}>Registrar Ponto</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
