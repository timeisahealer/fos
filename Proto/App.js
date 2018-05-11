import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import { List, ListItems, Card, Button,Icon, Avatar, Header, Divider } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EventList from './eventlist';
import EventDetail from './eventdetail';
import Geolocation from './geolocation';

class DisplayEventList extends React.Component {
    render() {
        return (
        <View>
        <Header backgroundColor="#49DCB1"
        centerComponent={{ text: 'Hey h@ck0Rz'}}
        rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Text style={{fontSize:34, fontFamily: "normal", fontWeight:"600", marginLeft:20, marginTop:12}}>Events Near You</Text>
        <Divider style={{ backgroundColor: '#D3D3D3', width:'80%', height: 3, marginBottom: 10 }} />
        <EventList/>
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
        initialRouteName: 'Home',
    }
);

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
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    pressed: {
        backgroundColor: 'steelblue',
    },
    notPressed: {
        backgroundColor: 'powderblue',
    },

});


/*
<Card style={styles.cardContainer}>
        <View style={styles.boxleft}>
            // society logo
            <Avatar
                size="large"
                rounded
                title="TEST"
                onPress={() => console.log("Works bitch!")}
                activeOpacity={0.7} />
            // background imaging

            // date
            // time
        </View>
        <View style={[styles.boxright]}>
            // Title
            // location
            // society name
            // get direction button
            // share button
    </View>
    {
    //<Text>
    //    {item.description}
    //</Text>
    /*
    <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
    */
