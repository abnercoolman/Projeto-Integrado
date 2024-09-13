import { View, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './styles';

export default function Cadastrar({
  nomeUsuario,
  setNomeUsuario,
  usuario,
  setUsuario,
  senha,
  setSenha,
  confirmarSenha,
  setConfirmarSenha,
  senhaVisivel,
  setSenhaVisivel,
  senhaConfirmarVisivel,
  setConfirmarSenhaVisivel,
}) {
  return (
    <View style={styles.campoEntrada}>

      {/* NOME */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputEmail}
          placeholder="Nome"
          placeholderTextColor="#4B93E7"
          onChangeText={setNomeUsuario}
        />
      </View>

      {/* EMAIL */}

      <View style={styles.inputContainer}>
        <TextInput
          inputMode="email"
          keyboardType="email-address"
          style={styles.inputEmail}
          placeholder="Email"
          placeholderTextColor="#4B93E7"
          onChangeText={setUsuario}
        />
      </View>

      {/* SENHA */}

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="default"
          style={styles.inputEmail}
          placeholder="Senha"
          placeholderTextColor="#4B93E7"
          secureTextEntry={!senhaVisivel}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <>
            {senhaVisivel ? (
              <Feather name="eye" size={15} color="#4B93E7" />
            ) : (
              <Feather name="eye-off" size={15} color="#4B93E7" />
            )}
          </>
        </TouchableOpacity>
      </View>

      {/* CONFIRMAR SENHA */}
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="default"
          style={styles.inputEmail}
          placeholder="Confirmar Senha"
          placeholderTextColor="#4B93E7"
          secureTextEntry={!senhaConfirmarVisivel}
          onChangeText={setConfirmarSenha}
        />
        <TouchableOpacity
          onPress={() => setConfirmarSenhaVisivel(!senhaConfirmarVisivel)}>
          <>
            {senhaVisivel ? (
              <Feather name="eye" size={15} color="#4B93E7" />
            ) : (
              <Feather name="eye-off" size={15} color="#4B93E7" />
            )}
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
}
