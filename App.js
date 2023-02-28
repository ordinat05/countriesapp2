import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text>🍀 This Component App.js</Text> */}
      <Index />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "center",
  },
});
