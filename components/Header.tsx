import { Colors, Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  scrollOffset: SharedValue<number>
}

const SCROLL_THRESHOLD = 60;

const Header = ({ title, scrollOffset }: HeaderProps) => {
  const inset = useSafeAreaInsets()

  const header1Style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD * 0.6],
      [1, 0],
      Extrapolation.CLAMP
    )

    return {
      opacity,
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [0, SCROLL_THRESHOLD],
            [0, -10],
            Extrapolation.CLAMP
          )
        }
      ]
    }
  })

  const header2Style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    )

    return {
      opacity,
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD],
            [-10, 0],
            Extrapolation.CLAMP
          )
        }
      ]
    }
  })

  const shadowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_THRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    )

    return {
      shadowOpacity: opacity * 0.1,
      elevation: opacity * 4,
    }
  })
  return (
    <Animated.View style={[styles.headerContainer, { paddingTop: inset.top }, shadowStyle]}>
      {/* Header 1 */}
      <Animated.View style={[styles.header1, header1Style]}>
        <Link href={'/(index)/(auth)/(modals)/Location'} asChild>
          <TouchableOpacity style={styles.locationButton}>
            <View style={styles.locationIconContainer}>
              <Ionicons name='business-outline' size={16} />
            </View>
            <Text style={styles.locationText}>Münster</Text>
            <Ionicons name='chevron-down' size={16} />
          </TouchableOpacity>
        </Link>

        <View style={styles.headerLeft}>
          <Link href={'/(index)/(auth)/(modals)/Filter'} asChild>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name='filter' size={20} />
            </TouchableOpacity>
          </Link>
          <Link href={'/(index)/(auth)/(modals)/Map'} asChild>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name='map-outline' size={20} />
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>

      {/* Header 2 */}
      <Animated.View style={[styles.header2, header2Style]}>
        <View style={styles.centerContent}>
          <Text style={styles.titleSmall}>{title}</Text>
          <Link href={'/(index)/(auth)/(modals)/Location'} asChild>
            <TouchableOpacity style={styles.locationSmall}>
              <Text style={styles.locationSmallText}>Münster</Text>
              <Ionicons name='chevron-down' size={14} />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.rightIcons}>
          <Link href={'/(index)/(auth)/(modals)/Filter'} asChild>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name='filter' size={20} />
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>
    </Animated.View >
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: 120,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    gap: 6,
  },
  locationIconContainer: {
    backgroundColor: Colors.light,
    padding: 10,
    borderRadius: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  locationSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationSmallText: {
    fontSize: 12,
    fontFamily: Fonts.brandBold,
    color: Colors.muted,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 8,
  }
})