import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const BottomTabNav = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState('');


  const handleItemPress = item => {
    if (item === selectedItem) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
    }
  
    if (item === 'item-1') {
      navigation.navigate('Home');
    } else if (item === 'item-2') {
      navigation.navigate('Home');
    } else if (item === 'item-3') {
      navigation.navigate('Home');
    } else {  
      navigation.navigate('Profile');
    }
  };
  
  // useEffect(()=>{

  // },[selectedItem])
  return (
    <View
      style={{
        backgroundColor: '#2F2D3B',
        height: responsiveHeight(6),
        width: responsiveWidth(100),
        // marginHorizontal: responsiveWidth(10),
        borderRadius: 20,
        bottom: responsiveHeight(1),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: responsiveHeight(0.8),
        }}>
        <TouchableOpacity onPress={() => handleItemPress('item-1')}>
          <Icon
            name={selectedItem === 'item-1' ? 'home' : 'home-outline'}
            size={responsiveHeight(4)}
            style={{color: 'white'}}
          />
          {selectedItem === 'item-1' && (
            <View
              style={{
                backgroundColor: 'white',
                height: 4,
                width: 4,
                borderRadius: 2,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:responsiveWidth(3.8)
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemPress('item-2')}>
          <Icon
            name={selectedItem === 'item-2' ? 'search' : 'search-outline'}
            size={responsiveHeight(4)}
            style={{color: 'white'}}
          />
          {selectedItem === 'item-2' && (
            <View
              style={{
                backgroundColor: 'white',
                height: 4,
                width: 4,
                borderRadius: 2,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:responsiveWidth(3.8)
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemPress('item-3')}>
          <Icon
            name={selectedItem === 'item-3' ? 'bookmark' : 'bookmark-outline'}
            size={responsiveHeight(4)}
            style={{color: 'white'}}
          />
          {selectedItem === 'item-3' && (
            <View
              style={{
                backgroundColor: 'white',
                height: 4,
                width: 4,
                borderRadius: 2,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:responsiveWidth(3.8)
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleItemPress('item-4')}>
          <Icon
            name={selectedItem === 'item-4' ? 'person' : 'person-outline'}
            size={responsiveHeight(4)}
            style={{color: 'white'}}
          />
          {selectedItem === 'item-4' && (
            <View
              style={{
                backgroundColor: 'white',
                height: 4,
                width: 4,
                borderRadius: 2,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:responsiveWidth(3.8)
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabNav;
