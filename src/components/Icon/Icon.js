import * as React from "react";
// import { View, Text } from "react-native";
import PropTypes from "prop-types";

import Icons from "../../assets/icons";
import { colors } from "../../config/colors";

class Icon extends React.Component {
  render() {
    const { nameprop, tintcolorprop } = this.props;
    const TargetIcon = Icons[nameprop];
    return (
      <TargetIcon tintcolor={tintcolorprop} {...this.props} />
      //   <View>
      //     <Text>Icon Component{nameprop}</Text>
      //   </View>
    );
  }
}
Icon.propTypes = {
  name: PropTypes.string,
  tintcolor: PropTypes.string,
};
Icon.defaultProps = {
  tintcolor: colors.accent,
};

export default Icon;
