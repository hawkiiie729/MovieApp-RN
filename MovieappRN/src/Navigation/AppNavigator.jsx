import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Profile from '../Screens/Profile';
import BottomTabNav from '../Component/BottomTabNav';
const Stack = createNativeStackNavigator();

// const AuthStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name={'Splash'}
//       component={Splash}
//       options={{ headerShown: false }}
//     />
//     <Stack.Screen
//       name={'Signup'}
//       component={Signup}
//       options={{ headerShown: false }}
//     />
//     <Stack.Screen
//       name={'Login'}
//       component={Login}
//       options={{ headerShown: false }}
//     />
//     {setIsAuthenticated(!isAuthenticated)}
//   </Stack.Navigator>
// );



const AppNavigator = () => {
  console.log('stck',Stack.Navigator.name)
  return (
    <NavigationContainer>
       <Stack.Navigator>
        {/* Screens without the bottom tab */}
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Signup'}
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{ headerShown: false }}
        />

        {/* Screens with the bottom tab */}
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Details'}
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Profile'}
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {/* Conditionally render the bottom tab only for specific screens */}
      
      {Stack.Navigator.name.includes(['Home','Details','Profile']) && <BottomTabNav/>}
    </NavigationContainer>
  );
};
const MainStack = () => (
  <>
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Details'}
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    <BottomTabNav />
  </>
);

export default AppNavigator;
