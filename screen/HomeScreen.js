import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {categories} from '../constant/data';
import CardHome from '../components/CardHome';
import {HeaderEarth} from '../components/Header';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    getServiceData();
  }, []);

  const getServiceData = async () => {
    const url = "https://godaregroup.com/api/service/";
    let result = await fetch(url);
    result = await result.json();
    if(result){
        setServiceData(result)
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 50}}>
        <View style={{flex: 1}}>
          <HeaderEarth />
        </View>
        <View style={{marginTop: 64}}>
          <View
            style={{
              justifyContent: 'space-between',
              marginHorizontal: 14,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                serviceData.length > 0 && (
                  <FlatList
                    data={serviceData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                      <CardHome item={item} navigation={() => navigation.navigate('PaysLivraison', item)} key={item.id} />
                    )}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{justifyContent: 'space-between'}}
                  />
                )
              }
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
