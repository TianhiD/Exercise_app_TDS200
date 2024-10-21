import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  PageWithoutURL: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Tab2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Tab 2 Screen</Text>
      <Button title="Go to Page without URL" onPress={() => navigation.navigate('PageWithoutURL')} />
    </View>
  );
}