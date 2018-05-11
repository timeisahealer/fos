
import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { List, ListItems, Card, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

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
            <Text></Text>
            <MapView style={styles.map}
                    showsUserLocation={ true }
                    region={ this.state.region }
                    onRegionChange={ region => this.setState({region}) }
                    onRegionChangeComplete={ region => this.setState({region}) }
            >
            <Marker
              coordinate={this.props.event.latlng}
//              {{
//                latitude: -33.8701062,
//                longitude: 151.2076937,
//              }}
            />
            </MapView>

        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

class EventList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    key:"CSE Barbeque",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    }
                },
                {
                    key:"Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                  latlng: {
                      latitude: -33.8701062,
                      longitude: 151.2076937,
                  }
                },
                {
                    key:"MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                      latlng: {
                          latitude: -33.8701062,
                          longitude: 151.2076937,
                      }
                }
            ]
        };
    }
    render() {
        return (
            /*
            <View style = {styles.container}>
                <FlatList
                  data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                  ]}
                  renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
            */
            <FlatList
                data={ this.state.events }
                renderItem= { ({item}) =>
                    <Card title={item.key}>
                        <Text>
                            {item.description}
                        </Text>
                        <Button
                            onPress={() => this.props.navigation.push("Details", {
                                event: item,
                            })}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>

                }
            />
        );
    }
    // render() {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Text>Home Screen</Text>
    //         </View>
    //     );
    // }
}

class EventDetail extends React.Component {
    render() {
        const { navigation } = this.props;
        const event = navigation.getParam('event', 'null');
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: '100%', height: '20%', backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.heading}> {event.key} </Text>
                </View>
                <View style={{width: '100%', height: '10%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                    <Text> {event.date} </Text>
                </View>
                <View style={{width: '100%', height: '10%', backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
                     <Text> {event.description} </Text>
                </View>
                <GeolocationExample event={event} />
            </View>
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Details Screen {event.description}</Text>
            //
            // </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: EventList,
        Details: EventDetail,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}


const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    map: {
        width: '100%',
        height: 500,
        bottom: 0,
        left: 0,
        right: 0
     },
});
