import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Fonts } from '@/constants/theme'
import Header from '@/components/Header'
import { useSharedValue } from 'react-native-reanimated'
import { CategoryList } from '@/components/CategoryList'
import RestaurantList from '@/components/RestaurantList'

const HEADER_HEIGHT = 70

const Stores = () => {
    const inset = useSafeAreaInsets()
    const scrollOffset = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = event.contentOffset.y
        }
    })

    return (
        <View style={styles.container}>
            <Header title='Stores' scrollOffset={scrollOffset} />
            <Animated.ScrollView showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentContainerStyle={{
                    paddingTop: inset.top + HEADER_HEIGHT,
                }}
            >
                <Text style={styles.title}>Stores</Text>
                <CategoryList />

                <Text style={styles.allStoresTitle}>All stores</Text>
                <RestaurantList />
            </Animated.ScrollView>
        </View>
    )
}

export default Stores

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontFamily: Fonts.brandBlack,
        marginBottom: 8,
        fontWeight: '900',
        color: '#000',
        paddingHorizontal: 16,
    },
    allStoresTitle: {
        fontSize: 20,
        fontFamily: Fonts.brandBold,
        paddingHorizontal: 16,
        marginBottom: 16,
    }
})