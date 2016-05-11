'use strict';

import React, {
  Component,
  PropTypes
}                     from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image
}                     from 'react-native';
import { Button }     from '../../../common/components';
import {
  AppRoutes,
  AppColors
}                     from '../../../common/config';
import Icon           from 'react-native-vector-icons/Ionicons';

const window    = Dimensions.get('window');

class SideMenuContent extends Component {
  constructor(props) {
    super(props);
  }

  handleNavButtonPress(event, route) {

    this.props.navigate(route);
  }

  renderSideMenuButtons() {
    const routes          = AppRoutes.getAllRoutes();
    const SideMenuButtons = routes.map(
      (route) => {
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
            <Button
              style={[styles.navButton]}
              onPress={(e)=>this.handleNavButtonPress(e, {id : route.id})} >
              <Text style={styles.navButtonText}>
                {route.sidemenu.sideMenuButtonText}
              </Text>
            </Button>
          </View>
        );
      }
    );
    return SideMenuButtons;
  }

  render() {
    return (
      <ScrollView
        style={[styles.container,{backgroundColor: this.props.backGndColor}]}
        scrollsToTop={false}>
        <Image
          source={require('../../img/sidepanel.png')}
          style={styles.backgroundImage}
          resizeMode={'cover'}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {this.props.sideMenuTitle}
            </Text>
          </View>
          <View style={styles.menusContainer}>
            {this.renderSideMenuButtons()}
          </View>
        </Image>
      </ScrollView>
    );
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
  navButton: {
    flex:           1,
    width:          window.width * 0.8,
    flexDirection:  'row',
    alignItems:     'center',
    backgroundColor:  'transparent'
  },
  icon: {
    marginRight: 15
  },
  navButtonText: {
    color:         AppColors.lightBlack,
    fontSize:      22,
    marginLeft:    30,
    paddingLeft:   20,
    paddingRight:  20
  }
});

export default SideMenuContent;
