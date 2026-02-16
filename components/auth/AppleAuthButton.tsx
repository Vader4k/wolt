import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const AppleAuthButton = () => {
    return (
        <TouchableOpacity style={styles.appleButton}>
            <Ionicons name="logo-apple" size={18} color="white" />
            <Text style={styles.appleButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appleButton: {
        backgroundColor: '#000',
        padding: 17,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
    },
    appleButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    }
})

export default AppleAuthButton