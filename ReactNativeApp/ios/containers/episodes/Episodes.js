'use strict';

import { Episodes }             from '../../scenes';
import { connect }              from 'react-redux';
import * as actions             from '../../../common/redux/actions';

const mapStateToProps = (state) => {
  return {
    isConnected:            state.connection.isConnected,
    isFetching:             state.episodes.isFetching,

    storedPastEpisode:      state.episodes.storedPastEpisode,
    storedUpcomingEpisode:  state.episodes.storedUpcomingEpisode,
    storedFuturEpisode:     state.episodes.storedFuturEpisode,

    pastEpisodes:           state.episodes.pastEpisodes,
    upcomingEpisodes:       state.episodes.upcomingEpisodes,
    futurEpisodes:          state.episodes.futurEpisodes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterEpisodes: () => dispatch(actions.enterEpisodes()),
    leaveEpisodes: () => dispatch(actions.leaveEpisodes()),
    fetchAllEpisodesIfNeeded: () => dispatch(actions.fetchAllEpisodesIfNeeded())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episodes);
