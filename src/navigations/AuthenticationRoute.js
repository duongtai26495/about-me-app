import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

import {Register, SignIn} from '../screens'
import NAVIGATION from '../constants/NAVIGATION';

const AuthenticationRoute = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.SIGNIN} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NAVIGATION.SIGNIN} component={SignIn} options={{animation:'slide_from_right'}} />
      <Stack.Screen name={NAVIGATION.REGISTER} component={Register} options={{animation:'slide_from_left'}} />
    </Stack.Navigator>
  )
}

export default AuthenticationRoute