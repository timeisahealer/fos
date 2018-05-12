import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { List, ListItems, Card, Button, Icon, Avatar, Header, Divider } from 'react-native-elements';
import EventList from './eventlist';
import EventDetail from './eventdetail';
import Geolocation from './geolocation';
// import FacebookApiRetrieval from './apireading';
import ViewMap from './viewmap';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

const eventInfo = {
    events: [
                {
                    key:"CSE Barbe",
                    description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                    location: "John Lions Garden",
                    date: "19-04-2018",
                    time: "12:00-02:00pm",
                    tag: ["food"],
                    latlng: {
                        latitude: -33.8701062,
                        longitude: 151.2076937,
                    },
                    cheers: 0
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
                    cheers: 0
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
                    cheers: 0
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
                    cheers: 0
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
                  cheers: 0
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
                    cheers: 0
                },
            ],
            food: false,
            social: false,
            outside: false,
            allTags: ["food", "social", "outside"]
 }

export {eventInfo};

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

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
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

const SettingsStack = createStackNavigator({
  Home: ViewMap ,
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
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