import * as React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { Icon } from "../";
import { searchInputStyles as styles } from "./styles";

class SearchInput extends React.Component {
  render() {
    const { placeholder, onPress, onChangeText, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {/* <Text>🍀This Component SearchInput.js</Text> */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />

        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Icon nameprop="search" tintcolor="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,

  onPress: PropTypes.func,
  onChangeText: PropTypes.func,

  style: PropTypes.any,
};

export default SearchInput;
