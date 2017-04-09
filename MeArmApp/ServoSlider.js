
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {styleConstants} from './styles.js';

var Slider = require('react-native-slider');

export default class ServoSlider extends Component {
  render() {
    return (
      <View>
      <View style={servoSliderStyles.slider}>
        <Slider
          value={this.props.value}
          onValueChange={this.props.onValueChange}
          minumumValue={0}
          maximumValue={160}
          step={1}
          thumbStyle={{top: 22}}
          thumbTintColor={this.props.sliderColor}
          minimumTrackTintColor={this.props.sliderColor}
          maxiumTrackTintColor={styleConstants.trackColor}
        />
        <Text style={{color: this.props.sliderColor}}>{this.props.sliderName}: {this.props.value}</Text>
      </View>
      </View>
    );
  }
}

const servoSliderStyles = StyleSheet.create({

  slider: {
    marginTop: 10,
    marginBottom: 10,
  }
});
