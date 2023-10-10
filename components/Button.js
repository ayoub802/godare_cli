import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, navigation }) => {
  return (
    <TouchableOpacity onPress={navigation} style={{ paddingVertical: 8, paddingHorizontal: 22, backgroundColor: "#4E8FDA", borderRadius: 25}}>
      <Text style={{fontFamily:"Poppins-Medium", fontSize: 12, color:"#fff"}}>{title}</Text>
    </TouchableOpacity>
  )
}
export const ButtonIcon = ({ title, navigation, Icon }) => {
  return (
    <TouchableOpacity onPress={navigation} style={{ paddingVertical: 8, paddingHorizontal: 22,flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "transparent",borderWidth: 1,borderColor: "#4E8FDA",color: "#4E8FDA" ,borderRadius: 25, }}>
      <View>{Icon}</View>
      <Text style={{fontFamily:"Poppins-Medium", fontSize: 12, color:"#4E8FDA"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button