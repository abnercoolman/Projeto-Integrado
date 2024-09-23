import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: "center",
    paddingHorizontal: 20,
    width: "auto",
    marginTop: 15,
  },
  containerColunaLeft: {
    flexDirection: "column",
    width: "100%",
    paddingLeft: 20,
    marginBottom: 12,
  },
  image: {
    width: "40%",
    height: 200,
    padding: 32,
    marginTop: 10,
    marginBottom: 12,
    resizeMode: "cover",
    borderRadius: 12,
  },
  horizontal: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 8,
  },
  fotoENome: {
    flexDirection: "row",
    gap: 10,
    alignContent: "center",
    alignItems: "center",
  },
  textoTitulo1: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#071C50",
  },
  textoTitulo2: {
    marginTop: 4,
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    color: "#000",
  },
  buttonEditar: {
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
  buttonDesligar: {
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
  buttonRegistrarPonto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,

    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#4B93E7",
    shadowColor: "rgba(0, 0, 0)",
    shadowOpacity: 0.16,
  },
  textButton: {
    color: "#FFFFFF",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  // Estilos do Modal
  modalContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo transparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#000",
  },
  funcionarioNome: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: "#071C50",
  },
  modalButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 65,
    alignItems: "center",
    alignContent: "center",
  },
  modalButtonYes: {
    backgroundColor: '#3F861E', // Ou a cor que você preferir
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonNo: {
    backgroundColor: '#CA2E2E', // Ou a cor que você preferir
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },

});
