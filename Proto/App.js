import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { List, ListItems, Card, Button,Icon, Avatar, Header, Divider } from 'react-native-elements';
import EventList from './eventlist';
import EventDetail from './eventdetail';
import Geolocation from './geolocation';
import ViewMap from './viewmap';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
class DisplayEventList extends React.Component {
    render() {
        console.log(this.props.navigation)
        return (
        <View>
        <Header backgroundColor="#49BEAA"
        centerComponent={{ text: 'Hey h@ck0Rz'}}
        rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Text style={ styles.mainTitle }>Events Near You</Text>
        <Divider style={ styles.sectionDivider } />
        <EventList navigation={this.props.navigation}/>
        </View> );
    }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
    {
        Home: EventList,
        Details: EventDetail,
        Display: DisplayEventList,
    },
    {
        initialRouteName: 'Display',
    }
);

const SettingsStack = createStackNavigator({
  Home: ViewMap,
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);
const styles = StyleSheet.create({
    mainTitle: {
        fontSize:34,
//        fontFamily: "Avenir",
        fontWeight:"600",
        marginLeft:20,
        marginTop:12,
    },
    sectionDivider: {
        backgroundColor: '#D3D3D3',
        width:'80%',
        height: 3,
        marginBottom: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
});