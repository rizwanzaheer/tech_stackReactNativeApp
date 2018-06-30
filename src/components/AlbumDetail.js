import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends Component {
  render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album;
    const {
      headerContentStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle, headerTextStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
            Click me!
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  headerContentStyle:
  {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
