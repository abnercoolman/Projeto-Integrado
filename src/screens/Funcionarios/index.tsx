import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import HomeHeader from "../../components/HomeHeader";
import Group from "../../components/Group";
import FuncionarioCard from "../../components/FuncionarioCard";
import supabase from "../../database/database";

export default function Funcionarios({ route, navigation }) {
  console.log("Funcionarios received route params:", route.params);
  const { username } = route.params;

  const [deptFuncionario, setDeptFuncionario] = useState([
    "Todos",
    "Gerência",
    "DevOps",
    "Design",
    "FrontEnd",
    "BackEnd",
  ]);

  const [dadosFuncionarios, setDadosFuncionarios] = useState([]);
  const [deptFuncionarioSelected, setDeptFuncionarioSelected] = useState("Design UI/UX");

  function handleOpenFuncionarioDetails() {
    navigation.navigate("funcionario");
  }

  useEffect(() => {
    const fetchData = async () => {
      let { data: funcionarios, error } = await supabase
        .from("funcionarios")
        .select("*");

      if (error) {
        console.error("Erro ao buscar funcionários:", error);
      } else {
        setDadosFuncionarios(funcionarios);
        console.log(funcionarios);
      }
    };

    fetchData();
  }, []);

  const dadosFiltrados = deptFuncionarioSelected === "Todos"
    ? dadosFuncionarios
    : dadosFuncionarios.filter(
      (funcionario) => funcionario.deptFuncionario === deptFuncionarioSelected
    );

  return (
    <>
      <View style={styles.container}>
        <HomeHeader route={route} navigation={navigation} />
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
          <Text style={styles.textoTitulo1}>Funcionários</Text>
          <FlatList // FlatList vertical para os funcionários (filtrados)
            data={dadosFiltrados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <FuncionarioCard
                nomeFuncionario={item.nomeFuncionario}
                cargoFuncionario={item.cargoFuncionario}
                urlFoto={item.urlFoto}
                onPress={handleOpenFuncionarioDetails}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}