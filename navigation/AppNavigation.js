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
import LoginScreen from '../screen/LoginScreen';
import CartBancair from '../screen/CartBancair';
import EditProfile from '../screen/EditProfile';
import RemiseAvoirScreen from '../screen/RemiseAvoirScreen';
import MessageScreen from '../screen/MessageScreen';
import LanguageScreen from '../screen/LanguageScreen';
import CommandScreen from '../screen/CommandScreen';
import AdresseScreen from '../screen/AdresseScreen';
import AddCardScreen from '../screen/AddCardScreen';


const Home = createNativeStackNavigator();
const Profile = createNativeStackNavigator();
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
         initialRouteName='Login'
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
                <Home.Screen name="AddCardScreen" component={AddCardScreen} />
                <Home.Screen name="Login" component={LoginScreen} />
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
          {
            () => (
              <Profile.Navigator screenOptions={{ headerShown: false}}>
                <Profile.Screen name='ProfileScreen' component={ProfileScreen}/>
                <Profile.Screen name='CartBancair' component={CartBancair}/>
                <Profile.Screen name='EditProfile' component={EditProfile}/>
                <Profile.Screen name='RemiseAvoir' component={RemiseAvoirScreen}/>
                <Profile.Screen name='MessageScreen' component={MessageScreen}/>
                <Profile.Screen name='LanguageScreen' component={LanguageScreen}/>
                <Profile.Screen name='CommandeScreen' component={CommandScreen}/>
                <Profile.Screen name='AdresseScreen' component={AdresseScreen}/>
              </Profile.Navigator>
            )
          }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

export default AppNavigation;
