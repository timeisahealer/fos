import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { List, ListItems, Card, Button, Icon, Avatar, Header, Divider } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EventList from './eventlist';
import EventDetail from './eventdetail';
import Geolocation from './geolocation';

class DisplayEventList extends React.Component {
    render() {
        // console.log(this.props.navigation)
        return (
        <View>
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        backgroundColor="#49BEAA"
        centerComponent={{ text: 'Hey h@ck0Rz'}}
        rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Text style={ styles.mainTitle }>Events Near You</Text>
        <Divider style={ styles.sectionDivider } />
        <EventList navigation={this.props.navigation}/>
        </View> );
    }
}
export default class App extends React.Component {
    render() {
        return  (<RootStack />
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: EventList,
        Details: EventDetail,
        Display: DisplayEventList,
    },
    {
        initialRouteName: 'Display',
        headerMode: "none",
    },
);

const styles = StyleSheet.create({
    mainTitle: {
        fontSize:34, 
        // fontFamily: "Avenir", 
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
    map: {
        width: '100%',
        height: 500,
        bottom: 0,
        left: 0,
        right: 0
     },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
});