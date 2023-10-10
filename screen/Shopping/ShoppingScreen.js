import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import France from "../../assets/images/france.png"
import Feather from "react-native-vector-icons/Feather"
import CoteIvoire from "../../assets/images/cote_ivoire.png"
import SmallEarth from "../../assets/images/small_earth.png"
import { products, shoppingCategorie } from '../../constant/data'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Button, { ButtonIcon } from '../../components/Button'
import ListCard from '../../components/ListCard'
const ShoppingScreen = () => {

    const [activetext, setActiveText] = useState(0)
    const [activeFilter, setActiveFilter] = useState(0)
    let color = {};
    const filterList = [
        {
            id: 1,
            icon: <Ionicons name="grid-outline" color={color} size={25}/>
        },
        {
            id: 2,
            icon:  <Octicons name="list-unordered" color={color} size={25}/>
        },
    ]
  return (
    <SafeAreaView style={{ flex: 1}}>
        <ScrollView style={{ flex: 1, paddingBottom: 15}} showsVerticalScrollIndicator={false}>
             <View style={{ flex: 1}}>

                <View style={{ position: "relative" ,alignItems: "center", backgroundColor: "#2BA6E9", justifyContent: "center", height: hp(12)}}>
                    <Text style={{ fontSize: 14, color: "#fff", fontFamily: "Roboto-Bold"}}>Fret par avoin</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                            <Image source={France}/>
                            <Text style={{ fontSize: 14, color: "#fff", fontFamily: "Roboto-Regular"}}>France</Text>
                            <Feather name="arrow-up-right" color="#fff" size={22}/>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                            <Image source={CoteIvoire}/>
                            <Text style={{ fontSize: 14, color: "#fff", fontFamily: "Roboto-Regular"}}>Côte d'ivoire</Text>
                            <Feather name="arrow-down-right" color="#fff" size={22}/>
                        </View>
                    </View>

                    <View style={{ position: "absolute", top: 15, right: 10}}>
                    <Image source={SmallEarth}/>
                    <Text style={{ fontSize: 14, color: "#fff", fontFamily: "Roboto-Bold", textAlign: "center", marginTop: 4}}>GS</Text>
                    </View>
                </View>

                <View style={{marginTop: 30}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 10}}>
                    {
                        shoppingCategorie.map((item, index)=> (
                            <TouchableOpacity onPress={() => setActiveText(index)} key={index} style={{ flexDirection: "row", alignItems: "center", gap: 12, width: 140}}>
                                <View>{item.img}</View>
                                <Text style={[activetext === index ? styles.textActive : styles.text, {fontFamily: "Poppins-Medium", fontSize: 12}]}>{item.title}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    </ScrollView>
                </View>

                <View style={{marginTop: 30, paddingHorizontal: 5}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",borderTopLeftRadius: 28, borderTopRightRadius: 28 ,backgroundColor: "#fff", paddingVertical: 27, paddingLeft: 15, paddingRight: 23}}>
                        <View style={{flexDirection:"row", alignItems: "center", gap: 10}}>
                            <TouchableOpacity style={{flexDirection:"row", alignItems: "center", gap: 8}}>
                                <Text style={{fontFamily: "Poppins-Medium", fontSize: 15, color: "#376AED" }}>Filter</Text>
                                <MaterialIcons name="arrow-drop-down" color="#376AED" size={25}/>
                            </TouchableOpacity> 
                            <TouchableOpacity style={{flexDirection:"row", alignItems: "center", gap: 8}}>
                                <Text style={{fontFamily: "Poppins-Medium", fontSize: 15, color: "#376AED" }}>Trier</Text>
                                <MaterialIcons name="arrow-drop-down" color="#376AED" size={25}/>
                            </TouchableOpacity> 
                        </View>
                        <View style={{flexDirection:"row", alignItems: "center", gap: 15}}>
                            {
                                filterList.map((item, index) => (
                                    <TouchableOpacity onPress={() => setActiveFilter(index)} key={index}>
                                        {item.icon}
                                    </TouchableOpacity> 
                                ))
                            }
                        </View>
                    </View>
                </View>

                <View style={{paddingBottom: 85}}>
                    { 
                      products.map((item, index) => (
                        <ListCard item={item} index={index}/>
                      ))
                    }
                </View>
             </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    textActive: {
        color: "#376AED"
    },
    text: {
        color: "#616162"
    },
})

export default ShoppingScreen