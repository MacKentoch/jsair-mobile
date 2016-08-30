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
    const { enterSponsors } = this.props;
    enterSponsors();
  }

  componentDidMount() {
    const { fetchSponsorsDataIfNeeded } = this.props;
    fetchSponsorsDataIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    const { isConnected, fetchSponsorsDataIfNeeded } = this.props;
    if (!isConnected && nextProps.isConnected) {
      fetchSponsorsDataIfNeeded();
    }
  }

  componentWillUnmount() {
    const { leaveSponsors } = this.props;
    leaveSponsors();
  }

  render() {
    const { isConnected, isSponsorsFetching } = this.props;
    const { premierSponsors, goldSponsors, silverSponsors } = this.props;

    return (
      <ScenesBackground>
        <ScrollableTabView
          style={styles.container}
          renderTabBar={()=>this.renderTabBar()}
          tabBarPosition="overlayTop"
          initialPage={AppConfig.sponsors.initialPage}>
          <Sponsor
            tabLabel="Premier"
            isConnected={isConnected}
            hasDataInStore={premierSponsors.length > 0}
            sponsorType={'premier'}
            contentLoading={isSponsorsFetching}
            sponsors={premierSponsors}
          />
          <Sponsor
            tabLabel="Gold"
            isConnected={isConnected}
            hasDataInStore={goldSponsors.length > 0}
            sponsorType={'gold'}
            contentLoading={isSponsorsFetching}
            sponsors={goldSponsors}
          />
          <Sponsor
            tabLabel="Silver"
            isConnected={isConnected}
            hasDataInStore={silverSponsors.length > 0}
            sponsorType={'silver'}
            contentLoading={isSponsorsFetching}
            sponsors={silverSponsors}
          />
        </ScrollableTabView>
      </ScenesBackground>
    );
  }

  renderTabBar = () => {
    return (
      <DefaultTabBar
        backgroundColor={AppColors.darkBlack}
        underlineColor={AppColors.mainYellow}
        activeTextColor={AppColors.mainYellow}
        inactiveTextColor={AppColors.lightGrey}
        style={styles.tabBar}
        textStyle={styles.tabBarTextStyle}
      />
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
  },
  tabBarTextStyle: {
    marginBottom:  -20,
    paddingBottom:  0,
  }
});

export default Sponsors;
