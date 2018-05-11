
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      region: {
                latitude: -33.8701062,
                longitude: 151.2076937,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
    };
  }


    onRegionChange(region) {
        console.log(region);
        console.log(this.state.region);
        this.setState({
            region: region
        });
    }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
            <MapView style={styles.map}
                    showsUserLocation={ true }
                    region={ this.state.region }
                    onRegionChange={ region => this.setState({region}) }
                    onRegionChangeComplete={ region => this.setState({region}) }
            />
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default GeolocationExample;

const styles = StyleSheet.create ({
    map: {
        width: '100%',
        height: 500,
        bottom: 0,
        left: 0,
        right: 0
     },
})