
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Card, Button, Icon, Avatar } from 'react-native-elements'

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

    onEndReached

    render() {
        return (
            <FlatList
                data={ this.state.events }
                renderItem= { ({item}) =>
                    <Card>
                        <View style={styles.iconRow}>
                        <Avatar
                            size="large"
                            rounded
                            title="TEST"
                            onPress={() => console.log("Works bitch!")}
                            activeOpacity={0.7} />
                        </View>
                        <View style={styles.eventTitle}>
                            <Text style={{fontSize:20, fontWeight:"bold", fontFamily:"Avenir"}}>
                                {item.key}
                            </Text>
                        </View>
                        <View style={styles.eventDetails}>
                            <Text style={{color: "#5F6A6A", fontFamily:"Avenir", fontSize:12, fontWeight:"500"}}>
                                {item.location}
                            </Text>
                            <Text style={{color: "#5F6A6A", fontFamily:"Avenir", fontSize:11,}}>
                                {item.date + "        " + item.time}
                            </Text>
                        </View>
                    </Card>
                }
            />
        );
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row'
    },
    boxleft: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    boxright: {
        flex: 2.5,
        backgroundColor: '#FFFFFF'
    }
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
