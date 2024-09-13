import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string
}

export default function ScreenHeader({ title }: Props) {
    return (
        <View style={styles.containerCenter}>
            <Text style={styles.textoTituloHeader}>{title}</Text>
        </View>
    )
}