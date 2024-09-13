import { ComponentProps } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

interface FuncionarioCardProps extends ComponentProps<typeof TouchableOpacity> {
    nomeFuncionario: string;
    cargoFuncionario: string;
    urlFoto: string;
    onPress: () => void;
}

export default function FuncionarioCard({ nomeFuncionario, cargoFuncionario, urlFoto, onPress, ...rest }: FuncionarioCardProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} {...rest}>
            <View style={styles.horizontal}>
                <Image
                    style={styles.image}
                    source={{ uri: urlFoto }}
                />
                <View style={styles.vertical}>
                    <Text style={styles.textoTitulo1}>{nomeFuncionario}</Text>
                    <Text style={styles.textoTitulo2}>{cargoFuncionario}</Text>
                </View>
            </View>
            <AntDesign name="right" size={24} color="#071C50" />
        </TouchableOpacity>
    );
}
