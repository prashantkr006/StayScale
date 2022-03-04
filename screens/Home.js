import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation, route}) => {
    const user = route.params.user;
  return (
    <View style={styles.Container}>
        <Text style={styles.greetText}>
            Welcome,{'\n'}<Text style = {styles.user}>{user}!</Text> 
        </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
    },
    greetText: {
        fontSize: 60,
        fontFamily: 'OpenSans-SemiCondensed-Regular',
        color: '#000',
        textAlign: 'center'
    },
    user: {
        color: '#AE2A40'
    }
})