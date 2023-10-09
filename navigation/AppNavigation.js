import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import PaysLivraison from '../screen/PaysLivraison';
import DepotScreen1 from '../screen/DepotScreen1';
import Stepper from '../screen/Stepper';
import DepotScreen2 from '../screen/DepotScreen2';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Feather from "react-native-vector-icons/Feather"
import Search from '../screen/Search';
import ContactScreen from '../screen/ContactScreen';
import CartScreen from '../screen/CartScreen';
import ProfileScreen from '../screen/ProfileScreen';
import DepotScreen3 from '../screen/DepotScreen3';
import Livraison1 from '../screen/Livraison1';
import Livraison2 from '../screen/Livraison2';
const Home = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#2BA6E9"/>
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 53,
            backgroundColor: '#2BA6E9',
          },
        }}
         initialRouteName='HomeScreen'
        >
        <Tab.Screen
        name='Home'
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialCommunityIcons
                    name="home-outline"
                    size={24}
                    color={focused ? '#fff' : '#fff'}
                  />
                </View>
              );
            },
          }}
        >
          {
            () => (
              <Home.Navigator screenOptions={{ headerShown: false}}>
                <Home.Screen name="HomeScreen" component={HomeScreen} />
                <Home.Screen name="PaysLivraison" component={PaysLivraison} />
                <Home.Screen name="DepotScreen1" component={DepotScreen1} />
                <Home.Screen name="DepotScreen2" component={DepotScreen2} />
                <Home.Screen name="DepotScreen3" component={DepotScreen3} />
                <Home.Screen name="Livraison1" component={Livraison1} />
                <Home.Screen name="Livraison2" component={Livraison2} />
              </Home.Navigator>
            )
          }
        </Tab.Screen>
        <Tab.Screen
        name='Search'
        component={Search}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <MaterialIcons
                    name="search"
                    size={24}
                    color={focused ? '#fff' : '#fff'}
                  />
                </View>
              );
            },
          }}
        >
        </Tab.Screen>
        <Tab.Screen
        name='mail'
        component={ContactScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Entypo
                    name="mail"
                    size={24}
                    color={focused ? '#fff' : '#fff'}
                  />
                </View>
              );
            },
          }}
        >
        </Tab.Screen>
        <Tab.Screen
        name='Cart'
        component={CartScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <SimpleLineIcons
                    name="handbag"
                    size={24}
                    color={focused ? '#fff' : '#fff'}
                  />
                </View>
              );
            },
          }}
        >
        </Tab.Screen>
        <Tab.Screen
        name='Profile'
        component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Feather
                    name="user"
                    size={24}
                    color={focused ? '#fff' : '#fff'}
                  />
                </View>
              );
            },
          }}
        >
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 53,
          backgroundColor: '#2BA6E9',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="home-outline"
                  size={24}
                  color={focused ? '#fff' : '#fff'}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
