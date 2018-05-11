
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Card, Button, Icon, Avatar, Header } from 'react-native-elements';
import EventList from './eventlist'

export default class App extends Component {


    onEndReached

    render() {
        return (
            <View>
                <Header backgroundColor="#49DCB1"
                    centerComponent={{ text: 'Hey h@ck0Rz'}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <EventList />
            </View>
        );
    }
}




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
