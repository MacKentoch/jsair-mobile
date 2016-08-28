'use strict';

import React, {
  Component,
  PropTypes
}                   from 'react';
import {
  TouchableOpacity,
  View,
  Text
}                   from 'react-native';

class Button extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={this.props.style}
          onPress={this.handlePress} >
          <Text>
            {this.props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  handlePress = (event) => {
    this.props.onPress(event);
  }

}


Button.propTypes = {
  style       : PropTypes.any,
  children    : PropTypes.node.isRequired,
  onPress     : PropTypes.func.isRequired
};


export default Button;
