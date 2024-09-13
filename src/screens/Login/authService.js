import supabase from "../../database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleGoHome = async (email, senha, setResultado, setCarregando, setAutenticado, navigation) => {
    setResultado("");
    setCarregando(true);

    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha
    });
    setCarregando(false);

    if (error === null) {
        await AsyncStorage.setItem('email', email)

        setResultado("Usuário autenticado");
        setAutenticado(true);
        await new Promise((r) => setTimeout(r, 2000));
        navigation.navigate('MainTabs', { screen: 'Home', params: { username: email } });
    } else {
        setResultado("Usário não autenticado");
        setAutenticado(false);
    }
}