import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {HeaderEarth} from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import { RenderItem, RenderItemCode } from '../../components/RenderItem';

const RemiseAvoirScreen = () => {
   
    const headerTable = [
         {
            title: "total",
         },
         {
            title: "restant",
         },
         {
            title: "Début Validité",
         },
         {
            title: "fin Validité",
         },
    ];
    const headerRemise = [
         {
            title: "code",
         },
         {
            title: "%",
         },
         {
            title: "Service",
         },
         {
            title: "Pays",
         },
         {
            title: "Produit",
         },
         {
            title: "in validité",
         },
    ]
    const headerData = [
         {
            id: 1,
            price: 30+"€",
            restant: "Restant",
            date: "15/06/23",
            fin: " 14/06/24"
         },
         {
            id: 2,
            price: 30+"€",
            restant: "Restant",
            date: "15/06/23",
            fin: " 14/06/24"
         },
         {
            id: 3,
            price: 30+"€",
            restant: "Restant",
            date: "15/06/23",
            fin: " 14/06/24"
         },
         {
            id: 4,
            price: 30+"€",
            restant: "Restant",
            date: "15/06/23",
            fin: " 14/06/24"
         },
    ]

    const headerDataRemise = [
        {
           id: 1,
           code: "NOEL",
           percentage: 10+"%",
           service: "FA",
           pays: " ",
           produit: " ",
           invlide: "14/06/24"
        },
        {
           id: 2,
           code: "NOEL",
           percentage: 10+"%",
           service: "FA",
           pays: " ",
           produit: " ",
           invlide: "14/06/24"
        },
        {
           id: 3,
           code: "NOEL",
           percentage: 10+"%",
           service: "",
           pays: " ",
           produit: "IPhone 14",
           invlide: "14/06/24"
        },
   ]

  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView nestedScrollEnabled={true} style={{marginBottom: 70, flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={{flex: 1}}>
                <HeaderEarth />

                <View style={{marginTop: 24, marginBottom: 12}}>
                <Text
                    style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    color: '#000',
                    textAlign: 'center',
                    }}>
                    Mes avoirs : 80€
                </Text>
                </View>

                <View style={{paddingHorizontal: 18}}>
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center",justifyContent: 'space-between',borderTopRightRadius: 10, borderTopLeftRadius: 10 ,backgroundColor: "#fff", paddingVertical: 16, paddingHorizontal: 30}}>
                    {
                        headerTable.map((item, index) => (
                            <View key={index} >
                                <Text style={{textTransform: 'capitalize', color: "#000", fontSize: 13,textAlign: "center" , fontFamily: "Poppins-Medium"}}>{item.title}</Text>
                            </View>
                        ))
                    }
                </View>
                <ScrollView horizontal={true} style={{width: 750}}>
                    <FlatList 
                        data={headerData}
                        style={{width: 375}}
                        renderItem={({item}) => <RenderItem data={item}/>}
                        numColumns={1}
                    />
                </ScrollView>
                </View>

                
                <View style={{marginTop: 24, marginBottom: 12}}>
                    <Text
                        style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 16,
                        color: '#000',
                        textAlign: 'center',
                        }}>
                        Remises en cours
                    </Text>
                </View>

                
                <View style={{paddingHorizontal: 18}}>
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center",justifyContent: 'space-between',borderTopRightRadius: 10, borderTopLeftRadius: 10 ,backgroundColor: "#fff", paddingVertical: 16, paddingHorizontal: 30}}>
                    {
                        headerRemise.map((item, index) => (
                            <View key={index} >
                                <Text style={{textTransform: 'capitalize', color: "#000", fontSize: 13,textAlign: "center" , fontFamily: "Poppins-Medium"}}>{item.title}</Text>
                            </View>
                        ))
                    }
                </View>
                <ScrollView horizontal={true} style={{width: 750}}>
                    <FlatList 
                        data={headerDataRemise}
                        style={{width: 375}}
                        renderItem={({item}) => <RenderItemCode data={item}/>}
                        numColumns={1}
                    />
                </ScrollView>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default RemiseAvoirScreen;
