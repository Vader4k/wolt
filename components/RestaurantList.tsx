import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { FlatList } from 'react-native'
import { useRestaurants } from '@/hooks/use-restaurants'
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

const RestaurantList = () => {

    const { data: restaurants, isLoading, error } = useRestaurants();

    if (isLoading) {
        return <View>
            <ActivityIndicator size="large" color={Colors.secondary} />
        </View>
    }

    if (error) {
        return <Text>Error: {error.message}</Text>
    }

    return (
        <>
            {restaurants?.map((item) => (
                <View key={item.id}>
                    <TouchableOpacity style={styles.card}>
                        <Image source={item.image ?? ''} style={styles.image} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                        </View>

                        <View style={styles.metadata}>
                             <Ionicons name='bicycle-outline' size={16} color={'#666'}/>
                             <Text style={styles.metadataText}>{item.deliveryFee.toFixed(2)}</Text>
                              <Text style={styles.dot}>•</Text>
                              <Text style={styles.metadataText}>$$$$</Text>
                              <Text style={styles.dot}>•</Text>
                              <Ionicons name='happy-outline' size={16} color={'#666'}/>
                              <Text style={styles.metadataText}>{item.rating}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </>

    )
}

export default RestaurantList

const styles = StyleSheet.create({
    card: {
        margin: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.light,
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',  
        height: 180,
    },
    infoContainer: {
        padding: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    metadata: {
        borderTopColor: Colors.light,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        padding: 10,
    },
    metadataText: {
        fontSize: 14,
        color: '#666',
    },
    dot: {
        fontSize: 14,
        color: '#999',
    }
})