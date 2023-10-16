import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, ToastAndroid} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import France from "../../assets/images/france.png"
import Feather from "react-native-vector-icons/Feather"
import CoteIvoire from "../../assets/images/cote_ivoire.png"
import SmallEarth from "../../assets/images/small_earth.png"
import { products, productsCard, shoppingCategorie } from '../../constant/data'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Button, { ButtonIcon } from '../../components/Button'
import ListCard from '../../components/ListCard'
import Empty from '../../components/Empty'
import { ScrollView } from 'react-native-virtualized-view'
import GridCard from '../../components/GridCard'
import { HeaderActions } from '../../components/Header'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ShoppingScreen = ({ navigation, route }) => {
     const {value} = route.params;
     const [activeFilter, setActiveFilter] = useState(0);
     const [categoriData, setCategoriData] = useState([]);
     const [productsData, setProductsData] = useState([])
     const [activetext, setActiveText] = useState('')

     useEffect(() => {
        fetchCategories();
        //  fetchProducts();
        }, [])
        
        const fetchCategories = async () => {
            let result = await axios.get(`https://godaregroup.com/api/categories/actif/${value.value.service.code}/${value.value.id}`);
            if(result.data){
                let data = result.data;
                setCategoriData(data)

                let find = false;
                data.map((row) => {
                    if(!find){
                        setActiveText(row.id)
                        fetchProducts(row.id);
                        find = true;
                    }
                })
            }
        }
                
        const fetchProducts = async (category = activetext) => {
            console.log("id", value.value.id);
            let result = await axios.get(`https://godaregroup.com/api/products/categories/actif/${category}/${value.value.id}`);
            let data = result.data;
            if(data){
                setProductsData(data)
            }
        }

        const handleChange = category => {
            fetchProducts(category);
            setActiveText(category);
            setProductsData([]);
        }

        const addToCart = async id => {
                let itemArray = await AsyncStorage.getItem('cartItems');
                itemArray = JSON.parse(itemArray);
                if (itemArray) {
                let array = itemArray;
                array.push(id);

                try {
                    await AsyncStorage.setItem('cartItems', JSON.stringify(array));
                    ToastAndroid.show(
                    'Item Added Successfully to cart',
                    ToastAndroid.SHORT,
                    );
                    navigation.navigate('CartScreen');
                } catch (error) {
                    return error;
                }
                } else {
                let array = [];
                array.push(id);
                try {
                    await AsyncStorage.setItem('cartItems', JSON.stringify(array));
                    ToastAndroid.show(
                    'Item Added Successfully to cart',
                    ToastAndroid.SHORT,
                    );
                    navigation.navigate('CartScreen');
                } catch (error) {
                    return error;
                }
                }
          };
        // setActiveText(categoriData.id)
  return (
    <SafeAreaView style={{ flex: 1}}>
        <ScrollView style={{ flex: 1, paddingBottom: 15, width: "100%"}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
             <View style={{ flex: 1, position: "relative"}}>
              
               <HeaderActions destination={value.value.destination} nom_service={value.value.service.nom}/>
                    
                    <View style={{marginTop: 20}}>
                        <ScrollView horizontal={false} scrollEnabled={true} style={{ width: "100%" }}>
                            <FlatList 
                            horizontal
                            style={{paddingLeft: 10}}
                            showsHorizontalScrollIndicator={false}
                            data={categoriData}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                
                                    <TouchableOpacity onPress={() => handleChange(item.id)} style={{ flexDirection: "row", alignItems: "center", gap: 12, width: 140}}>
                                            <View>
                                                <Image source={{ uri: item.image}} style={{width: wp(10), height: wp(10), objectFit: "cover"}}/>
                                            </View>
                                            <Text style={[activetext === item.id ? styles.textActive : styles.text, {fontFamily: "Poppins-Medium", fontSize: 12}]}>{item.name}</Text>
                                        </TouchableOpacity>
                                )}
                            />
                        </ScrollView>
                    </View>

                <View style={{marginTop: 10, paddingHorizontal: 5}}>
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
                                activeFilter === 0 
                                ?
                                <TouchableOpacity onPress={() => setActiveFilter(1)}>
                                    <Ionicons name="grid-outline" color="#00000033" size={25}/>
                                </TouchableOpacity> 
                                :
                                <TouchableOpacity onPress={() => setActiveFilter(0)}>
                                    <Ionicons name="grid-outline" color="#376AED" size={25}/>
                                </TouchableOpacity> 
                              }
                              {
                                activeFilter === 1 
                                ?
                                <TouchableOpacity onPress={() => setActiveFilter(0)}>
                                    <Octicons name="list-unordered" color="#00000033" size={25}/>
                                </TouchableOpacity> 
                                :
                                <TouchableOpacity onPress={() => setActiveFilter(1)}>
                                    <Octicons name="list-unordered" color="#376AED" size={25}/>
                                </TouchableOpacity> 
                              }
                                    

                        </View>
                    </View>
                </View>

                <View style={{paddingBottom: 85, flex: 1}}>
                   {
                    productsData.length <= 0 ? 
                    <>
                    <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
                       <ActivityIndicator size={30}/>
                    </View>
                    </> 
                    :
                    <>
                    {
                      activeFilter === 1
                            ? 
                            
                            <FlatList 
                            data={productsData}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <GridCard item={item} navigation={navigation}/>}
                        />
                        :
                            <FlatList 
                            data={products}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <ListCard item={item} navigation={() => addToCart(item.id)}/>}
                            />
                        }
                    </>
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