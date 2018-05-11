
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItems, Card, Button } from 'react-native-elements'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    title:"CSE Barbeque",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    // location: "John Lions Garden",
                    // date: "19-04-2018"
                }
            ]
        };
    }

    render() {
        return (
            <List>
                <FlatList
                    data={ this.state.events }
                    renderItem={ ({ event }) => return (

                            <Card title={event.title}>
                                <Text style={{marginBottom: 10}}>
                                    {event.description}
                                </Text>
                                <Button
                                icon={{name: 'code'}}
                                backgroundColor='#03A9F4'
                                fontFamily='Lato'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='VIEW NOW' />
                            </Card>
                        )
                    }
                />
            </List>
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
