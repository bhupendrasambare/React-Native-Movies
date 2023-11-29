import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import { LogBox } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import Movies from '../screens/Movies';
import Person from '../screens/Person';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
])

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
        <Stack.Screen name="Movie" options={{headerShown: false}} component={Movies}/>
        <Stack.Screen name="Person" options={{headerShown: false}} component={Person}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}