import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#F3F4F6",
    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,

    elevation: 5,

    alignItems: "center",
    padding: 8,
    paddingRight: 16,
    marginBottom: 12,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: 16,
    resizeMode: "cover",
  },
  vertical: {
    flexDirection: "column",
  },
  horizontal: {
    flexDirection: "row",
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
