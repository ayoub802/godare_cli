import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Button, { ButtonIcon } from './Button'
const ListCard = ({ item, index }) => {
  return (
    <View key={index} style={{ backgroundColor: "#fff", margin: 5}}>
    <View style={{flexDirection: "row", alignItems: "flex-start", gap: 10, paddingVertical: 12, paddingLeft: 22}}>
            <View>
            <Image source={item.image} style={{height: hp(22), borderRadius: 22, width: wp(29)}}/>
            </View>
            <View style={{flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <View style={{backgroundColor: item.bgColor,paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontFamily: "Poppins-Medium", fontSize: 10, color: item.titleColor}}>{item.title}</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", gap: 5, marginTop: 8}}>
                    <Text style={{fontSize: 13, fontFamily: "Poppins-Medium",color: "#000"}}>
                        {item.price}€/KG
                    </Text>
                    <Text style={{fontSize: 13, fontFamily: "Poppins-Medium",color: "#000"}}>
                    {item.old_price}€/KG
                    </Text>
                </View>
                
                <TouchableOpacity style={{ flexDirection: "row",width: wp(35), backgroundColor: "#F5F5F5", borderRadius: 6, paddingHorizontal: 8,paddingVertical: 8 ,alignItems: "center", justifyContent: "space-between", marginTop: 5}}>
                    <Text style={{fontFamily: "Poppins-Regular", color: "#04091E", fontSize: 13}}>
                    Etat
                    </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={22} color='#000'/>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row",width: wp(35), backgroundColor: "#F5F5F5", borderRadius: 6, paddingHorizontal: 8,paddingVertical: 8 ,alignItems: "center", justifyContent: "space-between", marginTop: 5}}>
                    <Text style={{fontFamily: "Poppins-Regular", color: "#04091E", fontSize: 13}}>
                    Quantité
                    </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={22} color='#000'/>
                </TouchableOpacity>

                <View style={{marginTop: 8}}>
                <ButtonIcon title="Prendre une photo" Icon={<FontAwesome5 name="file-upload" size={15} color='#4E8FDA'/>}/>
                </View>

                <View style={{marginTop: 8}}>
                <Button title="Ajouter au panier"/>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ListCard