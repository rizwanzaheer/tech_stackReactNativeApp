import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
  state = { email: '', password: '', err: '', loading: false }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ err: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
    </Button>);
  }
  onLoginFailed() {
    this.setState({ err: 'Authentication failed!', loading: false });
  }
  onLoginSuccess() {
    this.setState({ email: '', password: '', err: '', loading: false });
  }
  render() {
    const { errTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            label="Email"
            placeHolder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            label="Password"
            placeHolder="Password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={errTextStyle}>
          {this.state.err}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
