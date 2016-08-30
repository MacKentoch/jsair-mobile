'use strict';

import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image
}                     from 'react-native';
import {
  AppRoutes,
  AppColors
}                     from '../../../common/config';
import Icon           from 'react-native-vector-icons/Ionicons';
import NavButton      from './navButton/NavButton';

const window    = Dimensions.get('window');
const routes    = AppRoutes.getAllRoutes();


class SideMenuContent extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { backGndColor, sideMenuTitle } = this.props;
    return (
      <ScrollView
        style={[styles.container, {backgroundColor: backGndColor}]}
        scrollsToTop={false}>
        <Image
          source={require('../../img/sidepanel.png')}
          style={styles.backgroundImage}
          resizeMode={'cover'}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {sideMenuTitle}
            </Text>
          </View>
          <View style={styles.menusContainer}>
            {this.renderSideMenuButtons()}
          </View>
        </Image>
      </ScrollView>
    );
  }

  renderSideMenuButtons() {
    const SideMenuButtons = routes.map(
      route => {
        return (
          <View
            style={styles.rowContent}
            key={route.id}>
            <Icon
              style={styles.icon}
              name={route.sidemenu.iconName}
              size={28}
              color={AppColors.darkBlack}
            />
            <NavButton
              routeId={route.id}
              navText={route.sidemenu.sideMenuButtonText}
              onNavButtonPress={this.handleNavButtonPress}
            />
          </View>
        );
      }
    );
    return SideMenuButtons;
  }

  handleNavButtonPress = (route) => {
    const { navigate } = this.props;
    navigate(route);
  }
}

SideMenuContent.propTypes = {
  backGndColor:   PropTypes.string,
  sideMenuTitle:  PropTypes.string,
  openDrawer:     PropTypes.func,
  closeDrawer:    PropTypes.func,
  navigate:       PropTypes.func
};

SideMenuContent.defaultProps = {
  backGndColor:   AppColors.mainYellow,
  sideMenuTitle: ''
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width:    window.width  * 0.8,
    height:   window.height
  },
  container: {
    padding:  5
  },
  headerContainer: {
    flex:               1,
    flexDirection:      'row',
    alignItems:         'center',
    borderBottomWidth:  2,
    borderBottomColor:  '#333333'
  },
  headerText: {
    color:            '#000',
    fontSize:         32,
    fontWeight:       '900',
    paddingTop:       5,
    paddingBottom:    5,
    paddingLeft:      2,
    paddingRight:     2,
    backgroundColor:  'transparent'
  },
  menusContainer: {
    flex:           3,
    marginTop:      20,
    paddingTop:     5,
    paddingLeft:    5,
    paddingBottom:  5,
    flexDirection:  'column',
    alignItems:     'flex-start',
    justifyContent: 'flex-start'
  },
  rowContent: {
    height:         60,
    flexDirection: 'row',
    alignItems:    'center'
  },
  icon: {
    marginRight: 15
  },

});

export default SideMenuContent;
