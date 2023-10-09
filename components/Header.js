import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderEarthImage from "../assets/images/earth.png"
import France from "../assets/images/france.png"
import CoteIvoire from "../assets/images/cote_ivoire.png"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Feather from "react-native-vector-icons/Feather"
export const HeaderEarth = () => {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#2BA6E9", justifyContent: "center", height: hp(12)}}>
        <Image source={HeaderEarthImage} style={{width: wp(10), height: wp(10), objectFit: "cover"}}/>
        <Text style={{ fontSize: 18, color: "#fff", fontFamily: "Roboto-Bold"}}>GS</Text>
    </View>
  )
}

export const HeaderActions = () => {
  return (
    <View style={{ position: "relative" ,alignItems: "center", backgroundColor: "#2BA6E9", justifyContent: "center", height: hp(12)}}>
              <Text style={{ fontSize: 18, color: "#fff", fontFamily: "Roboto-Bold"}}>Fret par avoin</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 2}}>
                  <View style={{flexDirection: "row", alignItems: "center", gap: 2}}>
                     <Image source={France}/>
                     <Text style={{ fontSize: 18, color: "#fff", fontFamily: "Roboto-Bold"}}>France</Text>
                     <Feather name="arrow-up-right" size='22'/>
                  </View>
              </View>
    </View>
  )
}