import * as React from "react";
import { View, ScrollView } from "react-native";

import { Header, SearchInput, FabButton } from "../../components";
import CountryObject from "./CountryObject";

import { homeStyles as styles } from "./styles";

class Home extends React.Component {
  onSearchButtonTouched = () => {
    console.warn("search button touched");
  };

  onChangeSearchQuery = (text) => {
    console.warn("new text = " + text);
  };

  // onCountryObjectTouched = () => {
  //   console.warn("onCountryObjectTouched basıldı");
  // };
  onFabButtonTouched = () => {
    console.warn("onFabButtonTouched basıldı ");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Header />
          <SearchInput
            placeholder="Ülkenin adını girin"
            onPress={this.onSearchButtonTouched}
            onChangeText={this.onChangeSearchQuery}
            style={styles.searchInput}
          />
          <View style={styles.line} />

          <CountryObject /* onPress={this.onCountryObjectTouched}  */ />
        </ScrollView>
        <FabButton
          icon="refresh"
          // nameprop="refresh"
          onPress={this.onFabButtonTouched}
          style={styles.fabButton}
        />
      </View>
    );
  }
}
export default Home;
