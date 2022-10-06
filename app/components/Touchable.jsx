import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

export default ({ children, onPress, style }) => {
  const T = Platform.OS == 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return <T onPress={onPress} style={style}>{children}</T>;
};
