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

class Host extends Component {
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
          noDataText={AppConfig.noHostDataText}
        />
      );
    }

    return (
      <Animatable.View
        animation={AppConfig.viewAnimations.animation}
        duration={AppConfig.viewAnimations.duration}
        style={styles.superContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.hostList}>
            <Member
              style={styles.host}
              photo={{uri: props.host.imgSrc ? AppConfig.javascriptAirUrl + props.host.imgSrc : ''}}
              name={props.host.name}
              twitter={props.host.twitter}
              link={props.host.link}
            />
          </View>
        </ScrollView>
      </Animatable.View>
    );
  }
}

Host.propTypes = {
  navigator:      PropTypes.object,
  isConnected:    PropTypes.bool.isRequired,
  hasDataInStore: PropTypes.bool.isRequired,
  navigate:       PropTypes.func,
  contentLoading: PropTypes.bool.isRequired,
  host: PropTypes.shape({
    imgSrc:   PropTypes.string,
    name:     PropTypes.string,
    twitter:  PropTypes.string,
    link:     PropTypes.string
  }).isRequired
};

const styles = StyleSheet.create({
  superContainer: {
    flex: 1
  },
  container: {
    flex:       1,
    marginTop:  50
  },
  hostList: {
    flexDirection: 'column',
    alignItems:    'center'
  },
  host: {
    marginTop: 20
  }
});

export default Host;
