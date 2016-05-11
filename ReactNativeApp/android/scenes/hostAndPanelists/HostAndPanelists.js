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
    this.props.enterHostAndPanelists();
  }

  componentDidMount() {
    this.props.fetchHostDataIfNeeded();
    this.props.fetchPanelistsDataIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isConnected && nextProps.isConnected) {
      this.props.fetchHostDataIfNeeded();
      this.props.fetchPanelistsDataIfNeeded();
    }
  }

  componentWillUnmount() {
    this.props.leaveHostAndPanelists();
  }

  renderTabBar() {
    return (
      <DefaultTabBar
        backgroundColor={AppColors.darkBlack}
        underlineColor={AppColors.mainYellow}
        activeTextColor={AppColors.mainYellow}
        inactiveTextColor={AppColors.lightGrey}
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
            initialPage={AppConfig.hostAndPanelists.initialPage}>
            <Host
              tabLabel="Host"
              isConnected={this.props.isConnected}
              hasDataInStore={isEmptyObject(this.props.hostData) ? false : true}
              contentLoading={this.props.isHostFetching}
              host={this.props.hostData}
            />
            <Panelists
              tabLabel="Panelists"
              isConnected={this.props.isConnected}
              hasDataInStore={(this.props.panelistsData && this.props.panelistsData.length > 0)}
              contentLoading={this.props.isPanelistsFetching}
              panelists={this.props.panelistsData}
            />
          </ScrollableTabView>
      </ScenesBackground>
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
  }
});
export default HostAndPanelists;
