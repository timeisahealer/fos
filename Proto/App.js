import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import { List, ListItems, Card, Button,Icon, Avatar, Header, Divider } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EventList from './eventlist';
import EventDetail from './eventdetail';
import Geolocation from './geolocation';
// import FacebookApiRetrieval from './apireading';


class DisplayEventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'Test@test.com',
            password: '123456',
            error: '',
            loading: false,
            token: ''
        };
    }

    async logInFB() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1909001722724225', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                this.setState({
                    token: {token}
                });
                // const responseInfoCallback = (error, result) => {
                //     if (error) {
                //         console.log(error)
                //         alert('Error fetching data: ' + error.toString());
                //     } else {
                //         console.log(result)
                //         alert('Success fetching data: ' + result.toString());
                //     }
                // };
                //
                // const infoRequest = new GraphRequest(
                //     '/me',
                //     {
                //         accessToken: {token},
                //         parameters: {
                //             fields: {
                //                 string: 'email,name,first_name,middle_name,last_name'
                //             }
                //         }
                //     },
                //     responseInfoCallback
                // );

                // Start the graph request.
                // new GraphRequestManager().addRequest(infoRequest).start();

        // })
                console.log(this.state.token)
        }
    }


    render() {
        return (
            <View>
                <Header backgroundColor="#49BEAA"
                        centerComponent={{text: 'Hey h@ck0Rz'}}
                        rightComponent={{icon: 'home', color: '#fff'}}
                />
                <Button onPress={this.logInFB.bind(this)} title='FB Sign in'/>
                <Text style={{fontSize: 34, fontFamily: "Helvetica", fontWeight: "600", marginLeft: 20, marginTop: 12}}>Events
                    Near You</Text>
                <Divider style={{backgroundColor: '#D3D3D3', width: '80%', height: 3, marginBottom: 10}}/>
                <EventList/>
            </View>);
    }
}
export default class App extends React.Component {
    render() {
        return  (<RootStack />
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: EventList,
        Details: EventDetail,
        Display: DisplayEventList,
        // FBApi: FacebookApiRetrieval,
    },
    {
        initialRouteName: 'Display',
    }
);

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    map: {
        width: '100%',
        height: 500,
        bottom: 0,
        left: 0,
        right: 0
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
