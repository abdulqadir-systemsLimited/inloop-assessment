import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import colors from '../utils/colors';
import { StyleSheet } from 'react-native';
import FeedbackScreen from '../screens/feedback/feedbackScreen';
import TrendingGifScreen from '../screens/trending/TrendingScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.textColor,
        tabBarInactiveTintColor: colors.darkGrey,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: colors.error,
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: colors.error,
        },
      })}>
      <Tab.Screen name="GIFs" component={TrendingGifScreen} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default MainNavigation;
const styles = StyleSheet.create({
  tabIcon: {},
});
