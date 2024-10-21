import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Page1: undefined;
  Page2: { id: number };
  PageWithoutURL: undefined;
};

type Page2ScreenRouteProp = RouteProp<RootStackParamList, 'Page2'>;

type Props = {
  route: Page2ScreenRouteProp;
};

export default function Page2Screen({ route }: Props) {
  const { id } = route.params;
  return (
    <View>
      <Text>Page 2 Screen with ID: {id}</Text>
    </View>
  );
}