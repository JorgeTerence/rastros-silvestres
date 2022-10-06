import React from 'react';
import { View, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

export default ({ children, style }) => {
  return Platform.OS == 'ios'
    ? <SafeAreaView style={[styles.body, style]}>{children}</SafeAreaView>
    : <View style={[styles.body, styles.android, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: 'white',
  },
  android: {
    paddingTop: (StatusBar.currentHeight ?? 0) + 15,
  },
});
