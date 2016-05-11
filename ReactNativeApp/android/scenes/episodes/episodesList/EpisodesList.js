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
    this.init();
  }

  init() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isReady:      false,
      dataSource:   ds
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(
      () => {
        this.setState({
          isReady: true,
          dataSource: this.state.dataSource.cloneWithRows(this.props.episodes)
        });
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.episodes)
    });
  }

  renderRow(rowData, sectionID, rowID) {
    if (rowData) {
      return (
        <EpisodeCard
          key={rowID}
          episode={rowData}
        />
      );
    }
  }

  render() {
    const props = this.props;

    if (!props.isConnected && !props.hasDataInStore) {
      return (
        <NoConnectivity />
      );
    }

    if (props.contentLoading) {
      return  (
        <Loading />
      );
    }

    if (!this.state.isReady) {
      return (
        null
      );
    }

    if (!props.hasDataInStore) {
      console.log('no data');
      switch (props.episodesType) {
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
        style={styles.superContainer}>
        <View style={styles.container}>
          <ListView
            initialListSize={AppConfig.episodes.initPageSize}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID)=>this.renderRow(rowData, sectionID, rowID)}
          />
        </View>
      </Animatable.View>
    );
  }
}

EpisodesList.propTypes = {
  tabLabel:       PropTypes.string.isRequired,
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
