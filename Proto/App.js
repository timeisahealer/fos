import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { List, ListItems, Card, Button, Icon, Avatar, Header, Divider } from 'react-native-elements';
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
            token: '',
            name: "Welcome to Bored on Campus",
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
                    token: {token},
                    name: `Hi ${(await response.json()).name}!`
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
        // console.log(this.props.navigation)
        return (
            <View>
            <View>
                <Header backgroundColor="#49BEAA"
                        placement="left"
                        leftComponent={{ icon: 'home-account', onPress: this.logInFB.bind(this) }}
                        centerComponent={{text: this.state.name, width:500}}
                        rightComponent={{icon: 'home', color: '#fff'}}
                />
                <Text style={{fontSize: 34, fontWeight: "600", marginLeft: 20, marginTop: 12}}>Events
                    Near You</Text>
                <Divider style={{backgroundColor: '#D3D3D3', width: '80%', height: 3, marginBottom: 10}}/>
                <EventList/>
            </View>
            <View>
            <Text style={ styles.mainTitle }>Events Near You</Text>
            <Divider style={ styles.sectionDivider } />
            <EventList navigation={this.props.navigation}/>
            </View>
            </View>
            );
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
        headerMode: "none",
    },
);

const styles = StyleSheet.create({
    mainTitle: {
        fontSize:34,
//        fontFamily: "Avenir",
        fontWeight:"600", 
        marginLeft:20, 
        marginTop:12,
    },
    sectionDivider: {
        backgroundColor: '#D3D3D3', 
        width:'80%', 
        height: 3, 
        marginBottom: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
});