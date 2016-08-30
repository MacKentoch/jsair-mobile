'use strict';

import React, {
  Component,
  PropTypes
}                from 'react';
import {
  StyleSheet,
  View,
  ListView,
  // InteractionManager
}                 from 'react-native';
import {
  SponsorCard,
  Loading,
  NoConnectivity,
  NoData
}                 from '../../../../common/components';
import {
  AppConfig
}                 from '../../../../common/config';
import * as Animatable  from 'react-native-animatable';

class Sponsor extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isReady:    false,
      dataSource: ds
    };
  }

  componentDidMount() {
    const { dataSource } = this.state;
    const { sponsors } = this.props;
    /* eslint-disable no-undef */
    this.uglyListViewfix = setTimeout(
      () => {
        this.setState({
          isReady: true,
          dataSource: dataSource.cloneWithRows(sponsors)
        });
      },
      300
    );
    /* eslint-enable no-undef */

    // will no more render 1st time: ListView bug
    // InteractionManager.runAfterInteractions(
    //   () => {
    //     this.setState({
    //       isReady: true,
    //       dataSource: dataSource.cloneWithRows(sponsors)
    //     });
    //   }
    // );
  }

  componentWillReceiveProps(nextProps) {
    const { dataSource } = this.state;
    const { sponsors } = nextProps;
    this.setState({
      dataSource: dataSource.cloneWithRows(sponsors)
    });
  }

  componentWillUnmount() {
    clearTimeout(this.uglyListViewfix);
    this.uglyListViewfix = null;
  }

  render() {
    const { isConnected, hasDataInStore, contentLoading } = this.props;
    const { sponsorType } = this.props;
    const { isReady } = this.state;
    const { noPremiumSponsorsDataText, noGoldSponsorsDataText, noSilverSponsorsDataText } = AppConfig;

    if (!isConnected && !hasDataInStore) {
      return (
        <NoConnectivity />
      );
    }

    if (contentLoading) {
      return (
        <Loading />
      );
    }

    if (!isReady) {
      return (
        null
      );
    }

    if (!hasDataInStore) {
      switch (sponsorType) {
        case 'premier':
          return (
            <NoData
              noDataText={noPremiumSponsorsDataText}
            />
          );
        case 'gold':
          return (
            <NoData
              noDataText={noGoldSponsorsDataText}
            />
          );
        case 'silver':
          return (
            <NoData
              noDataText={noSilverSponsorsDataText}
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
        <View
          style={styles.container}>
          <ListView
            enableEmptySections={true}
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      </Animatable.View>
    );
  }

  renderRow = (rowData, sectionID, rowID) => {
    if (rowData) {
      const { imgSrc, name, link, tagline, startDate } = rowData;
      return (
        <SponsorCard
          image={{uri: imgSrc ? AppConfig.javascriptAirUrl + imgSrc : ''}}
          name={name}
          link={link}
          tagline={tagline}
          startDate={startDate}
        />
      );
    }
  }
}

Sponsor.propTypes = {
  navigator:      PropTypes.object,
  navigate:       PropTypes.func,
  isConnected:    PropTypes.bool.isRequired,
  hasDataInStore: PropTypes.bool.isRequired,
  contentLoading: PropTypes.bool.isRequired,
  sponsorType:    PropTypes.oneOf(['premier', 'gold', 'silver']).isRequired,
  sponsors:       PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc:     PropTypes.string.isRequired,
      name:       PropTypes.string.isRequired,
      link:       PropTypes.string.isRequired,
      tagline:    PropTypes.string.isRequired,
      startDate:  PropTypes.string.isRequired
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  superContainer: {
    flex: 1
  },
  container: {
    flex:             1,
    marginTop:        50
  },
  list:{
    justifyContent: 'center',
    flexDirection:  'row',
    flexWrap:       'wrap'
  },
  row: {
    justifyContent: 'center',
    width:          200,
    height:         200,
  },
  sponsorsList: {
    flexDirection:  'row',
    alignItems:     'center'
  }
});

export default Sponsor;
