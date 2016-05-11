'use strict';

import React, {
  Component,
  PropTypes
}                               from 'react';
import {
  StyleSheet
}                               from 'react-native';
import ScrollableTabView, {
  DefaultTabBar
}                               from 'react-native-scrollable-tab-view';
import Sponsor                  from './sponsor/Sponsor';
import {
  AppColors,
  AppConfig
}                               from '../../../common/config';
import { ScenesBackground }     from '../../../common/containers';

class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.enterSponsors();
  }

  componentDidMount() {
    this.props.fetchSponsorsDataIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isConnected && nextProps.isConnected) {
      this.props.fetchSponsorsDataIfNeeded();
    }
  }

  componentWillUnmount() {
    this.props.leaveSponsors();
  }

  renderTabBar() {
    return (
      <DefaultTabBar
        backgroundColor={AppColors.darkBlack}
        underlineColor={AppColors.mainYellow}
        activeTextColor={AppColors.mainYellow}
        inactiveTextColor={AppColors.lightGrey}
        style={styles.tabBar}
      />
    );
  }

  render() {
    return (
      <ScenesBackground>
        <ScrollableTabView
          style={styles.container}
          renderTabBar={()=>this.renderTabBar()}
          tabBarPosition="overlayTop"
          initialPage={AppConfig.sponsors.initialPage}>
          <Sponsor
            tabLabel="Premier"
            isConnected={this.props.isConnected}
            hasDataInStore={this.props.premierSponsors.length > 0}
            sponsorType={'premier'}
            contentLoading={this.props.isSponsorsFetching}
            sponsors={this.props.premierSponsors}
          />
          <Sponsor
            tabLabel="Gold"
            isConnected={this.props.isConnected}
            hasDataInStore={this.props.goldSponsors.length > 0}
            sponsorType={'gold'}
            contentLoading={this.props.isSponsorsFetching}
            sponsors={this.props.goldSponsors}
          />
          <Sponsor
            tabLabel="Silver"
            isConnected={this.props.isConnected}
            hasDataInStore={this.props.silverSponsors.length > 0}
            sponsorType={'silver'}
            contentLoading={this.props.isSponsorsFetching}
            sponsors={this.props.silverSponsors}
          />
        </ScrollableTabView>
      </ScenesBackground>
    );
  }
}

Sponsors.propTypes = {
  navigator     : PropTypes.object,
  navigate      : PropTypes.func,

  isConnected:                PropTypes.bool,
  isSponsorsFetching:         PropTypes.bool,
  premierSponsors:            PropTypes.array,
  goldSponsors:               PropTypes.array,
  silverSponsors:             PropTypes.array,

  enterSponsors:              PropTypes.func,
  leaveSponsors:              PropTypes.func,
  fetchSponsorsDataIfNeeded:  PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex:      1,
    marginTop: 54
  },
  tabBar: {
    elevation: 4
  }
});

export default Sponsors;
