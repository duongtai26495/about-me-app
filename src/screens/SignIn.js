import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Animated, StatusBar, SafeAreaView, ColorPropType } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import color from '../assets/colors/color'
import authen_styles from '../assets/styles.js/authen_styles'
import ICONS from '../constants/ICONS'
import NAVIGATION from '../constants/NAVIGATION'
import STRING from '../constants/STRING'
import {SignInWithUsernamePassword, CheckTokenIsExist} from '../core/api/functions'
import { StackActions } from '@react-navigation/native'
const SignIn = ({navigation, route}) => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const passwordRef = useRef()

  const SubmitForm = async () =>{
    let User = {
      username:username,
      password:password
    }
    await SignInWithUsernamePassword(User);
    let result = await CheckTokenIsExist()
    result ? navigation.dispatch(StackActions.replace(NAVIGATION.MAINTAB)) : null;
  }

  const goToRegister = () =>{
    navigation.dispatch(StackActions.replace(NAVIGATION.REGISTER))
  }

  return (
    <SafeAreaView style={authen_styles.container}>
    <StatusBar barStyle='light-content' backgroundColor={color.DARK} />
        <View style={authen_styles.authen_view}>
        <Animated.View>
          <Image source={ICONS.LOGO} style={authen_styles.logo} />
        </Animated.View>
        <Animated.View style={authen_styles.authen_form}>
          <View style={authen_styles.form}>
            <Image source={ICONS.USERNAME} style={authen_styles.icon_form} />
            <TextInput 
            onSubmitEditing={()=>passwordRef.current.focus()}
            onChangeText={(value)=>setUsername(value)}
            style={authen_styles.input_form}
              placeholderTextColor={color.WHITE}
              autoCapitalize='none'
              placeholder={STRING.USERNAME}
            />
          </View>
          <View style={authen_styles.form}>
            <Image source={ICONS.PASSWORD} style={authen_styles.icon_form} />
            <TextInput 
            ref={passwordRef}
            secureTextEntry
            onChangeText={(value)=>setPassword(value)}
            style={authen_styles.input_form}
              placeholderTextColor={color.WHITE}
              autoCapitalize='none'
              placeholder={STRING.PASSWORD}
            />
          </View>
          <Animated.View>
            <TouchableOpacity 
            onPress={()=>SubmitForm()}
            style={authen_styles.authen_button}>
              <Text style={authen_styles.label_button}>{STRING.GO}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View>
            <TouchableOpacity 
            onPress={()=>goToRegister()}
            style={[authen_styles.authen_button,{backgroundColor:color.DARK,borderColor:color.WHITE, borderWidth:1}]}>
              <Text style={authen_styles.label_button}>{STRING.CREATE_ACCOUNT}</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        </View>
    </SafeAreaView>
  )
}

export default SignIn