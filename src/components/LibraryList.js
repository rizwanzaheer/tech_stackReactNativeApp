import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import ListItem from './ListItem';
import data from '../reducers/LibraryReducers';

class LibraryList extends Component {
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.dataSource = ds.cloneWithRows([this.props.libraries]);
  // }
  
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log('working');
    console.log('this.props is: ', this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      // <View>hi</View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state is: ', state);
  return {
    libraries: state.libraries,
  };
};

export default connect(mapStateToProps)(LibraryList);