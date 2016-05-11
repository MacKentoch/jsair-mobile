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
    this.props.enterEpisodes();
  }

  componentDidMount() {
    this.props.fetchAllEpisodesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isConnected && nextProps.isConnected) {
      this.props.fetchAllEpisodesIfNeeded();
    }
  }

  componentWillUnmount() {
    this.props.leaveEpisodes();
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
          initialPage={AppConfig.episodes.initialPage}>
          <EpisodesList
            tabLabel="Past"
            isConnected={this.props.isConnected}
            hasDataInStore={(this.props.pastEpisodes && this.props.pastEpisodes.length > 0)}
            contentLoading={this.props.isFetching}
            episodes={this.props.pastEpisodes}
          />
          <EpisodesList
            tabLabel="Upcoming"
            isConnected={this.props.isConnected}
            hasDataInStore={(this.props.upcomingEpisodes && this.props.upcomingEpisodes.length > 0)}
            contentLoading={this.props.isFetching}
            episodes={this.props.upcomingEpisodes}
          />
          <EpisodesList
            tabLabel="Future"
            isConnected={this.props.isConnected}
            hasDataInStore={(this.props.futurEpisodes && this.props.futurEpisodes.length > 0)}
            contentLoading={this.props.isFetching}
            episodes={this.props.futurEpisodes}
          />
        </ScrollableTabView>
      </ScenesBackground>
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
  }
});


export default Episodes;
