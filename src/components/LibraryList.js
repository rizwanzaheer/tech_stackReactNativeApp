import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    return (
      <View>
        
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log('state is: ', state);
};

export default connect(mapStateToProps)(LibraryList);