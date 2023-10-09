import { View, Text, ScrollView, Image, TextInput, ViewComponent } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import France from "../assets/images/france.png"
import CoteIvoire from "../assets/images/cote_ivoire.png"
import Feather from "react-native-vector-icons/Feather"
import SmallEarth from "../assets/images/small_earth.png"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Stepper from './Stepper';
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import moment from 'moment';
import Button from '../components/Button';

const DepotScreen3 = ({ navigation }) => {
  const now = moment().valueOf();

  const hours =[
    {
      id: 1,
      label: "08h-10h"
    },
    {
      id: 2,
      label: "10h-12h"
    },
    {
      id: 3,
      label: "13h-15h"
    },
    {
      id: 4,
      label: "16h-18h"
    },
  ]
  return (
    <SafeAreaView style={{flex: 1}}>
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
                      <Feather name="arrow-up-right" color="#fff" size={22}/>
                  </View>
              </View>

              <View style={{ position: "absolute", top: 15, right: 10}}>
                <Image source={SmallEarth}/>
                <Text style={{ fontSize: 14, color: "#fff", fontFamily: "Roboto-Bold", textAlign: "center", marginTop: 4}}>GS</Text>
              </View>
          </View>

          <View>
            <Stepper position={1}/>
          </View>

           <View style={{ paddingHorizontal: 26, marginTop: 30}}>
               <View style={{marginBottom: 10}}>
                   <Text style={{ textAlign: "center", fontFamily: "Poppins-SemiBold", color: "#000", fontSize: 16}}>Créneau d’enlévement</Text>
               </View>
              <TimeDatePicker 
                  selectedDate={now}
                  onSelectedChange={(selected) => {
                    console.log("selected: ", selected);
                  }}
                style={{height: 400, paddingTop: 12, borderWidth: 1,borderRadius: 4 ,borderColor: "#E5E5E5"}}
                options={{ borderColor: "transparent", mainColor: "#2196F3", textSecondaryColor: "#999"}}
                onMonthYearChange={(month) => {
                  console.log("month: ", month);
                }}
              />
              
              <View style={{ marginTop: 10}}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4}}>
                      {
                        hours.map((item, index) => (
                          <View style={{ backgroundColor: "#fff", marginRight: 4, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10}} key={index}>
                             <Text style={{fontFamily: "Roboto-Regular", fontSize: 13, color:"#000"}}>{item.label}</Text>
                          </View>
                        ))
                      }
                  </View>
              </View>
           </View>

           <View style={{ flex: 1, justifyContent: "flex-end", alignItems: 'center', paddingBottom: 72}}>
             <Button title="Valider" navigation={() => navigation.navigate('Livraison1')}/>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default DepotScreen3