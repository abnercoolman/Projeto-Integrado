import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerButtonOn: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 96,
    paddingHorizontal: 6,
    height: 33,
    backgroundColor: "#F7AC25",
    borderRadius: 8,
    marginRight: 5,
  },
  containerButtonOff: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 96,
    paddingHorizontal: 6,
    height: 33,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 0.75,
    borderColor: "#082777",
    marginRight: 5,
  },
  textoButtonOn: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    color: "#FFFFFF",
  },
  textoButtonOff: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    color: "#082777",
  },
});
