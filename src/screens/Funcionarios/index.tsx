import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import ScreenHeader from "../../components/ScreenHeader";
import Group from "../../components/Group";
import FuncionarioCard from "../../components/FuncionarioCard";
import * as funcionariosScreenService from "./funcionariosScreenService";

export default function Funcionarios({ route, navigation }) {

  const [deptFuncionario, setDeptFuncionario] = useState([
    "Todos",
    "Gerência",
    "DevOps",
    "Design",
    "FrontEnd",
    "BackEnd",
  ]);

  const [dadosFuncionarios, setDadosFuncionarios] = useState([]);
  const [deptFuncionarioSelected, setDeptFuncionarioSelected] = useState("Todos");

  useEffect(() => {
    const fetchData = async () => {
      const funcionarios = await funcionariosScreenService.fetchFuncionarios();
      setDadosFuncionarios(funcionarios);
    };

    fetchData();

    const subscription = funcionariosScreenService.subscribeToFuncionarioChanges(fetchData);

    return () => {
      funcionariosScreenService.unsubscribeFromFuncionarioChanges(subscription);
    };
  }, []);

  const dadosFiltrados = funcionariosScreenService.filterFuncionarios(dadosFuncionarios, deptFuncionarioSelected);

  function handleOpenFuncionarioDetails(funcionario) {
    navigation.navigate("DetalhesFuncionario", { funcionario });
  }

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
          <ScreenHeader title="Funcionários" />
        </View>
        <FlatList // FlatList horizontal para os departamentos
          data={deptFuncionario}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={deptFuncionarioSelected === item}
              onPress={() => setDeptFuncionarioSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          style={{
            marginTop: 20,
            marginBottom: 10,
            maxHeight: 44,
            minHeight: 44,
          }}
        />

        <View style={styles.containerColuna}>
          <FlatList // FlatList vertical para os funcionários (filtrados)
            data={dadosFiltrados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <FuncionarioCard
                nomeFuncionario={item.nomeFuncionario}
                cargoFuncionario={item.cargoFuncionario}
                urlFoto={item.urlFoto}
                onPress={() => handleOpenFuncionarioDetails(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}