'use strict';

import { HostAndPanelists }     from '../../scenes';
import { connect }              from 'react-redux';
import * as actions             from '../../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    isConnected:            state.connection.isConnected,

    isHostFetching:         state.host.isFetching,
    hostData:               state.host.hostData,

    isPanelistsFetching:    state.panelists.isFetching,
    panelistsData:          state.panelists.panelistsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterHostAndPanelists:      () => dispatch(actions.enterHostAndPanelists()),
    leaveHostAndPanelists:      () => dispatch(actions.leaveHostAndPanelists()),
    fetchHostDataIfNeeded:      () => dispatch(actions.fetchHostDataIfNeeded()),
    fetchPanelistsDataIfNeeded: () => dispatch(actions.fetchPanelistsDataIfNeeded()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostAndPanelists);
