import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#F7AC25",
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
    paddingHorizontal: 16,
    width: "auto",
  },
  textoTitulo1: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    color: "#082777",
  },
});
