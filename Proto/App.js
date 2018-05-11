import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { List, ListItems, Card, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class Tag extends React.Component {
    render() {
        return <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title={this.props.name}/> ;
    }
}


class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    key: "CSE Barbeque",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "Not John Lions Garden",
                    date: "19-04-2018",
                    tag: ["food"]
                },
                {
                    key: "Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    tag: ["social"]
                },
                {
                    key: "MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    tag: ["outside"]
                }
            ],

            food: false,
            social: false,
            outside: false,
            allTags: ["food", "social", "outside"]
        }
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
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0},this.state[this.state.allTags[i]] ? styles.pressed : styles.notPressed}
                    title='VIEW NOW'
                    title={currTag}/>
            )
        }


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{flexDirection: 'row', margin: 10}}>
                    {tagMarkup}
                </View>
            <FlatList
                data={data}
                renderItem= { ({item}) =>
                    <Card title={item.key}>
                        <Text>
                            {item.description}
                        </Text>
                        <Button
                            onPress={() => this.props.navigation.push("Details", {
                                event: item,
                            })}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>

                }
            />
            </View>
        );
    }
    // render() {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         </View>
    //     );
    // }
}

class EventDetail extends React.Component {
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

const RootStack = createStackNavigator(
    {
        Home: EventList,
        Details: EventDetail,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}


const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
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