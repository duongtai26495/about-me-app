import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenticationRoute from './AuthenticationRoute'
import MainTab from './MainTab'
import NAVIGATION from '../constants/NAVIGATION'

const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.MAINTAB} screenOptions={{headerShown:false}}r>
        <Stack.Screen name={NAVIGATION.MAINTAB} component={MainTab} />
        <Stack.Screen name={NAVIGATION.AUTHENTICATIONROUTE} component={AuthenticationRoute} />
    </Stack.Navigator>
  )
}

export default MainStack