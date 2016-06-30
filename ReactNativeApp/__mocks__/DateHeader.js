'use strict';

jest.disableAutomock(); // babel-jest version of "jest.autoMockOff()"
import React, {
  PropTypes,
  Component
}                      from 'react';
import {
  View
}                      from 'react-native';

jest.unmock('../common/components/episodeCard/dateHeader/DateHeader');
import { DateHeader }  from '../common/components/episodeCard/dateHeader/DateHeader';

class DateHeaderMock extends Component {
  render() {
    const { episodeDate, dateFormat } = this.props;
    return (
      <View>
        <DateHeader
          episodeDate={episodeDate}
          dateFormat={dateFormat}
        />
      </View>
    );
  }
}

DateHeaderMock.propTypes = {
  episodeDate: PropTypes.string.isRequired,
  dateFormat:  PropTypes.string
};

DateHeaderMock.defaultProps = {
  dateFormat: 'MMM Do YYYY'
};

export default DateHeaderMock;
