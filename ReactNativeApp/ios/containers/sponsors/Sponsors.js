'use strict';

import { Sponsors }     from '../../scenes';
import { connect }      from 'react-redux';
import * as actions     from '../../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    isConnected:        state.connection.isConnected,

    isSponsorsFetching: state.sponsors.isFetching,
    premierSponsors:    state.sponsors.premierSponsors,
    goldSponsors:       state.sponsors.goldSponsors,
    silverSponsors:     state.sponsors.silverSponsors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterSponsors:              () => dispatch(actions.enterSponsors()),
    leaveSponsors:              () => dispatch(actions.leaveSponsors()),
    fetchSponsorsDataIfNeeded:  () => dispatch(actions.fetchSponsorsDataIfNeeded())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sponsors);
