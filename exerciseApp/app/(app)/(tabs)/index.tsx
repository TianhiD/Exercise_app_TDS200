import { Image, StyleSheet, Platform, FlatList, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const photos = [
  { id: '1', uri: 'https://via.placeholder.com/150/0000FF/808080?text=Photo1' },
  { id: '2', uri: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Photo2' },
  { id: '3', uri: 'https://via.placeholder.com/150/00FF00/000000?text=Photo3' },
  { id: '4', uri: 'https://via.placeholder.com/150/FFFF00/000000?text=Photo4' },
  { id: '5', uri: 'https://via.placeholder.com/150/FF00FF/000000?text=Photo5' },
  { id: '6', uri: 'https://via.placeholder.com/150/00FFFF/000000?text=Photo6' },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#d8f2c9', dark: '#749163' }}
      headerImage={
        <Ionicons name="camera" size={100} color="white" style={styles.logo} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">TravelSnap</ThemedText>
      </ThemedView>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image source={{ uri: item.uri }} style={styles.photo} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.photoGrid}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: Platform.select({ ios: 70, android: 50 }),
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  photoGrid: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#c2c7bf',

  },
  photoContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', 
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 10, 
  },
});