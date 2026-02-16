import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    cancelAnimation,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming
} from 'react-native-reanimated';

const iconDataSet = {
    set1: [
        { emoji: '🍕', color: '#FFD700' },
        { emoji: '🍔', color: '#F4D03F' },
        { emoji: '🍟', color: '#F8D7DA' },
        { emoji: '🌮', color: '#D5EDDA' },
        { emoji: '🍗', color: '#FADBD8' },
    ],
    set2: [
        { emoji: '🎮', color: '#D1ECF1' },
        { emoji: '🎧', color: '#E2E3E5' },
        { emoji: '🍵', color: '#F4D03F' },
        { emoji: '🍿', color: '#FFE5CC' },
        { emoji: '🥛', color: '#F8D7DA' },
    ],
    set3: [
        { emoji: '🍰', color: '#FADBD8' },
        { emoji: '🍦', color: '#D1ECF1' },
        { emoji: '🍪', color: '#FFE5CC' },
        { emoji: '🎲', color: '#D5EDDA' },
        { emoji: '🎛️', color: '#E2E3E5' },
    ]
}

const ITEM_HEIGHT = 160;
const ITEM_GAP = 10;
const SCROLL_SPEED = 50; // Pixels per second

interface InfiniteScrollProps {
    scrollDirection?: 'up' | 'down';
    iconSet?: 'set1' | 'set2' | 'set3';
}

const InfiniteScroll = ({ scrollDirection = 'up', iconSet = 'set1'}: InfiniteScrollProps) => {
    const translateY = useSharedValue(0);
    const iconData = iconDataSet[iconSet];
    // Duplicate data enough times to cover the scroll area and allow loop
    const items = [...iconData, ...iconData, ...iconData];

    // Calculate the height of one complete set including gaps
    const oneSetHeight = iconData.length * (ITEM_HEIGHT + ITEM_GAP);

    useEffect(() => {
        const duration = (oneSetHeight / SCROLL_SPEED) * 1000;

        if (scrollDirection === 'up') {
            // Move from 0 to -oneSetHeight
            translateY.value = 0;
            translateY.value = withRepeat(
                withTiming(-oneSetHeight, {
                    duration: duration,
                    easing: Easing.linear,
                }),
                -1, // Infinite
                false // Do not reverse
            );
        } else {
            // Move from -oneSetHeight to 0
            translateY.value = -oneSetHeight;
            translateY.value = withRepeat(
                withTiming(0, {
                    duration: duration,
                    easing: Easing.linear,
                }),
                -1,
                false
            );
        }

        return () => {
            cancelAnimation(translateY);
        };
    }, [scrollDirection, oneSetHeight]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={styles.overflowContainer}>
            <Animated.View style={[styles.container, animatedStyle]}>
                {items.map((item, i) => (
                    <View key={i} style={[styles.iconContainer, { backgroundColor: item.color }]}>
                        <Text style={styles.emoji}>{item.emoji}</Text>
                    </View>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    overflowContainer: {
        height: '100%',
        width: 170, // Ensure width matches content to prevent shrinking
        overflow: 'hidden',
    },
    container: {
        gap: ITEM_GAP,
        paddingVertical: 20
    },
    iconContainer: {
        height: ITEM_HEIGHT,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    emoji: {
        fontSize: 50,
        color: '#000',
    }
})

export default InfiniteScroll