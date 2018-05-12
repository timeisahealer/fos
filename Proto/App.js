import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList,ScrollView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { List, ListItems, Card, Button,Icon, Avatar, Header, Divider } from 'react-native-elements';
import EventList from './eventlist';
import EventDetail from './eventdetail';
import Geolocation from './geolocation';
import ViewMap from './viewmap';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';


 const eventInfo = {
    events: [

                   {
                       key:"CSE Barbeque",
                       description: "Weekly Barbeque with the nice CSE Peeps YEAYAH",
                       location: "John Lions Garden",
                       date: "19-04-2018",
                       time: "12:00-02:00pm",
                       tag: ["food"],
                       latlng: {
                           latitude: -33.2301062,
                           longitude: 151.3074937,
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
                           latitude: -33.2001062,
                           longitude: 151.8096937,
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
                           latitude: -33.566776,
                           longitude: 151.907811,
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
                           latitude: -33.873526,
                           longitude: 151.504914,
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
                           latitude: -33.8401062,
                           longitude: 151.2036937,
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
                           latitude: -33.8708062,
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


    render() {
        console.log(this.props.navigation)
        return (
        <View>
        <Header backgroundColor="#49BEAA"
        centerComponent={{ text: 'Hey h@ck0Rz'}}
        rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Text style={ styles.mainTitle }>Events Near You</Text>
        <Divider style={ styles.sectionDivider } />
        <EventList eventInfo={eventInfo} navigation={this.props.navigation}/>
        </View> );
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
    },
    {
        initialRouteName: 'Display',
    }
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