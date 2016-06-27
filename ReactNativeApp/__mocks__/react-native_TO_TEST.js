'use strict';

import React from 'react';
const ReactNative = React;

// Simulate style creator
ReactNative.StyleSheet = {
  create: function create(styles) {
      return styles;
  }
};

// Create react native component helper
const NativeComponent = (type) => {
  return React.createClass({
    render() {
      var properties = {className: type};
      if (typeof this.props.onPress !== 'undefined') {
        properties.onClick = this.props.onPress;
      }
      Object.assign(properties, this.props);
      return (
        <div {...properties}>{this.props.children}</div>
      );
    }
  });
};

// Specific to list view
class ListView extends React.Component {
  static DataSource() {
  }
  render() {
    var properties = {className: 'ListView'};
    Object.assign(properties, this.props);
    return (
      <div {...properties}>{this.props.children}</div>
    );
  }
}

// App Registry
class AppRegistry {
  static registerComponent () {
  }
}

ReactNative.View = NativeComponent('View');
ReactNative.ScrollView = NativeComponent('ScrollView');
ReactNative.Text = NativeComponent('Text');
ReactNative.TouchableOpacity = NativeComponent('TouchableOpacity');
ReactNative.TouchableHighlight = NativeComponent('TouchableHighlight');
ReactNative.TouchableWithoutFeedback = NativeComponent('TouchableWithoutFeedback');
ReactNative.TouchableNativeFeedback = NativeComponent('TouchableNativeFeedback');
ReactNative.ToolbarAndroid = NativeComponent('ToolbarAndroid');
ReactNative.Image = NativeComponent('Image');


ReactNative.ListView = ListView;
ReactNative.AppRegistry = AppRegistry;

export default ReactNative;
