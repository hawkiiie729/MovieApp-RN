import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BottomTabNav from '../Component/BottomTabNav';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: responsiveHeight(100), backgroundColor: '#1F1C2C'}}>
      <View style={{height: responsiveHeight(94)}}>
        <View
          style={{
            marginTop: responsiveHeight(1.5),
            marginLeft: responsiveWidth(2.5),
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
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
            Profile and Setting
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(5),
            justifyContent: 'space-evenly',
          }}>
          {/* image container */}
          <View style={{flexDirection: 'column',elevation:12}}>
            <Image
              source={require('../Assets/profilepic.jpeg')}
              style={{
                height: responsiveHeight(12),
                width: responsiveWidth(25),
                borderRadius: 55,
                
              }}
            />
            <Text style={{color: 'white', fontFamily: 'Ubuntu-Regular',textAlign:'center',marginTop:responsiveHeight(1)}}>
              Sudhanshu
            </Text>
          </View>
          {/* vertical line */}
          <View
            style={{
              backgroundColor: 'white',
              height: responsiveHeight(12),
              width: responsiveWidth(0.1),
            }}
          />
          <View style={{justifyContent: 'center',alignItems:'center'}}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Ubuntu-Medium',
                fontSize: responsiveFontSize(1.9),
                textAlignVertical:'center',
                marginBottom:responsiveHeight(2.2)
              }}>{`Joined\n3 months ago`}</Text>
          </View>
        </View>
      </View>
      {/* <View style={{marginBottom: responsiveHeight(3)}}>
        <BottomTabNav />
      </View> */}
    </View>
  );
};

export default Profile;
