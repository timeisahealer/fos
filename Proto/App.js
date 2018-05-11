import React from 'react';
import { View, Text, FlatList} from 'react-native';
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
                    location: "John Lions Garden",
                    date: "19-04-2018"
                },
                {
                    key:"Phil' Concert",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018"
                },
                {
                    key:"MedRevue",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018"
                }
            ]
        };
    }
    render() {
        return (
            /*
            <View style = {styles.container}>
                <FlatList
                  data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                  ]}
                  renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
            */
            <FlatList
                data={ this.state.events }
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
    //             <Text>Home Screen</Text>
    //         </View>
    //     );
    // }
}

class EventDetail extends React.Component {
    render() {
        const { navigation } = this.props;
        const event = navigation.getParam('event', 'null');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Details Screen {event.description}</Text>

            </View>
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
