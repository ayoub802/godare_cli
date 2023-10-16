import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ToastAndroid,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const addToCart = async id => {
    // const navigation = useNavigation();
    // let itemArray = await AsyncStorage.getItem('cartItems');
    // itemArray = JSON.parse(itemArray);
    // if (itemArray) {
    //   let array = itemArray;
    //   array.push(id);

    //   try {
    //     await AsyncStorage.setItem('cartItems', JSON.stringify(array));
    //     ToastAndroid.show(
    //       'Item Added Successfully to cart',
    //       ToastAndroid.SHORT,
    //     );
    //     navigation.navigate('CartScreen');
    //   } catch (error) {
    //     return error;
    //   }
    // } else {
    //   let array = [];
    //   array.push(id);
    //   try {
    //     await AsyncStorage.setItem('cartItems', JSON.stringify(array));
    //     ToastAndroid.show(
    //       'Item Added Successfully to cart',
    //       ToastAndroid.SHORT,
    //     );
    //     navigation.navigate('CartScreen');
    //   } catch (error) {
    //     return error;
    //   }
    // }

    console.log("id:", id);
  };