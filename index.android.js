'use strict';
/* eslint no-unused-vars:0 */
import React            from 'react';
import { AppRegistry }  from 'react-native';
import jsair            from './ReactNativeApp/android/index.android.js';

AppRegistry.registerComponent(
  'jsair',
  () => jsair
);
