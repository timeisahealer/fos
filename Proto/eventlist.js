import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Card, Button, Icon, Avatar } from 'react-native-elements'

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
                    tag: ["food"]
                },
                {
                    key:"Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "02:00-04:00pm",
                    tag: ["social"]
                },
                {
                    key:"MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "08:00-10:00pm",
                    tag: ["social"]
                },
                {
                    key:"DogSoc We Dogs",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "12:00-02:00pm",
                    tag: ["outside"]
                },
                {
                    key:"Tea and Coffee @ Colombo",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "02:00-04:00pm",
                    tag: ["food"]
                },
                {
                    key:"Hackathon",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "08:00-10:00pm",
                    tag: ["social"]
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
                                    <Icon reverse color="#49BEAA" size={13} name='share' />
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
        fontFamily:"Avenir",
    },
    eventLocation: {
        color: "#5F6A6A", 
        fontFamily:"Avenir", 
        fontSize:12, 
        fontWeight:"500",
    },
    eventDatetime: {
        color: "#5F6A6A", 
        fontFamily:"Avenir", 
        fontSize:11,
    },
    pressed: {
        backgroundColor: 'steelblue',
    },
    notPressed: {
        backgroundColor: 'powderblue',
    },
});
