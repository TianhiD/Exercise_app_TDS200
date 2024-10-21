import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab2Screen from '@/screens/Tab2Screen';
import Page1Screen from '@/screens/Page1Screen';
import Page2Screen from '@/screens/Page2Screen';
import PageWithoutURL from '@/screens/PageWithoutURL';

type RootStackParamList = {
  Tab2: undefined;
  Page1: undefined;
  Page2: { id: number };
  PageWithoutURL: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab2" component={Tab2Screen} />
      <Stack.Screen name="Page1" component={Page1Screen} />
      <Stack.Screen name="Page2" component={Page2Screen} />
      <Stack.Screen name="PageWithoutURL" component={PageWithoutURL} />
    </Stack.Navigator>
  );
}