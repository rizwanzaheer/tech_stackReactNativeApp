import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends Component {
  render() {
    const { title, description } = this.props.library;
    console.log("this.props is: ", this.props);
    const {titleStyle } = styles;

    
    return (
      <CardSection>
        <Text style={titleStyle}>
          {title}
        </Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}