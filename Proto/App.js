import React from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { List, ListItems, Card, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class EventList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    key:"CSE Barbeque",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "Not John Lions Garden",
                    date: "19-04-2018",
                    tag: ["food", "social"]
                },
                {
                    key:"Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    tag: ["food", "social"]
                },
                {
                    key:"MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    tag: ["food"]
                }
            ],
        };
    }

    filterTag(array, tag) {
        var data = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            if (item.tag.includes(tag)) {
                data.push(item);
            }
        }
        console.log(data.length)
        return data;
    }
    render() {

        var data = this.filterTag(this.state.events, "social");

        return (
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
});