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
import { isEmptyObject }        from '../../../common/services/utils/utils';
import Host                     from './host/Host';
import Panelists                from './panelists/Panelists';
import {
  AppColors,
  AppConfig
}                               from '../../../common/config';
import { ScenesBackground }     from '../../../common/containers';


class HostAndPanelists extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { enterHostAndPanelists } = this.props;
    enterHostAndPanelists();
  }

  componentDidMount() {
    const { fetchHostDataIfNeeded, fetchPanelistsDataIfNeeded } = this.props;
    fetchHostDataIfNeeded();
    fetchPanelistsDataIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    const { isConnected, fetchHostDataIfNeeded, fetchPanelistsDataIfNeeded } = this.props;
    if (!isConnected && nextProps.isConnected) {
      fetchHostDataIfNeeded();
      fetchPanelistsDataIfNeeded();
    }
  }

  componentWillUnmount() {
    const { leaveHostAndPanelists } = this.props;
    leaveHostAndPanelists();
  }

  render() {
    const {
      isConnected,
      hostData,
      panelistsData,
      isHostFetching,
      isPanelistsFetching
    } = this.props;

    return (
      <ScenesBackground>
          <ScrollableTabView
            style={styles.container}
            renderTabBar={this.renderTabBar}
            tabBarPosition="overlayTop"
            initialPage={AppConfig.hostAndPanelists.initialPage}>
            <Host
              tabLabel="Host"
              isConnected={isConnected}
              hasDataInStore={isEmptyObject(hostData) ? false : true}
              contentLoading={isHostFetching}
              host={hostData}
            />
            <Panelists
              tabLabel="Panelists"
              isConnected={isConnected}
              hasDataInStore={(panelistsData && panelistsData.length > 0)}
              contentLoading={isPanelistsFetching}
              panelists={panelistsData}
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
        textStyle={styles.tabBarTextStyle}
      />
    );
  }
}

HostAndPanelists.propTypes = {
  navigator:            PropTypes.object,
  navigate:             PropTypes.func,

  isConnected:          PropTypes.bool,
  isHostFetching:       PropTypes.bool,
  hostData:             PropTypes.object,
  isPanelistsFetching:  PropTypes.bool,
  panelistsData:        PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex:            1,
    marginTop:       54
  },
  tabBarTextStyle: {
    marginBottom:  -20,
    paddingBottom:  0,
  }
});

export default HostAndPanelists;
