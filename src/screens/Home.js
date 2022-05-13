import { View, Text } from 'react-native'
import React,{useEffect, useState, useRef} from 'react'
import {CheckTokenIsExist} from '../core/api/functions'
import { StackActions } from '@react-navigation/native'
import NAVIGATION from '../constants/NAVIGATION'
const Home = ({navigation, route}) => {

  useEffect(()=>{
    checkLogin()
  },[])

const checkLogin = async () =>{
  const isLogin = await CheckTokenIsExist();
  isLogin ? null : navigation.dispatch(StackActions.replace(NAVIGATION.AUTHENTICATIONROUTE));
}

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home