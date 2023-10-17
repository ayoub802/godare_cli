import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Button, { ButtonIcon } from './Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DropDownPicker from 'react-native-dropdown-picker'
const ListCard = ({ item, index, navigation }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [current, setCurrent] = useState();
  const [current2, setCurrent2] = useState();
  const items = [
    {
      label: 'france',
      value: 'france',
    },
    {
      label: 'germany',
      value: 'germany',
    },
    {
      label: 'italy',
      value: 'italy',
    },
  ];

  return (
    <View key={index}  style={{ backgroundColor: "#fff", margin: 5}}>
      <View style={{flexDirection: "row", alignItems: "flex-start", gap: 10, paddingVertical: 12, paddingLeft: 22, paddingRight: 50}}>
            <View>
              <Image source={{uri: item.productImages[0].url}} style={{height: hp(22), borderRadius: 22, width: wp(29)}}/>
            </View>
            <View style={{flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <View style={{backgroundColor: item.bgColor,paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, justifyContent: "center", alignItems: "center",}}>
                  <Text style={{fontFamily: "Poppins-Medium", fontSize: 10, color: item.titleColor,textAlign: "center", maxWidth: 250}}>{item.name}</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", gap: 5, marginTop: 8}}>
                    <Text style={{fontSize: 13, fontFamily: "Poppins-Medium",color: "#000"}}>
                        {item.productSpecificites[0].prix}€/KG
                    </Text>
                    <Text style={{fontSize: 13, fontFamily: "Poppins-Medium",color: "#000"}}>
                    {item.productSpecificites[0].prixAncien}€/KG
                    </Text>
                </View>
                <View style={{}}>
                  <DropDownPicker
                    items={items}
                    open={isOpen}
                    setOpen={() => setIsOpen(!isOpen)}
                    key={item.id}
                    value={current}
                    setValue={val => setCurrent(val)}
                    dropDownContainerStyle={{
                      backgroundColor: '#F5F5F5',
                      borderColor: 'transparent',
                      fontSize: 54,
                      width: wp(35),
                    }}
                    style={{
                      backgroundColor: '#F5F5F5',
                      borderColor: 'transparent',
                      fontSize: 54,
                      width: wp(35),
                      
                    }}
                    placeholder="Etat"
                    placeholderStyle={{
                      color: '#04091E',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 13,
                    }}
                    textStyle={{fontFamily: 'Poppins-Regular',textTransform: "capitalize" ,fontSize: 14}}
                  />
                </View>
                <View style={{marginTop: 5}}>
                  <DropDownPicker
                    items={items}
                    open={isOpen2}
                    setOpen={() => setIsOpen2(!isOpen2)}
                    key={item.id}
                    value={current2}
                    setValue={val => setCurrent2(val)}
                    dropDownContainerStyle={{
                      backgroundColor: '#F5F5F5',
                      borderColor: 'transparent',
                      fontSize: 54,
                      width: wp(35),
                    }}
                    style={{
                      backgroundColor: '#F5F5F5',
                      borderColor: 'transparent',
                      fontSize: 54,
                      width: wp(35),
                      
                    }}
                    placeholder="Quantité"
                    placeholderStyle={{
                      color: '#04091E',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 13,
                    }}
                    textStyle={{fontFamily: 'Poppins-Regular',textTransform: "capitalize" ,fontSize: 14}}
                  />
                </View>

                <View style={{marginTop: 8, width: "100%"}}>
                <ButtonIcon title="Prendre une photo" Icon={<FontAwesome5 name="file-upload" size={15} color='#4E8FDA'/>}/>
                </View>

                <View style={{marginTop: 8, width: "100%"}}>
                <Button title="Ajouter au panier" navigation={navigation}/>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ListCard