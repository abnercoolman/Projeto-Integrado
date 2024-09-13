import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import Cadastrar from "../../components/Cadastrar";

export default function CadastrarLogin({ route, navigation }) {

    const handleGoLogin = () => {
        navigation.navigate("Login");
    };

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [senhaConfirmarVisivel, setConfirmarSenhaVisivel] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [resultado, setResultado] = useState('');
    const [autenticado, setAutenticado] = useState(true);


    const handleCadastrar = () => {
        /* Teste */
        console.log({
            nomeUsuario,
            usuario,
            senha,
            confirmarSenha,
        })
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <Text style={styles.textoCabecalho}>Cariri RH</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.textoTitulo}>Cariri RH</Text>

                    <View style={styles.toggleLogin}>
                        <TouchableOpacity onPress={handleGoLogin}>
                            <Text style={styles.toggleTextOff}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.verticalLine} />
                        <Text style={styles.toggleTextOn}>Cadastrar</Text>
                    </View>

                    <Cadastrar
                        nomeUsuario={nomeUsuario}
                        setNomeUsuario={setNomeUsuario}
                        usuario={usuario}
                        setUsuario={setUsuario}
                        senha={senha}
                        setSenha={setSenha}
                        confirmarSenha={confirmarSenha}
                        setConfirmarSenha={setConfirmarSenha}
                        senhaVisivel={senhaVisivel}
                        setSenhaVisivel={setSenhaVisivel}
                        senhaConfirmarVisivel={senhaConfirmarVisivel}
                        setConfirmarSenhaVisivel={setConfirmarSenhaVisivel}
                    />

                    {/* ####### LINHA "OU" E BOTÕES ####### */}

                    {/* ####### LINHA "OU" ####### */}

                    <View style={styles.anotherOption}>
                        <View style={styles.horizontalLine} />
                        <Text style={styles.label}>ou</Text>
                        <View style={styles.horizontalLine} />
                    </View>
                    {/*Botão Cadastrar*/}
                    <TouchableOpacity onPress={handleCadastrar}>
                        <View style={styles.buttonEntrar}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.buttonGoogle}>
                            <Text style={styles.textButton}>Cadastrar com</Text>
                            <AntDesign
                                name="google"
                                size={16}
                                weight="light"
                                color="#FFFFFF"
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.resultadoAutenticacao}>
                        <ActivityIndicator animating={carregando} color="#F7AC25" />
                        <Text
                            style={
                                autenticado ? styles.textAutenticado : styles.textNaoAutenticado
                            }
                        >
                            {resultado}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}
