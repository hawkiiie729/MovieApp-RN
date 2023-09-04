import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {Screen} from 'react-native-screens';
import BottomTabNav from '../Component/BottomTabNav';
import Details from './Details';
import {useNavigation} from '@react-navigation/native';

const API_KEY = 'c8b9b9f05ec2fc54c11736def6282932';
const BASE_URL = 'https://api.themoviedb.org/3';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('item-1');
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const navigation = useNavigation();
  const handleItemPress = item => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const getDetails = item => {
    navigation.navigate('Details', {item});
  };

  const upcomingMoviess = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
        params: {
          api_key: API_KEY,
        },
      });
      setUpcomingMovies(response?.data?.results);
      console.log('====================================');
      console.log('res', response?.data?.results);
      console.log('====================================');
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  const getPopularTv = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tv/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      setTv(response?.data?.results);
      // console.log('====================================');
      // console.log('res', response?.data?.results);
      // console.log('====================================');
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  const getPopularMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      //   console.log('res', response?.data?.results);

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  useEffect(() => {
    getPopularMovies();
    getPopularTv();
    upcomingMoviess();
  }, []);

  return (
    <View style={{height: responsiveHeight(100), backgroundColor: '#1F1C2C'}}>
      <View
        style={{
          backgroundColor: '#1F1C2C',
          height: responsiveHeight(94),
          marginBottom: responsiveHeight(1),
        }}>
        <View
          style={{
            marginTop: responsiveHeight(1.5),
            marginLeft: responsiveWidth(2.4),
            height: responsiveHeight(4),
          }}>
          <Text
            style={{
              fontFamily: 'Ubuntu-Medium',
              fontSize: responsiveFontSize(2.3),
              color: 'white',
            }}>
            Hi,Sudhanshu
          </Text>
        </View>

        <View
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          style={{
            height: responsiveHeight(6.5),
            width: responsiveWidth(100),
            flexDirection: 'row',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderBottomWidth: 8,
            borderBottomColor: '#1F1C2C',
          }}>
          <TouchableOpacity onPress={() => handleItemPress('item-1')}>
            <View
              style={{
                backgroundColor: selectedItem === 'item-1' ? '#793B2C' : '#000',
                height: responsiveHeight(3),
                width: responsiveWidth(18),
                borderRadius: 14,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
                alignItems: 'center',
              }}>
              {/* <Text
              style={{
                textAlign: 'center',
                fontSize: responsiveFontSize(1.7),
                fontFamily: 'Ubuntu-Regular',
                textAlignVertical: 'center',
              }}>
              All
            </Text> */}
              <Icon name="home" size={18} style={{color: 'white'}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleItemPress('item-2')}>
            <View
              style={{
                // backgroundColor: '#793B2C',
                height: responsiveHeight(3),
                width: responsiveWidth(18),
                borderRadius: 14,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
                backgroundColor: selectedItem === 'item-2' ? '#793B2C' : '#000',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: responsiveFontSize(1.7),
                  fontFamily: 'Ubuntu-Regular',
                  textAlignVertical: 'center',
                  color: 'white',
                }}>
                Comedy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleItemPress('item-3')}>
            <View
              style={{
                backgroundColor: selectedItem === 'item-3' ? '#793B2C' : '#000',
                height: responsiveHeight(3),
                width: responsiveWidth(18),
                borderRadius: 18,
                marginVertical: responsiveHeight(2.5),
                marginLeft: responsiveWidth(4),
                justifyContent: 'center',
                marginRight: responsiveWidth(4),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: responsiveFontSize(1.7),
                  fontFamily: 'Ubuntu-Regular',
                  textAlignVertical: 'center',
                  color: 'white',
                }}>
                Action
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: '#793B2C',
              height: responsiveHeight(3),
              width: responsiveWidth(18),
              borderRadius: 14,
              marginVertical: responsiveHeight(2.5),
              marginLeft: responsiveWidth(4),
              justifyContent: 'center',
              marginRight: responsiveWidth(4),
            }}>
            <Icon name="funnel" size={18} style={{color: 'white'}} />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, overflow: 'hidden'}}
          style={{overflow: 'hidden', paddingBottom: 16}}>
          <View
            style={{
              //   width: responsiveWidth(100),
              //   height: responsiveHeight(15),
              marginTop: responsiveHeight(2.3),
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: responsiveWidth(1),
            }}>
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movies[4]?.poster_path}`,
              }}
              //   onError={() =>
              //     console.log(
              //       `Failed to load image for movie with ID ${item?.id}`,
              //     )
              //   }
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
                {`${movies[4]?.title}`}
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
                  }}>{`${movies[4]?.vote_average}`}</Text>
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
          <View
            style={{
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(4),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontFamily: 'Ubuntu-Bold',
                color: 'white',
              }}>
              Popular Movies
            </Text>
          </View>
          <View style={{height: responsiveHeight(24)}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: responsiveHeight(3.5)}}>
              {movies?.map(item => (
                <View
                  key={item?.id}
                  style={{
                    marginHorizontal: responsiveWidth(3.5),
                    elevation: 20,
                  }}>
                  <TouchableOpacity onPress={() => getDetails(item)}>
                    <ImageBackground
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                      }}
                      style={{
                        height: responsiveHeight(20),
                        width: responsiveWidth(25),
                      }}
                      imageStyle={{borderRadius: 14}}></ImageBackground>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(4),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontFamily: 'Ubuntu-Bold',
                color: 'white',
              }}>
           Upcoming Movies
            </Text>
          </View>
          <View style={{height: responsiveHeight(24)}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: responsiveHeight(3.5)}}>
              {upcomingMovies?.map(item => (
                <View
                  key={item?.id}
                  style={{
                    marginHorizontal: responsiveWidth(3.5),
                    elevation: 20,
                  }}>
                  <TouchableOpacity onPress={() => getDetails(item)}>
                    <ImageBackground
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                      }}
                      style={{
                        height: responsiveHeight(20),
                        width: responsiveWidth(25),
                      }}
                      imageStyle={{borderRadius: 14}}></ImageBackground>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(4),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontFamily: 'Ubuntu-Bold',
                color: 'white',
              }}>
             Popular Tv
            </Text>
          </View>
          <View style={{height: responsiveHeight(24)}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: responsiveHeight(3.5)}}>
              {tv?.map(item => (
                <View
                  key={item?.id}
                  style={{
                    marginHorizontal: responsiveWidth(3.5),
                    elevation: 20,
                  }}>
                  <TouchableOpacity onPress={() => getDetails(item)} >
                    <ImageBackground
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
                      }}
                      style={{
                        height: responsiveHeight(20),
                        width: responsiveWidth(25),
                      }}
                      imageStyle={{borderRadius: 14}}></ImageBackground>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      {/* <View style={{marginBottom: responsiveHeight(3)}}>
        <BottomTabNav />
      </View> */}
    </View>
  );
};

export default Home;
