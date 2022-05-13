import { View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Home, Profile } from '../screens'
import NAVIGATION from '../constants/NAVIGATION'
import color from '../assets/colors/color'
import ICONS from '../constants/ICONS'
const Tab = createMaterialBottomTabNavigator()
const iconSize = 25;
const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.HOME}
      shifting={true}
      activeColor={color.PRIMARY}
      inactiveColor={color.WHITE}
      barStyle={{ backgroundColor: color.WHITE, borderTopColor: color.PRIMARY, borderTopWidth: 0.5, }}
      options={{
        headerShown: false,
        presentation: true,
      }}>
      <Tab.Screen
        name={NAVIGATION.HOME}
        component={Home}
        options={{
          headerShown: false,
          animation: true,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={ICONS.HOME}
                resizeMode='contain'
                style={{
                  width: iconSize,
                  height: iconSize,
                  tintColor: focused ? color.PRIMARY : color.SMOKE
                }}
              />
            </View>
          )
        }} />
         <Tab.Screen
        name={NAVIGATION.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          animation: true,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={ICONS.PROFILE}
                resizeMode='contain'
                style={{
                  width: iconSize,
                  height: iconSize,
                  tintColor: focused ? color.PRIMARY : color.SMOKE
                }}
              />
            </View>
          )
        }} />
    </Tab.Navigator>

  )
}

export default MainTab