import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabOne from '../screens/Home';
import TabTwo from '../screens/TabTwo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Signal' component={TabOne} />
            <Tab.Screen name='Non-Signal' component={TabTwo} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;