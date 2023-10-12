import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderEarth} from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
const Tab = createBottomTabNavigator();

const PaysLivraison = ({navigation, route}) => {
  const id = route.params;
  const [paysData, setPaysData] = useState(id);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState();
  const items = [
    {
      label: '',
      value: 'france',
      icon: () => {
        return (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 30,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={require('../../assets/images/france.png')} />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  France
                </Text>
                <Feather name="arrow-up-right" size={22} color="#000" />
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image
                  source={require('../../assets/images/cote_ivoire.png')}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Côte d'ivoire
                </Text>
                <Feather name="arrow-down-right" size={22} color="#000" />
              </View>
            </View>
          </>
        );
      },
    },
    {
      label: '',
      value: 'germany',
      icon: () => {
        return (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 30,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={require('../../assets/images/france.png')} />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  France
                </Text>
                <Feather name="arrow-up-right" size={22} color="#000" />
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={require('../../assets/images/mali.png')} />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Mali
                </Text>
                <Feather name="arrow-down-right" size={22} color="#000" />
              </View>
            </View>
          </>
        );
      },
    },
    {
      label: '',
      value: 'italy',
      icon: () => {
        return (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 30,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={require('../../assets/images/france.png')} />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  France
                </Text>
                <Feather name="arrow-up-right" size={22} color="#000" />
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={require('../../assets/images/congo.png')} />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Congo
                </Text>
                <Feather name="arrow-down-right" size={22} color="#000" />
              </View>
            </View>
          </>
        );
      },
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
              items={
                paysData.pays.map(item => (
                  {
                    label: '',
                    value: item.destination,
                    icon: () => {
                      return (
                        <>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 30,
                            }} key={item.id}>
                            <View
                              style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                              <Image source={require('../../assets/images/france.png')} />
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: '#000',
                                  fontFamily: 'Roboto-Medium',
                                }}>
                                {item.depart}
                              </Text>
                              <Feather name="arrow-up-right" size={22} color="#000" />
                            </View>
                            <View
                              style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                              <Image source={require('../../assets/images/mali.png')} />
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: '#000',
                                  fontFamily: 'Roboto-Medium',
                                }}>
                                {item.destination}
                              </Text>
                              <Feather name="arrow-down-right" size={22} color="#000" />
                            </View>
                          </View>
                        </>
                      );
                    },
                  }))
              }
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              key={id.id}
              value={current}
              setValue={val => setCurrent(val)}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                borderColor: '#2BA6E9',
                fontSize: 54,
              }}
              style={{
                backgroundColor: '#fff',
                borderColor: '#2BA6E9',
                fontSize: 54,
              }}
              placeholder="Pays de Livraison"
              placeholderStyle={{
                color: '#86909C',
                fontFamily: 'Roboto-Regular',
                fontSize: 14,
              }}
              textStyle={{fontFamily: 'Roboto-Regular', fontSize: 14}}
              searchable={true}
              searchContainerStyle={{borderBottomWidth: 0}}
              searchTextInputStyle={{borderColor: '#2BA6E9'}}
              searchPlaceholder="Recherche Pays..."
              onSelectItem={() => navigation.navigate('DepotScreen1')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaysLivraison;
