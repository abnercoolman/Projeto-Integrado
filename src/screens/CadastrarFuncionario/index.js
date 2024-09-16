import { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ScreenHeader from "../../components/ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import funcionarioService from "./funcionarioService";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';
const avatarImage = require("./../../assets/images/avatar_image.png");

export default function CadastrarFuncionario({ route, navigation }) {

    const handleGoBack = () => {
        navigation.goBack();
    };

    const [fotoFuncionario, setFotoFuncionario] = useState(avatarImage);
    const [nomeFuncionario, setNomeFuncionario] = useState("");
    const [cargoFuncionario, setCargoFuncionario] = useState("");
    const [deptFuncionario, setDeptFuncionario] = useState(null);
    const [modeloTrabalho, setModeloTrabalho] = useState(null);

    // Controla a abertura dos dropdowns
    const [openDept, setOpenDept] = useState(false);
    const [openModelo, setOpenModelo] = useState(false);

    const handleSelecaoFotoFuncionario = async () => {
        const fotoSelecionada = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 4],
            allowsEditing: true,

        });

        if (!fotoSelecionada.canceled) {
            // Converter a URI da imagem em um Blob
            const fileInfo = await FileSystem.getInfoAsync(fotoSelecionada.assets[0].uri);
            const blob = await FileSystem.readAsStringAsync(fotoSelecionada.assets[0].uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            const file = {
                uri: fotoSelecionada.assets[0].uri,
                type: fileInfo.mimeType,
                name: fotoSelecionada.assets[0].uri.split('/').pop(), // Extrai o nome do arquivo da URI
            };
            setFotoFuncionario(file);
        }
    };

    const handleCadastrar = async () => {
        // Verificar se os campos estão preenchidos
        if (!nomeFuncionario || !cargoFuncionario || !deptFuncionario || !modeloTrabalho) {
            console.error("Por favor, preencha todos os campos.");
            return; // Impede o cadastro se algum campo estiver vazio
        }

        try {
            // Fazer upload da imagem e obter a URL
            const urlFoto = await funcionarioService.uparFotoFuncionario(fotoFuncionario);

            // Cadastrar o funcionário no banco de dados
            await funcionarioService.cadastrarFuncionario({
                nomeFuncionario: nomeFuncionario,
                cargoFuncionario: cargoFuncionario,
                deptFuncionario: deptFuncionario,
                modeloTrabalho: modeloTrabalho,
                urlFoto: urlFoto,
            });

            console.log("Funcionário cadastrado com sucesso!");
            // Lógica para limpar os campos ou navegar para outra tela após o cadastro
        } catch (error) {
            console.error("Erro ao cadastrar funcionário:", error);
            // Lógica para exibir mensagem de erro ao usuário
        }
    };


    return (
        <>
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <TouchableOpacity /* onPress={handleGoBack} */>
                        <Feather name="arrow-left" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <ScreenHeader title="Cadastrar Novo Funcionário" />
                </View>
            </View>
            <View style={styles.containerColuna}>
                <TouchableOpacity
                    onPress={handleSelecaoFotoFuncionario}
                    style={styles.containerColunaFoto}
                >
                    <Image
                        style={styles.image}
                        source={fotoFuncionario}
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
                        color: "#082777",
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
                        color: "#082777",
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
