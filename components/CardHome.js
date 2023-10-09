import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const CardHome = ({ item, navigation }) => {
    const path = item.path;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)} style={{marginBottom: 16, paddingHorizontal: 7}}>
      <View style={{ backgroundColor: "#fff", paddingTop: 16,paddingBottom: 16, borderRadius: 12}}>
         <Text style={{fontSize: wp(4), fontFamily: "Poppins-SemiBold", textAlign: "center", color: "#000"}}>
            {item.title}
         </Text>
         <View style={{ overflow: "hidden", paddingTop: 16}}>
            <Image source={item.img}  style={{width: wp(44), height: wp(45), objectFit: "cover"}}/>
         </View>
         <View  style={{ paddingTop: 8}}>
            <Text  style={{ textAlign: "center", fontSize: wp(2.5), fontFamily: "Poppins-Regular"}}>
              {item.desc}
            </Text>
         </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardHome