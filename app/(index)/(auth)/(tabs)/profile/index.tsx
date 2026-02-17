import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileTab = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    >
      <Text>Profile</Text>
    </ScrollView>
  )
}

export default ProfileTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})