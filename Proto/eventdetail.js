import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import Geolocation from "./geolocation"

export default class EventDetail extends Component {
    render() {
        const { navigation } = this.props;
        const event = navigation.getParam('event', 'null');
        console.log(event)
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
                <Geolocation event={event} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 30,
    },
});
