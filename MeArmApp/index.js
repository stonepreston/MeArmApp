/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, Icon, FormLabel, FormInput } from 'react-native-elements'

import {styleConstants} from './styles.js';

import ServoSlider from './ServoSlider.js'



export default class MeArmApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rightServo: 0,
      leftServo: 0,
      middleServo: 0,
      clawServo: 0,
      server: ""
    };
  }

  reset() {

    this.setState({rightServo: 0});
    this.setState({leftServo: 0});
    this.setState({middleServo: 0});
    this.setState({clawServo: 0});
  }

  render() {
    return (
      <View style={styles.container}>

        <Icon

          name='robot'
          type='material-community'
          color='#2c3e50'
          size={125}
        />

        <FormLabel>Server</FormLabel>
        <FormInput onChangeText={(value) => this.setState({server: value})}/>

        <ServoSlider
          sliderName={"Right Servo"}
          value={this.state.rightServo}
          onValueChange={(value) => this.setState({rightServo: value})}
          sliderColor={styleConstants.rightServoColor}
        />

        <ServoSlider
          sliderName={"Left Servo"}
          value={this.state.leftServo}
          onValueChange={(value) => this.setState({leftServo: value})}
          sliderColor={styleConstants.leftServoColor}
        />

        <ServoSlider
          sliderName={"Middle Servo"}
          value={this.state.middleServo}
          onValueChange={(value) => this.setState({middleServo: value})}
          sliderColor={styleConstants.middleServoColor}
        />

        <ServoSlider
          sliderName={"Claw Servo"}
          value={this.state.clawServo}
          onValueChange={(value) => this.setState({clawServo: value})}
          sliderColor={styleConstants.clawServoColor}
        />

        <Button
          raised={true}
          title='RESET'
          backgroundColor={'#2c3e50'}
          buttonStyle={{marginTop:30}}
          onPress={this.reset.bind(this)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('MeArmApp', () => MeArmApp);
