import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './DashboardStyles'
export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>{'This is the logged in side'}</Text>
      </View>
    );
  }
}

