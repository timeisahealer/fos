import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import {eventInfo} from './App.js';

export default class Geolocation extends Component {
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
    console.log("sjadfklsadjfklsdajfklsdajlkfjasdklfjd  \n\n\n\n" + eventInfo.events);

    	var data = [];

    	for(let i = 1; i < eventInfo.events.length; i++){

    		data.push(
                        <Marker key={eventInfo.events[i].key} coordinate={eventInfo.events[i].latlng}/>

    		)
    	}
    return (
    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <MapView style={{ width: '100%',height: '100%' }}
                  region={ this.state.region }
                  onRegionChange={ region => this.setState({region}) }
                  onRegionChangeComplete={ region => this.setState({region}) }
                  >
                {data}






                  </MapView>

            </View>

//              {console.log(this.props)}
//            <Marker
//              coordinate={this.props.event.latlng}
////              {{
////                latitude: -33.8701062,
////                longitude: 151.2076937,
////              }}
//            />
//            </MapView>

//        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
    );
  }
}
