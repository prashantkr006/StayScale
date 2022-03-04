import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUp' >
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
