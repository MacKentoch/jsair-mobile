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

  handlePress(event) {
    this.props.onPress(event);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={this.props.style}
          onPress={(e)=>this.handlePress(e)} >
          <Text>
            {this.props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


Button.propTypes = {
  style       : PropTypes.any,
  children    : PropTypes.node.isRequired,
  onPress     : PropTypes.func.isRequired
};


export default Button;
