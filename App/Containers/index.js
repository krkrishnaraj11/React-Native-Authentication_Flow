import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import styles from './style';
import {isLoggedIn} from '../Api/auth'
import {getRootNavigator} from './Navigators/index'
export default class App extends Component{
    constructor(props){
        super(props);


        this.state = {
            loading: true,
            loggedIn: false
        };
    }

    async componentDidMount() {
        const loggedIn = await isLoggedIn();
        this.setState({loggedIn, loading: false});
    }

    render(){
        if(this.state.loading){
            return(
                <View style={styles.base}>
                    <ActivityIndicator size= 'large' />
                </View>
            )
        }

        const RootNavigator = getRootNavigator(this.state.loggedIn);
        return <RootNavigator />
    }
}