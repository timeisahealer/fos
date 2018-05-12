import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
// import {GraphRequest, GraphRequestManager} from "react-native-fbsdk";
import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class FacebookApiRetrieval extends React.Component {
    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    alert('Login success with permissions: '
                        +result.grantedPermissions.toString());
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._fbAuth}>
                    <Text>Login with Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
//     constructor(props) {
//         super(props);
//         const FBSDK = require('react-native-fbsdk');
//         const {
//             GraphRequest,
//             GraphRequestManager,
//         } = FBSDK;
//
// // ...
//
// //Create response callback.
//         _responseInfoCallback(error: ?Object, result: ?Object) {
//             if (error) {
//                 alert('Error fetching data: ' + error.toString());
//             } else {
//                 alert('Success fetching data: ' + result.toString());
//             }
//         }
//
// // Create a graph request asking for user information with a callback to handle the response.
//         const infoRequest = new GraphRequest(
//             '/me',
//             null,
//             this._responseInfoCallback,
//         );
// // Start the graph request.
//         new GraphRequestManager().addRequest(infoRequest).start();
//     }
//
//     _responseInfoCallback(error: ?Object, result: ?Object) {
//         if (error) {
//             alert('Error fetching data: ' + error.toString());
//         } else {
//             alert('Success fetching data: ' + result.toString());
//         }
//     }
//
//
//     // FBSDK.api(
//     //     "/{event-id}",
//     //     function (response) {
//     //         if (response && !response.error) {
//     //             console.log("success!");
//     //             console.log(response);
//     //         }
//     //     }
//     // );
//     render() {
//         FBSDK.api();
//         return <Text> success </Text>;
//     }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('FacebookLoginTutorial', () => FacebookLoginTutorial);