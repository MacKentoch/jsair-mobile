'use strict';

import React, {
  Component,
  PropTypes
}                 from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  InteractionManager
}                 from 'react-native';
import {
  Member,
  Loading,
  NoConnectivity,
  NoData
}                 from '../../../../common/components';
import {
  AppConfig
}                 from '../../../../common/config';
import * as Animatable  from 'react-native-animatable';


class Panelists extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => this.setState({isReady: true}));
  }

  render() {
    const props = this.props;

    if (!props.isConnected && !props.hasDataInStore) {
      return (
        <NoConnectivity />
      );
    }

    if (props.contentLoading) {
      return (
        <Loading />
      );
    }

    if (!this.state.isReady) {
      return (
        null
      );
    }

    if (!props.hasDataInStore) {
      return (
        <NoData
          noDataText={AppConfig.noPanelistsDataText}
        />
      );
    }

    return (
      <Animatable.View
        animation={AppConfig.viewAnimations.animation}
        duration={AppConfig.viewAnimations.duration}
        delay={AppConfig.viewAnimations.delay}
        style={styles.superContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.panelistsList}>
            {
              props.panelists.map(
                (panelist, panelistIndex) => {
                  return (
                    <Member
                      key={panelistIndex}
                      style={styles.panelists}
                      photo={{uri: panelist.imgSrc ? AppConfig.javascriptAirUrl + panelist.imgSrc : ''}}
                      name={panelist.name}
                      twitter={panelist.twitter}
                      link={panelist.link}
                    />
                  );
                }
              )
            }
          </View>
        </ScrollView>
      </Animatable.View>
    );
  }
}

Panelists.propTypes = {
  navigator:      PropTypes.object,
  contentLoading: PropTypes.bool.isRequired,
  isConnected:    PropTypes.bool.isRequired,
  hasDataInStore: PropTypes.bool.isRequired,
  navigate:       PropTypes.func,
  panelists:      PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc:   PropTypes.string.isRequired,
      name:     PropTypes.string.isRequired,
      twitter:  PropTypes.string.isRequired,
      link:     PropTypes.string.isRequired
    })
  ).isRequired
};

const styles = StyleSheet.create({
  superContainer: {
    flex: 1
  },
  container: {
    flex:       1,
    marginTop:  50
  },
  panelistsList: {
    alignItems:     'center'
  },
  panelists: {
    marginTop: 20
  }
});

export default Panelists;
