'use strict';

import React, {
  Component,
  PropTypes
}                     from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
}                     from 'react-native';
import { Button }     from '../../../../common/components';
import {
  AppColors
}                     from '../../../../common/config';
import shallowCompare from 'react-addons-shallow-compare';


const { width } = Dimensions.get('window');

class NavButton extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { navText } = this.props;

    return (
      <Button
        style={[styles.navButton]}
        onPress={this.handleNavButtonPress} >
        <Text style={styles.navButtonText}>
          {navText}
        </Text>
      </Button>
    );
  }

  handleNavButtonPress = (event) => {
    const { onNavButtonPress, routeId } = this.props;
    onNavButtonPress({id : routeId});
  }
}

NavButton.propTypes = {
  routeId: PropTypes.number.isRequired,
  navText: PropTypes.string.isRequired,
  onNavButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  navButtonText: {
    color:         AppColors.lightBlack,
    fontSize:      22,
    marginLeft:    30,
    paddingLeft:   20,
    paddingRight:  20
  },
  navButton: {
    flex:             1,
    width:            width * 0.8,
    flexDirection:    'row',
    alignItems:       'center',
    backgroundColor:  'transparent'
  }
});

export default NavButton;
