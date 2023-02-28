import { StyleSheet } from "react-native";
import { colors } from "../../config/colors.js";

export const headerStyles = StyleSheet.create({
  container: {
    // color: "cyan",
    // backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    paddingTop: 36,
    paddingHorizontal: 36,
    paddingBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",

    color: colors.accent,
    // backgroundColor: colors.accent,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text_color,
    // backgroundColor: colors.text_color,
  },
  line: {
    width: 90,
    height: 1,

    marginTop: 15,
    marginBottom: 5,
    backgroundColor: colors.gray,
  },
});
