import React from "react";

export default class EventDetail extends React.Component {
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
                <View style={{width: '100%', height: '70%', backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
                    <Text> {event.description} </Text>
                </View>
            </View>
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Details Screen {event.description}</Text>
            //
            // </View>
        );
    }
}