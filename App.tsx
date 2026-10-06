import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Screen01 from './screens/Screen01';
import Screen02 from './screens/Screen02';
import Screen03 from './screens/Screen03';

export type RootStackParamList = {
  Screen01: undefined;
  Screen02: undefined;
  Screen03: {
    bike: {
      id: string;
      name: string;
      price: number;
      image: any;
    };
  };
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen01"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Screen01"
          component={Screen01}
        />

        <Stack.Screen
          name="Screen02"
          component={Screen02}
        />

        <Stack.Screen
          name="Screen03"
          component={Screen03}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}