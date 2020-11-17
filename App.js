import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)


