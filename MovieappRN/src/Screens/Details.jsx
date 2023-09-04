import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconn from 'react-native-vector-icons/Ionicons';
import BottomTabNav from '../Component/BottomTabNav';
const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  console.log('====================================');
  console.log("route",route);
  console.log('====================================');
//   console.log('====================================');
//   console.log('Details', item);
//   console.log('====================================');
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
            {item?.original_title}
          </Text>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          {/* Image background div */}
          <View
            style={{
              height: responsiveHeight(20),
              width: responsiveWidth(80),
              marginTop: responsiveHeight(4),
              justifyContent: 'center',
              // alignItems: 'center',
              marginLeft: responsiveWidth(7),
            }}>
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
              }}
              style={{
                width: responsiveWidth(86),
                height: responsiveHeight(24),
                // borderRadius: 14,
                justifyContent: 'center',
                alignContent: 'center',
                elevation: 25,
              }}
              imageStyle={{borderRadius: 35}}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: responsiveWidth(4),
                  marginTop: responsiveHeight(16),
                  fontFamily: 'Ubuntu-Bold',
                  fontSize: responsiveFontSize(2),
                }}>
                {`${item?.title}`}
              </Text>
              <View
                style={{
                  top: responsiveHeight(2.5),
                  marginLeft: responsiveWidth(6),
                  justifyContent: 'center',
                }}>
                <Icon name="star" size={15} style={{color: 'gold'}} />
                <Text
                  style={{
                    marginLeft: responsiveWidth(5),
                    bottom: responsiveHeight(2.1),
                    color: 'white',
                  }}>{`${item?.vote_average}`}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  alignItems: 'flex-start',
                  bottom: responsiveHeight(5.2),
                  right: responsiveWidth(5),
                }}>
                <Image
                  source={require('../Assets/play.png')}
                  style={{
                    height: responsiveHeight(5.4),
                    width: responsiveWidth(11.5),
                  }}
                />
              </View>
            </ImageBackground>
          </View>
          {/* title,overview etc */}
          <View
            style={{
              marginTop: responsiveHeight(3.8),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Ubuntu-Bold',
                fontSize: responsiveFontSize(2.4),
                textAlign: 'center',
              }}>
              {item?.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: responsiveHeight(0.8),
                alignItems: 'center',
              }}>
              <Text
                style={{color: 'darkgrey', fontSize: responsiveFontSize(1.5)}}>
                {item?.original_language === 'en'
                  ? 'English'
                  : item?.original_language}
              </Text>
              <View
                style={{
                  height: responsiveHeight(2),
                  width: responsiveWidth(0.2),
                  backgroundColor: 'darkgrey',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: responsiveWidth(0.5),
                }}
              />
              <Text
                style={{
                  color: 'darkgrey',
                  fontSize: responsiveFontSize(1.5),
                  marginLeft: responsiveWidth(0.8),
                }}>
                {item?.release_date}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'darkgrey',
                height: responsiveHeight(0.05),
                width: responsiveWidth(80),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: responsiveHeight(3),
              }}
            />
          </View>
          <View
            style={{
              marginTop: responsiveHeight(2.5),
              marginLeft: responsiveWidth(5),
              justifyContent: 'center',
              alignContent: 'center',
              marginRight: responsiveWidth(5),
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: 'white',
                fontFamily: 'Ubuntu-Medium',
                fontSize: responsiveFontSize(1.9),
              }}>
              Story line
            </Text>
            <Text
              style={{
                color: 'darkgrey',
                fontFamily: 'Ubuntu-Light',
                fontSize: responsiveFontSize(1.7),
                textAlign: 'left',
                marginTop: responsiveHeight(0.5),
              }}>
              {item?.overview}
            </Text>
          </View>
          <View
            style={{
              marginTop: responsiveHeight(3),
              //  marginRight: responsiveWidth(5),
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              right: responsiveWidth(1.5),
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Ubuntu-Medium',
                  fontSize: responsiveFontSize(2),
                }}>
                Popularity
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(1),
                  right: responsiveWidth(1),
                }}>
                {/* <Image
              source={require('../Assets/popularity.png')}
              style={{height: responsiveHeight(5), width: responsiveWidth(10)}}
            /> */}
                <Iconn name="flame" size={25} style={{color: 'darkorange'}} />
                <Text
                  style={{
                    color: 'darkgrey',
                    fontFamily: 'Ubuntu-Light',
                    fontSize: responsiveFontSize(2),
                    textAlignVertical: 'center',
                  }}>
                  {item?.popularity}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'darkgrey',
                height: responsiveHeight(8),
                width: responsiveWidth(0.1),
                //   marginLeft:responsiveWidth(3)
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Ubuntu-Medium',
                  fontSize: responsiveFontSize(2),
                }}>
                Rating
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(1),
                  right: responsiveWidth(1),
                }}>
                {/* <Image
              source={require('../Assets/popularity.png')}
              style={{height: responsiveHeight(5), width: responsiveWidth(10)}}
            /> */}
                <Iconn name="star" size={25} style={{color: 'yellow'}} />
                <Text
                  style={{
                    color: 'darkgrey',
                    fontFamily: 'Ubuntu-Light',
                    fontSize: responsiveFontSize(2),
                    textAlignVertical: 'center',
                    marginLeft: responsiveWidth(1),
                  }}>
                  {item?.vote_average}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={{marginBottom: responsiveHeight(3)}}>
        <BottomTabNav />
      </View> */}
    </View>
  );
};

export default Details;
