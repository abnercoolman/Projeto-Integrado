import { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ScreenHeader from "../../components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CadastrarFuncionario({ route, navigation }) {

    const handleGoBack = () => {
        navigation.goBack();
    };
    const [nomeFuncionario, setNomeFuncionario] = useState("");
    const [cargoFuncionario, setCargoFuncionario] = useState("");
    const [deptFuncionario, setDeptFuncionario] = useState(null);
    const [modeloTrabalho, setModeloTrabalho] = useState(null);

    // Controla a abertura dos dropdowns
    const [openDept, setOpenDept] = useState(false);
    const [openModelo, setOpenModelo] = useState(false);

    const handleCadastrar = () => {
        console.log({
            nomeFuncionario,
            cargoFuncionario,
            deptFuncionario,
            modeloTrabalho,
        });
    };

    const urlAvatarFoto = "./../../assets/images/avatar_image.png";

    return (
        <>
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Feather name="arrow-left" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <ScreenHeader title="Cadastrar Novo Funcionário" />
                </View>
            </View>
            <View style={styles.containerColuna}>
                <TouchableOpacity style={styles.containerColunaFoto}>
                    <Image
                        style={styles.image}
                        source={require(urlAvatarFoto)}
                        alt="foto do perfil do funcionário"
                    />
                    <View style={styles.containerLinha}>
                        <MaterialCommunityIcons
                            name="image-edit-outline"
                            size={24}
                            color="#4B93E7"
                        />
                        <Text style={{ color: "#4B93E7" }}>Inserir foto</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nome do funcionário"
                        placeholderTextColor="#4B93E7"
                        onChangeText={setNomeFuncionario}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Cargo do funcionário"
                        placeholderTextColor="#4B93E7"
                        onChangeText={setCargoFuncionario}
                    />
                </View>

                {/* Lista suspensa para o departamento */}
                <DropDownPicker
                    open={openDept}
                    value={deptFuncionario}
                    items={[
                        { label: "Design", value: "Design" },
                        { label: "DevOps", value: "DevOps" },
                        { label: "FrontEnd", value: "FrontEnd" },
                        { label: "Back-End", value: "Back-End" },
                        { label: "Gerência", value: "Gerência" },
                    ]}
                    setOpen={setOpenDept}
                    setValue={setDeptFuncionario}
                    placeholder="Selecione o departamento"
                    placeholderStyle={{
                        color: "#4B93E7",
                    }}
                    style={styles.inputContainer}
                    dropDownContainerStyle={styles.dropDownContainer}
                    listItemLabelStyle={{
                        color: "#082777",
                    }}
                    selectedItemLabelStyle={{
                        color: '#082777',
                    }}
                />

                {/* Lista suspensa para o modelo de trabalho */}
                <DropDownPicker
                    open={openModelo}
                    value={modeloTrabalho}
                    items={[
                        { label: "Remoto", value: "Remoto" },
                        { label: "Híbrido", value: "Hibrido" },
                        { label: "Presencial", value: "Presencial" },
                    ]}
                    setOpen={setOpenModelo}
                    setValue={setModeloTrabalho}
                    placeholder="Selecione o modelo de trabalho"
                    placeholderStyle={{ color: "#4B93E7" }}
                    style={styles.inputContainer}
                    dropDownContainerStyle={styles.dropDownContainer}
                    listItemLabelStyle={{
                        color: "#082777",
                    }}
                    selectedItemLabelStyle={{
                        color: '#082777',
                    }}
                />
                <View style={styles.containerLinhaBotoes}>
                    <TouchableOpacity onPress={handleCadastrar}>
                        <View style={styles.buttonAdicionar}>
                            <Feather name="plus" size={24} color="#FFF" />
                            <Text style={styles.textButton}>Adicionar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleGoBack}>
                        <View style={styles.buttonCancelar}>
                            <Feather name="x" size={24} color="#FFF" />
                            <Text style={styles.textButton}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
