import { Colors } from '@/constants/theme'
import { useRestaurantMarkers, useRestaurants } from '@/hooks/use-restaurants'
import { Ionicons } from '@expo/vector-icons'
import * as Location from 'expo-location'
import { useRouter } from 'expo-router'
import React, { useRef } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Map = () => {
    const router = useRouter()
    const insets = useSafeAreaInsets()
    const mapRef = useRef<MapView>(null)

    const { data: restaurants, isLoading: restaurantsLoading } = useRestaurants()
    const { data: restaurantsMarkers, isLoading: restaurantsMarkersLoading } = useRestaurantMarkers()

    const markers = restaurantsMarkers?.map((marker) => ({
        id: marker.id,
        coordinate: {
            latitude: marker.latitude,
            longitude: marker.longitude
        },
        title: marker.name
    })) || []

    const locateMe = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        let location = await Location.getCurrentPositionAsync();
        mapRef.current?.animateToRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        })
    }

    if (restaurantsLoading || restaurantsMarkersLoading) {
        return (
            <View>
                <ActivityIndicator size={'large'} color={Colors.secondary} />
            </View>
        )
    }

    const markerSelected = (e) => {
        console.log(e)
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                showsUserLocation
                showsMyLocationButton={false}
                initialRegion={{
                    latitude: 51.9607,
                    longitude: 7.6261,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.coordinate}
                        title={marker.title}
                    />
                ))}
            </MapView>

            <TouchableOpacity style={[styles.locateButton, { bottom: insets.bottom + 20 }]} onPress={locateMe}>
                <Ionicons name="navigate" size={24} color={Colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    locateButton: {
        position: 'absolute',
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})