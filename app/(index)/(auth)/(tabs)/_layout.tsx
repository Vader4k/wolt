import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Tabs } from 'expo-router'

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarLabelStyle: {
        fontSize: 9,
        fontWeight: '600',
      }
    }}>
      <Tabs.Screen name="discovery"
        options={{
          title: "Discovery",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { height: 113 },
          tabBarIcon: (props: { color: string, size: number, focused: boolean }) => (
            <Ionicons name={props.focused ? "compass" : "compass-outline"} size={props.size} color={props.color} />
          )
        }} />
      <Tabs.Screen name="restaurants"
        options={{
          title: "Restaurants",
          headerShown: false,
          tabBarIcon: (props: { color: string, size: number }) => (
            <MaterialIcons name="restaurant" size={props.size} color={props.color} />
          )
        }} />
      <Tabs.Screen name="stores"
        options={{
          title: "Stores",
          headerShown: false,
          tabBarIcon: (props: { color: string, size: number, focused: boolean }) => (
            <Ionicons name={props.focused ? "storefront" : "storefront-outline"} size={props.size} color={props.color} />
          )
        }} />
      <Tabs.Screen name="search"
        options={{
          title: "Search",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { height: 113 },
          tabBarIcon: (props: { color: string, size: number, focused: boolean }) => (
            <FontAwesome5 name={props.focused ? "search-location" : "search"} size={props.size} color={props.color} />
          )
        }} />
      <Tabs.Screen name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: (props: { color: string, size: number, focused: boolean }) => (
            <Ionicons name={props.focused ? "person" : "person-outline"} size={props.size} color={props.color} />
          )
        }} />
    </Tabs>
  )
}

export default Layout