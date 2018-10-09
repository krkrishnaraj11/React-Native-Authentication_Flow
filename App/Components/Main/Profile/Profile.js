import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import styles from './ProfileStyles'
import { logout } from '../../../Api/auth'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLogout() {
    await logout();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.base}>
        <Button
         title='Logout'
         onPress={this.onLogout} />
      </View>
    );
  }
}

