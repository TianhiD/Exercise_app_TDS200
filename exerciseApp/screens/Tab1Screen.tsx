import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Page1: undefined;
  Page2: { id: number };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

function Tab1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Tab 1 Screen</Text>
      <Button title="Go to Page 1" onPress={() => navigation.navigate('Page1')} />
      <Button title="Go to Page 2" onPress={() => navigation.navigate('Page2', { id: 1 })} />
    </View>
  );
}

export default Tab1Screen;