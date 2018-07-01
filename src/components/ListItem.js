import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {
  render() {
    const { title, description } = this.props.library;
    console.log("this.props is: ", this.props);

    
    return (
      <CardSection>
        <Text>
          {title}
        </Text>
      </CardSection>
    )
  }
}
