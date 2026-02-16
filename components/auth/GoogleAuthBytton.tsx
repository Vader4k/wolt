import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const GoogleAuthBytton = () => {
    return (
        <TouchableOpacity style={styles.googleButton}>
            <Ionicons name="logo-google" size={18} color="white" />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: '#4285F4',
        padding: 17,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    },
    googleButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    }
})

export default GoogleAuthBytton

