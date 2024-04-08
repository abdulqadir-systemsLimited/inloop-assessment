// App.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MainNavigation from './navigation';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <MainNavigation />
  );
};

export default App;