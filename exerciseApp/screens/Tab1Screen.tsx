import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Tab 1 Screen</Text>
      <Button title="Go to Page 1" onPress={() => navigation.navigate('Page1')} />
      <Button title="Go to Page 2" onPress={() => navigation.navigate('Page2', { id: 1 })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});

export default Tab1Screen;