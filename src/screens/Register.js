import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Animated, StatusBar, SafeAreaView, ColorPropType } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import color from '../assets/colors/color'
import authen_styles from '../assets/styles.js/authen_styles'
import ICONS from '../constants/ICONS'
import NAVIGATION from '../constants/NAVIGATION'
import STRING from '../constants/STRING'
import { RegisterNewUser, CheckTokenIsExist } from '../core/api/functions'
import { StackActions } from '@react-navigation/native'
const Register = ({ navigation, route }) => {


  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const emailRef = useRef()
  const phoneRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const SubmitForm = async () => {
    let User = {
      fullname: fullname,
      email: email,
      phone:phone,
      username: username,
      password: password
    }

    let result = await RegisterNewUser(User);
    if (result) {
      navigation.dispatch(StackActions.replace(NAVIGATION.SIGNIN))
    } else {
      console.log("Register failure")
    }

  }

  const goToLogin = () => {
    navigation.dispatch(StackActions.replace(NAVIGATION.SIGNIN))
  }

  return (
    <SafeAreaView style={authen_styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={color.DARK} />
      <ScrollView style={authen_styles.scrollView}>
        <Animated.View>
          <Image source={ICONS.LOGO} style={[authen_styles.logo, { marginTop: 100 }]} />
        </Animated.View>

        <Animated.View style={authen_styles.authen_form}>
          <View style={authen_styles.form}>
            <Image source={ICONS.FULLNAME} style={authen_styles.icon_form} />
            <TextInput
              onSubmitEditing={() => phoneRef.current.focus()}
              onChangeText={(value) => setFullname(value)}
              style={authen_styles.input_form}
              placeholderTextColor={color.WHITE}
              autoCapitalize='words'
              placeholder={STRING.FULL_NAME}
            />
          </View>
          <View style={authen_styles.form}>
            <Image source={ICONS.TELEPHONE} style={authen_styles.icon_form} />
            <TextInput
              ref={phoneRef}
              keyboardType='number-pad'
              returnKeyType='next'
              onSubmitEditing={() => emailRef.current.focus()}
              onChangeText={(value) => setPhone(value)}
              style={authen_styles.input_form}
              placeholderTextColor={color.WHITE}
              autoCapitalize='none'
              placeholder={STRING.PHONE}
            />
          </View>
          <View style={authen_styles.form}>
            <Image source={ICONS.EMAIL} style={authen_styles.icon_form} />
            <TextInput
              ref={emailRef}
              keyboardType='email-address'
              onSubmitEditing={() => usernameRef.current.focus()}
              onChangeText={(value) => setEmail(value)}
              style={authen_styles.input_form}
              placeholderTextColor={color.WHITE}
              autoCapitalize='none'
              placeholder={STRING.EMAIL}
            />
          </View>
          <View style={authen_styles.form}>
            <Image source={ICONS.USERNAME} style={authen_styles.icon_form} />
            <TextInput
              ref={usernameRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              onChangeText={(value) => setUsername(value)}
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
              onChangeText={(value) => setPassword(value)}
              style={authen_styles.input_form}
              placeholderTextColor={color.WHITE}
              autoCapitalize='none'
              placeholder={STRING.PASSWORD}
            />
          </View>
          <Animated.View>
            <TouchableOpacity
              onPress={() => SubmitForm()}
              style={authen_styles.authen_button}>
              <Text style={authen_styles.label_button}>{STRING.CREATE_ACCOUNT}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View>
            <TouchableOpacity
              onPress={() => goToLogin()}
              style={[authen_styles.authen_button, { backgroundColor: color.DARK, borderColor: color.WHITE, borderWidth: 1 }]}>
              <Text style={authen_styles.label_button}>{STRING.LOGIN}</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Register