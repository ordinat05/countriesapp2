import * as React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home/Home.js";

class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Text>🍀 This Component index.js</Text> */}
        <Home />
      </View>
    );
  }
}

export default App;
