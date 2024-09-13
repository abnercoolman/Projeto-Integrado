import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCard: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#071C50",
    backgroundColor: "#FFF",
  },
  vertical: {
    flexDirection: "column",
  },
  horizontal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textoTitulo1: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    color: "#071C50",
  },
  textoTitulo2: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#071C50",
  },
});
