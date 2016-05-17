'use strict';

import React, { Component } from 'react';

const ReactNative = {...React};

ReactNative.StyleSheet = {
  create: function create(styles) {
    return styles;
  }
};

class View extends Component {
  render() {
    return false;
  }
}

class ListView extends Component {
  render() {
    return false;
  }
}

class AppRegistry {
  static registerComponent() {
    //
  }
}

ReactNative.View = View;
ReactNative.View = ListView;
ReactNative.Text = View;
ReactNative.TouchableOpacity = View;
ReactNative.TouchableHighlight = View;
ReactNative.TouchableWithoutFeedback = View;
ReactNative.ToolbarAndroid = View;
ReactNative.Image = View;
ReactNative.AppRegistry = AppRegistry;

export default ReactNative;
