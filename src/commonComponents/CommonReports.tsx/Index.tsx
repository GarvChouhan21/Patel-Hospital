import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../utils/Colors'
import { ShareIcon } from '../../../assets/images'

const CommonReportsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Image style={styles.image} source={require('../../../assets/images/profile.png')}/>
        <View>
            <Text style={styles.reportName}>X-ray</Text>
            <Text style={styles.reportDescription}>By Dr. Govind Sarkar</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <ShareIcon/>
      </View>
    </View>
  )
}

export default CommonReportsCard

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        marginHorizontal:12,
        padding:17,
        backgroundColor:COLORS.PRIMARY_WHITE,
        borderRadius:20,
        borderColor: COLORS.PRIMARY_GRAY,
        flexDirection:"row",
        marginTop:18
    },
    image:{
        alignItems:"center",
        justifyContent:"center",
        borderRadius:51,
        height:51,
        width:51
    },
    reportName:{
        fontFamily:FONTS.MONTESERRAT_SEMIBOLD,
        color:COLORS.PRIMARY_BLACK,
        fontSize:14
    },
    containerMain:{
        flexDirection:"row",
        alignItems:"center",
        gap:16
    },
    reportDescription:{
        fontFamily:FONTS.MONTESERRAT_SEMIBOLD,
        color:COLORS.SECONDARY_GRAY,
        fontSize:12,
        marginTop:3
    },
    secondContainer:{
        flex:1,
        alignItems:"flex-end",
        justifyContent:"center"
    }
})