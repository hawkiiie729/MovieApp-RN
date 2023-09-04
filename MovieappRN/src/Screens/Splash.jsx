import {View, Text, Image} from 'react-native';
import React, { useEffect } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate('Signup')
    },3000)
  },[])


  return (
    <View style={{backgroundColor: '#1F1C2C', height: responsiveHeight(100)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: responsiveHeight(42),
          marginHorizontal: responsiveWidth(5),
        }}>
        <Image
          source={require('../Assets/watching-a-movie.png')}
          style={{
            height: responsiveHeight(11),
            width: responsiveWidth(18.5),
            // marginLeft: responsiveWidth(14),
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            height: responsiveHeight(10),
            width: responsiveWidth(0.2),
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: responsiveFontSize(6),
            fontFamily: 'Ubuntu-Light',
            fontWeight: '100',
            fontStyle: 'normal',
            textAlignVertical: 'center',
          }}>
          badflix
        </Text>
      </View>
    </View>
  );
};

export default Splash;
