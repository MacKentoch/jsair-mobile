'use strict';

import React, {
  PropTypes
}                         from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  Linking
}                           from 'react-native';
import {
  AppColors,
  AppConfig
}                           from '../../../common/config';
import {
  removeMarkdownLinksAndKeepTextOnly
}                           from '../../../common/services';
import {
  cleanEpisodeDate,
  stripHTML
}                           from '../../../common/services';
import EpisodeButton        from './episodeButton/EpisodeButton';
import GuestBox             from './guestBox/GuestBox';
import DateHeader           from './dateHeader/DateHeader';
import TimeHeader           from './timeHeader/TimeHeader';
import EpisodeTitle         from './episodeTitle/EpisodeTitle';


const SCREEN_WIDTH = Dimensions.get('window').width;

const EpisodeCard = (props) => {
  // INFO : if no youtubeId provided let user go to javascript air youtube channel
  const youtubeUrl = props.episode.youTubeId ?
    `https://www.youtube.com/watch?v=${props.episode.youTubeId}` :
    'https://www.youtube.com/channel/UCJYTMGbtBliMSG8gadRHK2Q/videos';

  // INFO : if no hangoutId provided let user go to google plus javascript air videos
  const googlePlusUrl = props.episode ?
    `https://plus.google.com/events/${props.episode.hangoutId}` :
    'https://plus.google.com/+JavaScriptAir/videos';

  const styles = SCREEN_WIDTH <= AppConfig.smallScreenMaxWidth ?
    smScreensStyles :
    supSmScreenStyles;
  /* eslint quotes:0*/
  const description = removeMarkdownLinksAndKeepTextOnly(stripHTML(props.episode.description.replace(/&#x27;/g, `'`)));

  return (
    <View
      style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={[styles.headerText, styles.headerEpisodeNum]}>
          {props.episode.numberDisplay}:
        </Text>
        <View style={styles.dateAndTimeHeaderContainer}>
          <DateHeader
            episodeDate={props.episode.date}
            dateFormat={'MMM Do YYYY'}
          />
          <TimeHeader
            episodeTime={cleanEpisodeDate(props.episode.time)}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.episodeTitleContainer}>
          <EpisodeTitle
            episodeTitle={stripHTML(props.episode.title)}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {description}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <EpisodeButton
            buttonText={'view episode'}
            onBtnPress={() => Linking.openURL(youtubeUrl).catch(err => console.error('View Episode : an error occurred', err))}
          />
          {
            props.episode.hangoutId &&
            <EpisodeButton
              buttonText={'add to calendar'}
              onBtnPress={() => Linking.openURL(googlePlusUrl).catch(err => console.error('Add To Calendar : an error occurred', err))}
            />
          }
        </View>
        <ScrollView
          horizontal={true}
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={true}
          centerContent={true}
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainerStyle}>
          {
            props.episode.guests.map(
              (guest, guestIndex) => {
                return (
                  <GuestBox
                    key={guestIndex}
                    guest={{
                      photo: {uri: guest.imgSrc ? AppConfig.javascriptAirUrl + guest.imgSrc : ''},
                      name: guest.name ? guest.name : 'TBA',
                      twitter: guest.twitter ? guest.twitter : '',
                    }}
                  />
                );
              }
            )
          }
        </ScrollView>
      </View>
    </View>
  );
};

EpisodeCard.propTypes = {
  episode: PropTypes.shape({
    numberDisplay:    PropTypes.string.isRequired,
    title:            PropTypes.string.isRequired,
    date:             PropTypes.string.isRequired,
    time:             PropTypes.string.isRequired,
    description:      PropTypes.string.isRequired,
    hangoutId:        PropTypes.string,
    youTubeId:        PropTypes.string,
    guests:         PropTypes.arrayOf(
      PropTypes.shape({
        imgSrc:     PropTypes.string.isRequired,
        name:       PropTypes.string.isRequired,
        twitter:    PropTypes.string,
        links:      PropTypes.arrayOf(PropTypes.string),
        picks:      PropTypes.arrayOf(PropTypes.string)
      })
    ).isRequired
  })
};

const supSmScreenStyles = StyleSheet.create({
  container: {
    flex:   1,
    marginTop:    10,
    marginBottom: 10,
    marginLeft:   5,
    marginRight:  5
  },
  headerSection: {
    height:           60,
    paddingLeft:      10,
    paddingRight:     10,
    flex:             1,
    flexWrap:         'wrap',
    // borderTopWidth:   0.5,
    // borderLeftWidth:  0.5,
    // borderRightWidth: 0.5,
    // borderColor:      AppColors.darkGrey,
    flexDirection:    'row',
    alignItems:       'center',
    backgroundColor:  AppColors.lightBlack
  },
  headerText: {
    alignSelf:  'center',
    fontSize:   16,
    fontWeight: '500',
    backgroundColor:  'transparent',
    color:      AppColors.mainYellow
  },
  headerEpisodeNum: {
    fontSize:   18,
    backgroundColor: 'transparent'
  },
  body: {
    alignItems:         'stretch',
    justifyContent:     'flex-start',
    backgroundColor:    AppColors.white,
    paddingLeft:    5,
    paddingRight:   5,
    borderColor:        AppColors.darkGrey,
  },
  episodeTitleContainer: {
    marginTop:    20,
    marginLeft:   5,
    marginRight:  5,
    alignItems:     'center',
    justifyContent: 'center',
  },
  dateAndTimeHeaderContainer: {
    marginLeft:    10,
    flex:           1,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  dateTimeHeaderSeparator: {
    height:       20,
    width:        1,
    borderWidth:  0.5,
    borderColor:  AppColors.mainYellow
  },
  descriptionContainer: {
    alignItems:     'center',
    paddingLeft:    2,
    paddingRight:   2,
    marginBottom:   10,
    marginTop:      10,
    marginLeft:     5,
    marginRight:    5,
  },
  descriptionText: {
    textAlign:  'center'
  },
  buttonsContainer: {
    height:         50,
    marginTop:      5,
    paddingLeft:    2,
    paddingRight:   2,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-around'
  },
  scrollContainer: {

  },
  contentContainerStyle: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center',
    height:         160
  }
});

const smScreensStyles = StyleSheet.create({
  container: {
    flex:   1,
    marginTop:    10,
    marginBottom: 10,
    marginLeft:   5,
    marginRight:  5
  },
  headerSection: {
    height:           60,
    paddingLeft:      10,
    paddingRight:     10,
    flex:             1,
    flexWrap:         'wrap',
    // borderTopWidth:   0.5,
    // borderLeftWidth:  0.5,
    // borderRightWidth: 0.5,
    // borderColor:      AppColors.darkGrey,
    flexDirection:    'row',
    alignItems:       'center',
    backgroundColor:  AppColors.lightBlack
  },
  headerText: {
    alignSelf:  'center',
    fontSize:   14,
    fontWeight: '500',
    color:      AppColors.mainYellow
  },
  headerEpisodeNum: {
    fontSize:   16
  },
  body: {
    alignItems:         'stretch',
    justifyContent:     'flex-start',
    backgroundColor:    AppColors.white,
    paddingLeft:    5,
    paddingRight:   5,
    borderColor:        AppColors.darkGrey,
  },
  episodeTitleContainer: {
    marginTop:    15,
    marginLeft:   5,
    marginRight:  5,
    alignItems:     'center',
    justifyContent: 'center',
  },
  dateAndTimeHeaderContainer: {
    marginLeft:     5,
    flex:           1,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-between'
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems:'center',
  },
  descriptionContainer: {
    alignItems:     'center',
    paddingLeft:    2,
    paddingRight:   2,
    marginBottom:   10,
    marginTop:      10,
    marginLeft:     5,
    marginRight:    5,
  },
  descriptionText: {
    textAlign:  'center'
  },
  buttonsContainer: {
    height:         50,
    marginTop:      5,
    paddingLeft:    2,
    paddingRight:   2,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-around'
  },
  guestContainer: {
    marginTop:      20,
    marginBottom:   10,
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center'
  }
});

export default EpisodeCard;
