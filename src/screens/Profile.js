import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Animated, Image, RefreshControl } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import color from '../assets/colors/color'
import STRING from '../constants/STRING'
import { SignOut, CheckTokenIsExist, GetUserData } from '../core/api/functions'
import { StackActions } from '@react-navigation/native'
import NAVIGATION from '../constants/NAVIGATION'
import profile_styles from '../assets/styles.js/profile_styles'
import IMAGES from '../constants/IMAGES'
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGE from '../constants/STORAGE'
import ICONS from '../constants/ICONS'
import API from '../constants/API'
const Profile = ({ navigation, route }) => {

  useEffect(() => {
    ShowInfo()
  }, [])

  const [avatar, setAvatar] = useState()
  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [description, setDescription] = useState()
  const [username, setUsername] = useState()

  const [isLoading, setLoading] = useState(false)
  const [isFetching, setFetching] = useState(false)

  const ShowDesc = () => {
    return (
      <View
        style={[
          profile_styles.desc_view,
          profile_styles.shadow_box,
          profile_styles.background_white]}>
        <Text style={[profile_styles.dark_text, { fontStyle: 'italic' }]}>
          {description != null ? (description) : STRING.NOTUPDATE}
        </Text>
      </View>
    )
  }

  const Logout = async () => {
    await SignOut()
    const isLogin = await CheckTokenIsExist();
    isLogin ? null : navigation.dispatch(StackActions.replace(NAVIGATION.AUTHENTICATIONROUTE));
  }

  const ShowInfo = async () => {
    setAvatar(await AsyncStorage.getItem(STORAGE.AVATAR_STORAGE))
    setFullname(await AsyncStorage.getItem(STORAGE.FULLNAME_STORAGE))
    setEmail(await AsyncStorage.getItem(STORAGE.EMAIL_STORAGE))
    setPhone(await AsyncStorage.getItem(STORAGE.PHONE_STORAGE))
    setDescription(await AsyncStorage.getItem(STORAGE.DESC_STORAGE))
    setUsername(await AsyncStorage.getItem(STORAGE.USERNAME_STORAGE))
  }

  const fetchData = () => {
    setFetching(true)
    GetUserData(username)
    ShowInfo()
    .then(()=>{
      setFetching(false)
    })
    .finally(()=>{
      setFetching(false)
    })
  }

  return (
    <SafeAreaView style={profile_styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={color.DARK} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={fetchData} />
        }>
        <Animated.View style={profile_styles.info_view}>
          <View style={profile_styles.avatar_view}>
            <Image source={avatar != undefined ? { uri: API.BASE_URL + API.AVATAR + avatar } : IMAGES.PROFILE_DEFAULT} style={profile_styles.avatar} />
          </View>
          <View style={profile_styles.name_view}>
            <Text 
            style={[
              profile_styles.full_name, 
              profile_styles.dark_text]}>{fullname != null ? fullname : "Full Name"}</Text>
            <Text style={[profile_styles.sub_name, profile_styles.dark_text]}>{email != null ? email : STRING.NOTUPDATE}</Text>
          </View>
        </Animated.View>
        {ShowDesc()}
        <Animated.View style={[profile_styles.other_info_view]}>
          <TouchableOpacity
            style={[
              profile_styles.button_info,
              profile_styles.background_primary,
              profile_styles.shadow_box]}>
            <Image source={ICONS.PHONE} style={[profile_styles.icon]} />
            <Text
              style={[profile_styles.button_label, profile_styles.white_text, profile_styles.text_button]}>
              {phone != null ? phone : STRING.NOTUPDATE}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              profile_styles.button_info,
              profile_styles.background_white,
              profile_styles.shadow_box]}>
            <Image source={ICONS.EMAIL_INFO} style={[profile_styles.icon]} />
            <Text style={[profile_styles.button_label, profile_styles.text_button]}>{email}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              profile_styles.button_info,
              profile_styles.background_white,
              profile_styles.shadow_box,
              profile_styles.boder_2,
              {borderColor:color.FB}]}>
            <Image source={ICONS.FB} style={[profile_styles.icon]} />
            <Text style={[profile_styles.button_label, profile_styles.text_button]}>{email}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              profile_styles.button_info,
              profile_styles.background_white,
              profile_styles.shadow_box,
              profile_styles.boder_2,
              {borderColor:color.INSTAGRAM}]}>
            <Image source={ICONS.INSTAGRAM} style={[profile_styles.icon]} />
            <Text style={[profile_styles.button_label, profile_styles.text_button]}>{email}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Logout()}
            style={[
              profile_styles.button_info,
              profile_styles.background_white,
              profile_styles.shadow_box]} >
            <Image source={ICONS.EXIT} style={[profile_styles.icon]} />
            <Text style={profile_styles.button_label}>{STRING.LOGOUT}</Text>
          </TouchableOpacity>

        </Animated.View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Profile