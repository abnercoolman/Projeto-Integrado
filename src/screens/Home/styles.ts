import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#F7AC25",
  },
  containerColuna: {
    flex: 1,
    flexDirection: "column",
    gap: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
  botaoHome: {
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",


    paddingHorizontal: 16,
    paddingVertical: 18,

    backgroundColor: "#F7AC25",

    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0)',
    shadowOpacity: 0.16,
  }
});
