'use strict';
import React, {
  Component,
  PropTypes
}                from 'react';
import {
  StyleSheet,
  View,
  ListView,
  InteractionManager
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
    this.init();
  }

  init() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isReady:    false,
      dataSource: ds
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(
      () => {
        this.setState({
          isReady: true,
          dataSource: this.state.dataSource.cloneWithRows(this.props.sponsors)
        });
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.sponsors)
    });
  }

  renderRow(rowData, sectionID, rowID) {
    if (rowData) {
      return (
        <SponsorCard
          image={{uri: rowData.imgSrc ? AppConfig.javascriptAirUrl + rowData.imgSrc : ''}}
          name={rowData.name}
          link={rowData.link}
          tagline={rowData.tagline}
          startDate={rowData.startDate}
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
      switch (props.sponsorType) {
        case 'premier':
          return (
            <NoData
              noDataText={AppConfig.noPremiumSponsorsDataText}
            />
          );
        case 'gold':
          return (
            <NoData
              noDataText={AppConfig.noGoldSponsorsDataText}
            />
          );
        case 'silver':
          return (
            <NoData
              noDataText={AppConfig.noSilverSponsorsDataText}
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
            enableEmptySections={true}
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID)=>this.renderRow(rowData, sectionID, rowID)}
          />
        </View>
      </Animatable.View>
    );
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
