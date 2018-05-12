import React, { Component } from 'react';
import { Linking, Platform, StyleSheet, Text, View, FlatList, ScrollView, TouchableHighlight, TouchableOpacity, Share } from 'react-native';
import { Card, Button, Icon, Avatar } from 'react-native-elements'
import RootStack from './App'
export default class EventList extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    key:"CSE Barbeque",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "12:00-02:00pm",
                    tag: ["food"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                },
                {
                    key:"Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "02:00-04:00pm",
                    tag: ["social"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                },
                {
                    key:"MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "08:00-10:00pm",
                    tag: ["social"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                },
                {
                    key:"DogSoc We Dogs",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "12:00-02:00pm",
                    tag: ["outside"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                },
                {
                    key:"Tea and Coffee @ Colombo",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "02:00-04:00pm",
                    tag: ["food"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                },
                {
                    key:"Hackathon",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "08:00-10:00pm",
                    tag: ["social"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                },
            ],
            food: false,
            social: false,
            outside: false,
            allTags: ["food", "social", "outside"]
        };
    }

    toggleTag(tag) {
        console.log("TAG IS:");
        console.log(tag);
        if (tag == 'food') {
            this.setState({
                food: !this.state.food
            });
        } else if (tag == 'social') {
            this.setState({
                social: !this.state.social
            });
        } else if (tag == 'outside') {
            this.setState({
                outside: !this.state.outside
            });
        }
        console.log(this.state.food);
        console.log(this.state.social);
        console.log(this.state.outside);
    }

    filterAllTags(array) {
        var array = this.state.events;
        if (this.state.food == true) {
            array = this.filterTag(array, "food");
        }
        // console.log("size");
        // console.log(array.length);
        if (this.state.social == true) {
            array = this.filterTag(array, "social");
        }
        // console.log("size");
        // console.log(array.length);
        if (this.state.outside == true) {
            array = this.filterTag(array, "outside");
        }
        // console.log("size");
        // console.log(array.length);
        return array;
    }

    filterTag(array, tag) {
        console.log(tag);
        var data = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            if (item.tag.includes(tag)) {
                data.push(item);
            }
        }
        // console.log(tag);
        return data;

    }

    mapsRedirection(latlng){

//        const url = 'http://maps.apple.com/?daddr=' + latlng.latitude + ',' + latlng.longitude;
//        Linking.openURL(url);
        const url = "https://www.google.com/maps/dir/?api=1&destination=" + latlng.latitude + ',' + latlng.longitude;

        Linking.openURL(url);
    }

    shareMessage(event) {
        msg = "You know where it's at! Come to " + event.key + " at " + event.location + " on " + event.date + " " + event.time + "! You're the only friend I have :'( ...";
        Share.share({
            message: msg,
            url: undefined,
            title: 'SOS: Lonely Person Needs Friends!'
        }, 
        {
            // Android only:
            dialogTitle: 'SOS: Lonely Person Needs Friends!',
            // iOS only:
            excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    render() {
        console.log("rerendered");
        var data = this.filterAllTags(this.state.events);

        var tagMarkup = [];

        for(let i = 0; i < this.state.allTags.length; i++){
            var currTag = this.state.allTags[i];
            console.log('<<<');
            console.log(this.state[this.state.allTags[i]]);
            console.log(this.state.allTags[i]);
            // console.log(currTag);
            tagMarkup.push(
                <Button
                    key={currTag}
                    onPress={() => this.toggleTag(this.state.allTags[i])}
                    // style={}
                    buttonStyle={styles.filterButton,this.state[this.state.allTags[i]] ? styles.pressed : styles.notPressed}
                    title='VIEW NOW'
                    title={currTag}/>
            )
        }

        return (
            <View>
                <View style={ styles.filterTagRow }>
                    {tagMarkup}
                </View>
                <FlatList
                    data={data}
                    renderItem= { ({item}) =>
                        <TouchableOpacity onPress={() => this.props.navigation.push("Details", { event: item, })}>
                        <Card>
                            <View style={ styles.actionRow }>
                                <View>
                                    <Avatar
                                        size="xlarge"
                                        rounded
                                        title="test"
                                        onPress={() => console.log("Works bitch!")}
                                        activeOpacity={0.7} />
                                </View>
                                <View style={ styles.actionButtons }>
                                    <Icon reverse color="#49BEAA" size={13} name='near-me' />
                                    <Icon reverse color="#49BEAA" size={13} name='share' onPress={() => this.shareMessage(item)} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.eventTitle}>
                                    {item.key}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.eventLocation}>
                                    {item.location}
                                </Text>
                                <Text style={styles.eventDatetime}>
                                    {item.date + "        " + item.time}
                                </Text>
                            </View>
                        </Card>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    filterButton: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    filterTagRow: {
        flexDirection: 'row',
        margin: 10,
    },
    actionRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10,
    },
    actionButtons: {
        flexDirection:"row",
    },
    eventTitle: {
        fontSize:20,
        fontWeight:"bold",
        //fontFamily:"Avenir",
    },
    eventLocation: {
        color: "#5F6A6A",
        //fontFamily:"Avenir",
        fontSize:12,
        fontWeight:"500",
    },
    eventDatetime: {
        color: "#5F6A6A",
        //fontFamily:"Avenir",
        fontSize:11,
    },
    pressed: {
        backgroundColor: 'steelblue',
    },
    notPressed: {
        backgroundColor: 'powderblue',
    },
});
