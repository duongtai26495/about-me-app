import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import color from '../colors/color'

const width = Dimensions.get('window').width;
const width_component = width/1.2;
const authen_styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        flex:1,
        backgroundColor:color.DARK,
        justifyContent:'center'
    },
    scrollView:{
        width:width_component,
        alignSelf:'center',
        height:'100%'
    },
    authen_view:{
        flex:1,
        width:width_component,
        justifyContent:'space-evenly',
        alignSelf:'center'
    },  
    logo:{
        width:width/5,
        height:width/5,
        alignSelf:'center'
    },
    authen_form:{
        width:'100%',
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'center'
    },
    icon_form:{
        width:25,
        height:25,
        marginRight:10,
    },
    input_form:{
        width:'100%',
        paddingHorizontal:5,
        color:color.WHITE,
    },
    form:{
        width:'100%',
        flexDirection:'row',
        padding:10,
        borderRadius:10,
        marginTop:15,
        borderBottomColor:color.WHITE,
        borderBottomWidth:1
    },
    authen_button:{
        width:'100%',
        backgroundColor:color.PRIMARY,
        padding:10,
        marginTop:15,
        borderRadius:10,
        alignItems:'center'
    },
    label_button:{
        color:color.WHITE,
        fontSize:15,
    }

})

export default authen_styles