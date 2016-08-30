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
import EpisodesList             from './episodesList/EpisodesList';
import {
  AppColors,
  AppConfig
}                               from '../../../common/config';
import { ScenesBackground }     from '../../../common/containers';

class Episodes extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { enterEpisodes } = this.props;
    enterEpisodes();
  }

  componentDidMount() {
    const { fetchAllEpisodesIfNeeded } = this.props;
    fetchAllEpisodesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    const { isConnected, fetchAllEpisodesIfNeeded } = this.props;
    if (!isConnected && nextProps.isConnected) {
      fetchAllEpisodesIfNeeded();
    }
  }

  componentWillUnmount() {
    const { leaveEpisodes } = this.props;
    leaveEpisodes();
  }

  render() {
    const { isConnected, isFetching } = this.props;
    const { pastEpisodes, upcomingEpisodes, futurEpisodes } = this.props;
    const { episodes: { initialPage } } = AppConfig;

    return (
      <ScenesBackground>
        <ScrollableTabView
          style={styles.container}
          renderTabBar={this.renderTabBar}
          tabBarPosition="overlayTop"
          initialPage={initialPage}>
          <EpisodesList
            tabLabel="Past"
            isConnected={isConnected}
            hasDataInStore={(pastEpisodes && pastEpisodes.length > 0)}
            contentLoading={isFetching}
            episodes={pastEpisodes}
          />
          <EpisodesList
            tabLabel="Upcoming"
            isConnected={isConnected}
            hasDataInStore={(upcomingEpisodes && upcomingEpisodes.length > 0)}
            contentLoading={isFetching}
            episodes={upcomingEpisodes}
          />
          <EpisodesList
            tabLabel="Future"
            isConnected={isConnected}
            hasDataInStore={(futurEpisodes && futurEpisodes.length > 0)}
            contentLoading={isFetching}
            episodes={futurEpisodes}
          />
        </ScrollableTabView>
      </ScenesBackground>
    );
  }

  renderTabBar = () => {
    const { darkBlack, mainYellow, lightGrey } = AppColors;
    return (
      <DefaultTabBar
        backgroundColor={darkBlack}
        underlineColor={mainYellow}
        activeTextColor={mainYellow}
        inactiveTextColor={lightGrey}
        textStyle={styles.tabBarTextStyle}
      />
    );
  }
}


Episodes.propTypes = {
  navigator:                PropTypes.object,
  navigate:                 PropTypes.func,

  isConnected:              PropTypes.bool,
  isFetching:               PropTypes.bool,

  storedPastEpisode:        PropTypes.bool,
  storedUpcomingEpisode:    PropTypes.bool,
  storedFuturEpisode:       PropTypes.bool,

  pastEpisodes:             PropTypes.array,
  upcomingEpisodes:         PropTypes.array,
  futurEpisodes:            PropTypes.array,

  enterEpisodes:            PropTypes.func,
  fetchAllEpisodesIfNeeded: PropTypes.func
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


export default Episodes;
