
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItems, Card, Button } from 'react-native-elements'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <List>
                <FlatList
                    data={ this.state.data }
                    renderItem={ ({ item }) => (

                        

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
