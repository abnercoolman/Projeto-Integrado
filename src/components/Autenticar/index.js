import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './styles';

export default function Autenticar({
  email,
  senha,
  setEmail,
  setSenha,
  senhaVisivel,
  setSenhaVisivel,
  isSelectedCheckBox,
  handleToggleShowPass,
}) {
  return (
    <View style={styles.campoEntrada}>
      {/* ############# LOGIN ############# */}
      <TextInput
        inputMode="email"
        keyboardType="email-address"
        style={styles.inputContainer}
        placeholder="Email"
        placeholderTextColor="#4B93E7"
        onChangeText={setEmail}
      />

      {/* ############# SENHA ############# */}
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

      {/* CheckBox lembrar senha */}
      <View style={styles.checkboxForgetPassContainer}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleToggleShowPass}>
            <>
              {isSelectedCheckBox ? (
                <Feather
                  name="check-square"
                  size={15}
                  color="#4B93E7"
                  weight="fill"
                />
              ) : (
                <Feather
                  name="square"
                  size={15}
                  color="#4B93E7"
                  weight="bold"
                />
              )}
            </>
          </TouchableOpacity>
          <Text style={styles.label}>Lembrar</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity>
            <Text style={styles.label}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
