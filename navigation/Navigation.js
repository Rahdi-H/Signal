import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabOne from '../screens/Home';
import TabTwo from '../screens/TabTwo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const Tab = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Signal'>
            <Tab.Screen name='Signal' component={TabOne} options={{headerTitle: HomeHeader}}/>
            <Tab.Screen name='Non-Signal' component={TabTwo} />
            <Tab.Screen name='Message' component={ChatRoomScreen} options={{headerTitle: ChatRoomHeader, headerBackVisible: false}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
const HomeHeader = () => {
  const {width} = useWindowDimensions()
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '96%'}}>
      <Image source={{uri: 'https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'}} style={{height: 30, width: 30, borderRadius: 30}}/>
      <Text>Signal</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Feather name="camera" size={24} color="black" />
        <FontAwesome name="pencil" size={24} color="black" />
      </View>
    </View>
  )
}
const ChatRoomHeader = (props) => {
  const {width} = useWindowDimensions()
  console.log(props);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '96%'}}>
      <Image source={{uri: 'https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'}} style={{height: 30, width: 30, borderRadius: 30}}/>
      <Text>{props.children}</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Feather name="camera" size={24} color="black" />
        <FontAwesome name="pencil" size={24} color="black" />
      </View>
    </View>
  )
}