
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Card, Button, Icon, Avatar, Header, Divider} from 'react-native-elements';
import EventList from './eventlist'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    key:"CSE Barbeque",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "12:00-02:00pm"
                },
                {
                    key:"Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "02:00-04:00pm"
                },
                {
                    key:"MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "08:00-10:00pm"
                },
                {
                    key:"DogSoc We Dogs",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "12:00-02:00pm"
                },
                {
                    key:"Tea and Coffee @ Colombo",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "02:00-04:00pm"
                },
                {
                    key:"Hackathon",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "08:00-10:00pm"
                },
            ]
        };
    }
    render() {
        return (
            <View>
                <Header backgroundColor="#49DCB1"
                    centerComponent={{ text: 'Hey h@ck0Rz'}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <Text style={{fontSize:34, fontFamily: "Avenir", fontWeight:"600", marginLeft:20, marginTop:12}}>Events Near You</Text>
                <Divider style={{ backgroundColor: '#D3D3D3', width:'80%', height: 3, marginBottom: 10 }} />
                <EventList events={this.state.events}/>
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
