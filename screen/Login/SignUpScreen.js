import {
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderEarth} from '../../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../components/Button';
import {ScrollView} from 'react-native-virtualized-view';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../hooks/firebase';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../axiosInstance';
// import { auth } from '../../hooks/firebase';

const SingUpScreen = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState();
  const [Name, setName] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, settext] = useState('12/10/1997');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const phoneInput = useRef(null);

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const handleSignUp = async () => {
    let Array = {
      Name: Name,
      FirstName: FirstName,
      Email: email,
      DateOfBirth: date,
      Password: password,
    };
    console.log('Done from Handle Signup', phoneNumber, 'Array is', Array);
    console.log('handleSignup');
    try {
      await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
              try{
                AsyncStorage.setItem('authStatusChecker', 'login')
              }catch(err){
                console.log('Storage Error from Login Button :', error);
              }
              console.log('User account create & Signed in!');

              axiosInstance.post('/clients/new', {
                nom: Name,
                prenom: FirstName,
                email: email,
                telephone: phoneNumber,
                birthday: date.toString()
              }).then(function (response) {
              })
              .catch(function (error) {
                console.log(error);
              });

              navigation.navigate('HomeScreen');
            }).catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
            });
    } catch (err) {
      console.log('error: ', err);
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = `${tempDate.getDate()}/${
      tempDate.getMonth() + 1
    }/${tempDate.getFullYear()}`;

    settext(fDate);
    console.log(fDate);
  };

  const items = [
    {
      label: 'France',
      value: 'france',
    },
    {
      label: 'France',
      value: 'germany',
    },
    {
      label: 'France',
      value: 'italy',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <HeaderEarth />

          <View style={{marginTop: 30, marginBottom: 12}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: '#000',
                textAlign: 'center',
              }}>
              Veuillez créer un compte
            </Text>
          </View>

          <View style={{paddingHorizontal: 28}}>
            <View>
              <TextInput
                placeholder="Civilité*"
                style={{
                  borderWidth: 1,
                  borderColor: '#AAB0B7',
                  paddingLeft: 15,
                  borderRadius: 8,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#AAB0B7',
                  backgroundColor: '#fff',
                }}
              />
            </View>
            <View style={{marginTop: 12}}>
              <TextInput
                placeholder="Prénom*"
                style={{
                  borderWidth: 1,
                  borderColor: '#AAB0B7',
                  paddingLeft: 15,
                  borderRadius: 8,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#AAB0B7',
                  backgroundColor: '#fff',
                }}
                value={Name}
                onChange={valueInput => {
                  setName(valueInput.nativeEvent.text.toString());
                }}
                onChangeText={value => setName(value)}
              />
            </View>

            <View style={{marginTop: 12}}>
              <TextInput
                placeholder="Nom*"
                style={{
                  borderWidth: 1,
                  borderColor: '#AAB0B7',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#AAB0B7',
                  paddingLeft: 15,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                }}
                value={FirstName}
                onChange={valueInput => {
                  setFirstName(valueInput.nativeEvent.text.toString());
                }}
                onChangeText={value => setFirstName(value)}
              />
            </View>

            <View style={{}}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                value={phoneNumber}
                onChangeFormattedText={text => {
                  setphoneNumber(text);
                }}
                onChangeText={value => setphoneNumber(value)}
                placeholder="(201) 555-0128"
                placeholderTextColor="#000"
                defaultCode="FR"
                containerStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  color: '#000',
                  backgroundColor: 'transparent',
                  width: 370,
                }}
                codeTextStyle={{display: 'none'}}
                textContainerStyle={{
                  backgroundColor: 'transparent',
                  padding: 0,
                  color: '#fff',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}
                textInputStyle={{
                  borderWidth: 1,
                  height: 60,
                  paddingLeft: 16,
                  borderColor: '#AAB0B7',
                  color: '#fff',
                  borderRadius: 8,
                  backgroundColor: '#fff',
                }}
                flagButtonStyle={{
                  borderWidth: 1,
                  height: 60,
                  borderColor: '#AAB0B7',
                  borderRadius: 8,
                  backgroundColor: '#fff',
                }}
              />
            </View>

            <View style={{marginTop: 2}}>
              <TextInput
                placeholder="E-mail*"
                value={email}
                onChange={valueInput => {
                  setEmail(valueInput.nativeEvent.text.toString());
                }}
                onChangeText={value => setEmail(value)}
                style={{
                  borderWidth: 1,
                  borderColor: '#AAB0B7',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#AAB0B7',
                  paddingLeft: 15,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                }}
              />
            </View>

            <View style={{marginTop: 12}}>
              <TextInput
                placeholder="Mot de passe*"
                placeholderTextColor="#AAB0B7"
                value={password}
                style={{
                  borderWidth: 1,
                  borderColor: '#AAB0B7',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: '#000',
                  paddingLeft: 15,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                }}
                onChange={valueInput => {
                  setPassword(valueInput.nativeEvent.text.toString());
                }}
                onChangeText={value => setPassword(value)}
              />
            </View>

            <View style={{marginTop: 12}}>
              <TouchableOpacity onPress={() => showMode('date')}>
                <TextInput
                  placeholder="Date de naissance*"
                  placeholderTextColor="#AAB0B7"
                  editable={false}
                  style={{
                    borderWidth: 1,
                    borderColor: '#AAB0B7',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 14,
                    color: '#000',
                    paddingLeft: 15,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                  }}
                  value={text}
                  onChange={e => {
                    settext(e.nativeEvent.text.toString());
                  }}
                  onChangeText={value => settext(value)}
                />
                {show && (
                  <DateTimePicker
                    testID="DateTimePicker"
                    value={date}
                    mode={mode}
                    display={'default'}
                    onChange={onDateChange}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 24}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderColor: '#2BA6E9',
                      borderWidth: 2,
                      borderRadius: 7,
                      padding: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                    }}>
                    {isSelected ? (
                      <View
                        style={{
                          backgroundColor: '#2BA6E9',
                          width: 12,
                          height: 12,
                          borderRadius: 3,
                        }}></View>
                    ) : null}
                  </View>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    color: '#000',
                  }}>
                  Enregistrer les détails de la carte{' '}
                </Text>
              </View>
            </View>

            <View style={{marginTop: 27}}>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingBottom: 72,
                }}>
                <Button title="s'inscrire" navigation={handleSignUp} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingUpScreen;
