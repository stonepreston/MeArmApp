import React from 'react';

import {
  StyleSheet,
} from 'react-native';

export const styleConstants = {

  rightServoColor: "#27ae60",
  leftServoColor: "#e74c3c",
  middleServoColor: "#3498db",
  clawServoColor: "#f39c12",
  trackColor: "#95a5a6",

};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ecf0f1',
    paddingLeft: 10,
    paddingRight: 10

  },

  slider: {
    marginTop: 10,
    marginBottom: 10,
  }
});
