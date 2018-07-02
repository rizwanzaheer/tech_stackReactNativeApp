import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    console.log('working');
    const { library, description, selectedLibraryId} =  this.props;
    if (library.id === selectedLibraryId) {
      return (
        <Text> {library.description}</Text>
      );
    }
  }
  render() {
    const { id, title, description } = this.props.library;
    console.log("this.props is: ", this.props);
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapstateToProps = state => {
  return {selectedLibraryId: state.selectedLibraryId};
}

export default connect(mapstateToProps, actions)(ListItem);