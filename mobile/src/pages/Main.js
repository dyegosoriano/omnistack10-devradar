import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

export default function Main () {
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitialPosition () {
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }  
    loadInitialPosition()
  }, [])
    
  if (!currentRegion) {
    return null
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{latitude: -12.992635, longitude: -38.5057234}}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/4140145?s=400&u=d2c245d62a73752fa034546e277d637cca37dc59&v=4' }}/>
        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>Dyego Soriano</Text>
            <Text style={styles.devBio}>Biografia</Text>
            <Text style={styles.devTechs}>Node.JS, ReactJS, React Native</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}


const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#7d40e7'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  }

})