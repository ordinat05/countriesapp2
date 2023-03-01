import * as React from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Header, SearchInput, FabButton } from "../../components";
import CountryObject from "./CountryObject";

import { fetchCountries, changeSearchQuery } from "../../actions/countries.js";

import { homeStyles as styles } from "./styles";

class Home extends React.Component {
  onSearchButtonTouched = () => {
    // console.warn("search button touched");
    //TODO: call this action by dispatch
    this.props.dispatch(fetchCountries("some query"));
  };

  onChangeSearchQuery = (text) => {
    // console.warn("new text = " + text);
    // TODO: call this action by dispatch
    this.props.dispatch(changeSearchQuery(text));
  };
  // onCountryObjectTouched = () => {
  //   console.warn("onCountryObjectTouched basıldı");
  // };
  onFabButtonTouched = () => {
    // console.warn("onFabButtonTouched basıldı ");
    // TODO: call this action by dispatch
    this.props.dispatch(fetchCountries(""));
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
Home.propTypes = {
  dispatch: PropTypes.func,
};

const stateToProps = (state) => {
  return {};
};

export default connect(stateToProps)(Home);
