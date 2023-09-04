import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#1F1C2C',
        height: responsiveHeight(100),
      }}>
      <View
        style={{
          marginTop: responsiveHeight(1.5),
          marginLeft: responsiveWidth(2.5),
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Icon name="arrowleft" size={30} style={{color: 'white'}} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: responsiveFontSize(2.5),
            textAlignVertical: 'center',
            marginLeft: responsiveWidth(2),
            fontFamily: 'Ubuntu-Bold',
          }}>
          Login
        </Text>
      </View>
      <View style={{marginTop: responsiveHeight(4), flexDirection: 'column'}}>
        <Text style={{color: 'grey', marginLeft: responsiveWidth(4)}}>
          Log In with one of following options
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: responsiveHeight(5),
          }}>
          <View
            style={{
              height: responsiveHeight(9),
              backgroundColor: '#353341',
              width: responsiveWidth(45),
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="apple1" size={35} style={{color: 'white'}} />
          </View>
          <View
            style={{
              height: responsiveHeight(9),
              backgroundColor: '#353341',
              width: responsiveWidth(45),
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="google" size={35} style={{color: 'white'}} />
          </View>
        </View>
        <View style={{flexDirection: 'column', marginTop: responsiveHeight(8)}}>
          <View
            style={{
              marginHorizontal: responsiveWidth(6),
              alignItems: 'flex-start',
              marginBottom: responsiveHeight(1.5),
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Ubuntu-Medium',
                fontSize: responsiveFontSize(2.2),
                marginLeft: responsiveWidth(1),
                marginBottom: responsiveHeight(0.5),
              }}>
              Email
            </Text>
            <TextInput
              style={{
                backgroundColor: '#353341',
                width: responsiveWidth(87),
                height: responsiveHeight(6),
                borderRadius: 14,
                paddingHorizontal: 10,
              }}
              placeholder="enter your email"
            />
          </View>
          <View
            style={{
              marginHorizontal: responsiveWidth(6),
              alignItems: 'flex-start',
              marginBottom: responsiveHeight(1.5),
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Ubuntu-Medium',
                fontSize: responsiveFontSize(2.2),
                marginLeft: responsiveWidth(1),
                marginBottom: responsiveHeight(0.5),
              }}>
              PassWord
            </Text>
            <TextInput
              style={{
                backgroundColor: '#353341',
                width: responsiveWidth(87),
                height: responsiveHeight(6),
                borderRadius: 14,
                paddingHorizontal: 10,
              }}
              placeholder="enter your password"
            />
          </View>
          <TouchableOpacity
            style={{
              height: responsiveHeight(6),
              backgroundColor: '#976E60',
              width: responsiveWidth(85),
              borderRadius: 14,
              marginHorizontal: responsiveWidth(7.5),
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: responsiveHeight(3),
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: responsiveFontSize(2),
                fontFamily: 'Ubuntu-Light',
                fontWeight: '700',
                color: 'white',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: responsiveHeight(5),
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Ubuntu-Bold',
                  textAlignVertical: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                {'Signup'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
