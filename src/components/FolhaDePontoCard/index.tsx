import { Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

export default function FolhaDePontoCard() {
    return (
        <View style={styles.containerCard}>
            <View style={styles.horizontal}>
                <View style={styles.vertical}>
                    <Text style={styles.textoTitulo1}>Don Gordon</Text>
                    <Text style={styles.textoTitulo2}>Designer UI/UX</Text>
                </View>
                <Text>08:56</Text>
            </View>
        </View>
    )
}