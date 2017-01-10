import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

class AlbumDetail extends Component {

  render () {
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{uri:this.props.album.thumbnail_image}}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style = {imageStyle}
            source={{uri: this.props.album.image}}
          />
        </CardSection>
      </Card>
    );
  };
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

export default AlbumDetail;