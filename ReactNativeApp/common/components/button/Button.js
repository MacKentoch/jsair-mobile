'use strict';

import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  TouchableOpacity,
  View,
  Text
}                     from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

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
    const { onPress } = this.props;
    onPress(event);
  }
}


Button.propTypes = {
  style       : PropTypes.any,
  children    : PropTypes.node.isRequired,
  onPress     : PropTypes.func.isRequired
};


export default Button;
