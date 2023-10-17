import { View, Text, StatusBar, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SmallEarth from "../../assets/images/LOGO_GS.png"
import Profile from "../../assets/images/profil.png"
import Lock from 'react-native-vector-icons/Fontisto';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient
    colors={['#3885DA', '#29A9EA', '#3A7FD8']}
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <StatusBar backgroundColor="#3885DA" barStyle="auto" />
        <View style={{    
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,}}>
           <Image source={SmallEarth} style={{width: 48,height: 47,}} resizeMode="center" />
           <Text style={{    
            fontFamily: "Roboto-Bold",
                fontSize: 18,
                color: '#fff',}}>GS</Text>
        </View>
        <View style={{marginTop: windowHeight * 0.1,}}>
           <View style={{
                marginTop: windowHeight * 0.02,
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: windowWidth * 0.8,
                height: windowHeight * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
           }}>
                <Image source={Profile} style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                }}/>
                  <TextInput
                      placeholder='E-mail'
                      style={{
                        width: windowWidth * 0.57,
                        // backgroundColor: 'green',
                        marginLeft: windowWidth * 0.04,
                        color: '#000',
                        fontFamily: "Roboto-Regular",
                      }}
                      placeholderTextColor="#B0B0C3"
                      keyboardType="ascii-capable"
                      keyboardAppearance="default"
                      autoCapitalize="none"
                      focusable={true}
                    />
           </View>
           <View style={{
                marginTop: windowHeight * 0.02,
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: windowWidth * 0.8,
                height: windowHeight * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
           }}>
                <Lock name="locked" color={'#042C5C'} size={20}/>
                  <TextInput
                      placeholder='Mot De Pass'
                      style={{
                        width: windowWidth * 0.57,
                        // backgroundColor: 'green',
                        marginLeft: windowWidth * 0.04,
                        color: '#000',
                        fontFamily: "Roboto-Regular",
                      }}
                      placeholderTextColor="#B0B0C3"
                      keyboardType="ascii-capable"
                      keyboardAppearance="default"
                      autoCapitalize="none"
                      focusable={true}
                    />
           </View>

           <TouchableOpacity style={{
                marginTop: windowHeight * 0.02,
           }} activeOpacity={0.7}>
            <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: "Roboto-Regular",
            }}>Mot de passe oublié ?</Text>
           </TouchableOpacity>

           <View style={{
                justifyContent: "center",
                alignItems: "center"
           }}>
                <TouchableOpacity
                    style={{
                            backgroundColor: '#042C5C',
                            borderRadius: 50,
                            width: windowWidth * 0.6,
                            height: windowHeight * 0.05,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: windowHeight * 0.02,
                            elevation: 2,
                    }}
                    activeOpacity={0.7}>
                    <Text style={{
                            fontSize: 13,
                            color: '#fff',
                            // backgroundColor: 'tomato',
                            width: windowWidth * 0.5,
                            textAlign: 'center',
                            fontFamily: "Roboto-Regular",
                            alignSelf: 'center',
                    }}>Se connecter</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                            backgroundColor: '#042C5C',
                            borderRadius: 50,
                            width: windowWidth * 0.6,
                            height: windowHeight * 0.05,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: windowHeight * 0.02,
                            elevation: 2,
                    }}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('SignUp')}
                    >
                    <Text style={{
                            fontSize: 13,
                            color: '#fff',
                            // backgroundColor: 'tomato',
                            width: windowWidth * 0.5,
                            textAlign: 'center',
                            fontFamily: "Roboto-Regular",
                            alignSelf: 'center',
                    }}>
                    Pas de compte ? S’inscrire
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#042C5C',
                        borderRadius: 50,
                        width: windowWidth * 0.6,
                        height: windowHeight * 0.05,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: windowHeight * 0.02,
                        elevation: 2,
                    }}
                    activeOpacity={0.7}
                    >
                    <Text style={{
                            fontSize: 13,
                            color: '#fff',
                            // backgroundColor: 'tomato',
                            width: windowWidth * 0.5,
                            textAlign: 'center',
                            fontFamily: "Roboto-Regular",
                            alignSelf: 'center',
                    }}>
                    Passer l identification
                    </Text>
                </TouchableOpacity>
           </View>
        </View>
    </LinearGradient>
  )
}

export default LoginScreen