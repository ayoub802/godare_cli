import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { SafeAreaView } from 'react-native-safe-area-context'
import { categories } from '../constant/data'
import CardHome from '../components/CardHome'
import { HeaderEarth } from '../components/Header'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{marginBottom: 50}}>
            <View style={{ flex: 1}}>
               <HeaderEarth />
            </View>
            <View style={{ marginTop: 64}}>
            <View style={{ justifyContent: "space-between",marginHorizontal: 14 ,flexDirection: "row", flexWrap: "wrap"}}>
              <ScrollView horizontal={true}>
                <FlatList 
                  data={categories}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => <CardHome item={item} navigation={navigation} key={item.id}/>}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  contentContainerStyle={{justifyContent: "space-between"}}
                />
              </ScrollView>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen