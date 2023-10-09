import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomTab } from '../navigation/AppNavigation';
import { HeaderEarth } from '../components/Header';
const Tab = createBottomTabNavigator();

const PaysLivraison = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState();
  const items = [
    {
      label: 'France',
      value: 'france',
      icon: () => <Image source={require('../assets/images/france.png')}/> 
    },
    {
      label: 'France',
      value: 'germany',
      icon: () => <Image source={require('../assets/images/france.png')}/> 
    },
    {
      label: 'France',
      value: 'italy',
      icon: () => <Image source={require('../assets/images/france.png')}/> 
    },

  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <HeaderEarth />

        <View style={{paddingHorizontal: 16, marginTop: 70}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
            }}>
            Pays de livraison
          </Text>

          <View style={{marginTop: 16}}>
            <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={current}
              setValue={(val) => setCurrent(val)}
              placeholder='Pays de Livraison'
              placeholderStyle={{color: "#86909C", fontFamily: "Roboto-Regular", fontSize: 14}}
              textStyle={{fontFamily: "Roboto-Regular", fontSize: 14}}
              onSelectItem={() => navigation.navigate('DepotScreen1')}
            />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default PaysLivraison;
