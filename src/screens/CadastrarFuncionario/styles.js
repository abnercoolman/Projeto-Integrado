import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  cabecalho: {
    width: "100%",
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 32,
    backgroundColor: "#082777",
    flexDirection: "row",
    gap: 32,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  containerColuna: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
    width: "100%",
  },
  containerColunaFoto: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderWidth: 0,
    borderRadius: 8,
    paddingVertical: 15,
    width: '100%',
    paddingHorizontal: 10,
    color: '#082777',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    marginBottom: 20,
    zIndex: 1,
  },
  inputText: {
    flex: 1,
    color: '#082777',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },
  dropDownContainer: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: -20,
    zIndex: 2,
  },

  containerLinhaBotoes: {
    marginTop: 20,
    width: '70%',
    flexDirection: "row",
    justifyContent: "space-between"
  },

  image: {
    width: "40%",
    height: 200,
    marginBottom: 12,
    resizeMode: "cover",
    borderRadius: 12,
  },
  containerLinha: {
    flexDirection: "row",
    gap: 4,
  },
  buttonAdicionar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,

    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#3F861E",
    shadowColor: "rgba(0, 0, 0)",
    shadowOpacity: 0.16,
  },
  buttonCancelar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,

    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#CA2E2E",
    shadowColor: "rgba(0, 0, 0)",
    shadowOpacity: 0.16,
  },
  textButton: {
    color: "#FFFFFF",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
});