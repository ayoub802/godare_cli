import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {categories} from '../constant/data';
import CardHome from '../components/CardHome';
import {HeaderEarth} from '../components/Header';
import axios from 'axios';
import _ from 'lodash';
import {getServices, saveSelectedService, saveServices} from '../hooks/GestionStorage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axiosInstance from '../axiosInstance';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
  const [serviceData, setServiceData] = useState([]);
  const [ServicesRaw, setServicesRaw] = useState([]);
  const [Activity, setActivity] = useState(true);

  useEffect(() => {
    getServiceData();
  }, []);
  // const getServiceData = async () => {
  //   const url = "https://godaregroup.com/api/service/";
  //   let result = await fetch(url);
  //   result = await result.json();
  //   if(result){
  //       setServiceData(result)
  //   }
  // }

  const getServiceData = async () => {
    setActivity(true)
    try{
        const response = await axiosInstance.get('/service/');
        services = response.data;
         if(services){
          setServiceData(services)
         }
    }
    catch(err){
      console.log("error:", err);
    }
    setActivity(false)
  };

  console.log(serviceData);
  if (Activity) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{flex: 1}}>
        <HeaderEarth />

        </View>
        <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#3292E0" style={{}} />
        </View>
      </ScrollView>
    );
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {serviceData.length > 0 && (
                <FlatList
                  data={serviceData}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <CardHome
                      item={item}
                      navigation={() =>
                        navigation.navigate('PaysLivraison', item)
                      }
                      key={item.id}
                    />
                  )}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  contentContainerStyle={{justifyContent: 'space-between'}}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
