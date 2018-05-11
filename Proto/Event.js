import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            eventsName: "name",
            society: "name",
            time: new Date(),
            locationx: 50,
            locationy: 50,
        };

    }
    render() {
        return (
            <Text>
                event name: {this.state.eventsName} {'\n'}
                society: {this.state.society} {'\n'}
                time: {this.state.time.toDateString()} {'\n'}
                location x: {this.state.locationx} {'\n'}
                location y: {this.state.locationy} {'\n'}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

module.exports = Event;
