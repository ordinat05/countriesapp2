import * as React from "react";
import { View, Text } from "react-native";
import { headerStyles as styles } from "./styles";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.subtitle}>🍀 This Component Header.js</Text> */}
        <Text style={styles.subtitle}>Hangi Ülkeyi Merak Ediyorsunuz?</Text>
        <Text style={styles.line}></Text>
        <Text style={styles.title}>COUNTRIES</Text>
      </View>
    );
  }
}
export default Header;
