import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import color from '../colors/color'

const width = Dimensions.get('window').width;
const width_component = width/1.2;
const profile_styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:color.WHITE,
    },
    signout_button:{
        width:width_component,
        padding:10,
        borderRadius:15,
        backgroundColor:color.WHITE,
        alignSelf:'center',
    },
    button_label:{
        alignSelf:'center',
        fontWeight:'bold'
    },
    avatar:{
        width:'100%',
        height:'100%',
    },
    avatar_view:{
        borderRadius:100,
        overflow:'hidden',
        width:width/3,
        height:width/3,
        alignSelf:'center',
        borderWidth:5,
        borderColor:color.PRIMARY,
        marginVertical:20,
    },
    info_view:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    name_view:{

    },
    full_name:{
        fontSize:25,
        fontWeight:'bold',
        flexWrap:'wrap',
        maxWidth:width_component/2,
    },
    sub_name:{
        fontSize:15,
    },
    desc_view:{
        alignSelf:'center',
        width:width_component, 
        marginVertical:10,  
        padding:10,
        borderRadius:10,
    },
    white_text:{
        color:color.WHITE,
    },
    dark_text:{
        color:color.DARK,
    },
    button_info:{
        width:width_component/2.1,
        minHeight:150,
        borderRadius:5,
        padding:15,
        alignSelf:'center',
        flexDirection:'column',
        justifyContent:'center',
        marginBottom:10,
    },
    background_primary:{
        backgroundColor:color.PRIMARY,
    },
    background_white:{
        backgroundColor:color.WHITE,
    },
    other_info_view:{
        width:width_component,
        marginVertical:20,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        flexShrink:2,
        alignSelf:'center'
    },
    icon:{
        width:40,
        height:40,
        alignSelf:'center',
        marginVertical:10,
    },
    text_button:{
        fontSize:11,
    },
    shadow_box:{
        elevation:2,
        shadowColor:color.DARK,
        shadowOffset:{
            height:1.5,
            width:1.5
        },
        shadowOpacity:0.2,
        shadowRadius:3,
    },
    boder_2:{
        borderWidth:2,
    }
})

export default profile_styles