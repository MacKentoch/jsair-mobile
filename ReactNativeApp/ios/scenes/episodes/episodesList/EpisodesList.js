'use strict';

import React, {
  Component,
  PropTypes
}                       from 'react';
import {
  StyleSheet,
  View,
  ListView,
  InteractionManager
}                       from 'react-native';
import {
  EpisodeCard,
  NoData,
  Loading,
  NoConnectivity
}                       from '../../../../common/components';
import {
  AppConfig
}                       from '../../../../common/config';
import * as Animatable  from 'react-native-animatable';

class EpisodesList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isReady:      false,
      dataSource:   ds
    };
  }

  componentDidMount() {
    const { dataSource } = this.state;
    const { episodes } = this.props;

    InteractionManager.runAfterInteractions(
      () => {
        this.setState({
          isReady: true,
          dataSource: dataSource.cloneWithRows(episodes)
        });
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    const { dataSource } = this.state;
    const { episodes } = nextProps;

    this.setState({
      dataSource: dataSource.cloneWithRows(episodes)
    });
  }

  render() {
    const { isReady } = this.state;
    const { isConnected, hasDataInStore, contentLoading } = this.props;
    const { episodesType } = this.props;

    if ((!isConnected) && !hasDataInStore) {
      return (
        <NoConnectivity />
      );
    }

    if (contentLoading) {
      return  (
        <Loading />
      );
    }

    if (!isReady) {
      return (
        null
      );
    }

    if (!hasDataInStore) {
      switch (episodesType) {
        case 'past':
          return (
            <NoData
              noDataText={AppConfig.noPastEpisodeText}
            />
          );
        case 'upcoming':
          return (
            <NoData
              noDataText={AppConfig.noUpcomingEpisodeText}
            />
          );
        case 'futur':
          return (
            <NoData
              noDataText={AppConfig.noFuturEpisodeText}
            />
          );
        default:
          return <NoData />;
      }
    }

    return (
      <Animatable.View
        animation={AppConfig.viewAnimations.animation}
        duration={AppConfig.viewAnimations.duration}
        delay={AppConfig.viewAnimations.delay}
        style={styles.superContainer}>
        <View style={styles.container}>
          <ListView
            initialListSize={AppConfig.episodes.initPageSize}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            // removeClippedSubviews={false}
          />
        </View>
      </Animatable.View>
    );
  }

  renderRow = (rowData, sectionID, rowID) => {
    if (rowData) {
      return (
        <EpisodeCard
          key={rowID}
          style={{flexDirection: 'column', justifyContent: 'center'}}
          episode={rowData}
        />
      );
    }
  }
}

EpisodesList.propTypes = {
  tabLabel:       PropTypes.string.isRequired,
  episodesType:   PropTypes.oneOf(['past', 'upcoming', 'futur']),
  contentLoading: PropTypes.bool.isRequired,
  hasDataInStore: PropTypes.bool.isRequired,
  isConnected:    PropTypes.bool,
  episodes:       PropTypes.arrayOf(
    PropTypes.shape({
      numberDisplay:    PropTypes.string.isRequired,
      title:            PropTypes.string.isRequired,
      date:             PropTypes.string.isRequired,
      time:             PropTypes.string.isRequired,
      description:      PropTypes.string.isRequired,
      hangoutId:        PropTypes.string,
      youTubeId:        PropTypes.string,
      guests:           PropTypes.arrayOf(
        PropTypes.shape({
          imgSrc:     PropTypes.string.isRequired,
          name:       PropTypes.string.isRequired,
          twitter:    PropTypes.string,
          links:      PropTypes.arrayOf(PropTypes.string),
          picks:      PropTypes.arrayOf(PropTypes.string)
        })
      ).isRequired
    }))
};

const styles = StyleSheet.create({
  superContainer: {
    flex: 1
  },
  container: {
    flex:             1,
    marginTop:        50
  }
});

export default EpisodesList;
