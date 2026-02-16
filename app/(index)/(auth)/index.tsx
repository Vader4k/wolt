import { StyleSheet, Text, View, Button } from 'react-native'
import useUserStore from '@/hooks/use-userstore'

const index = () => {
    const { setIsGuest } = useUserStore()

  return (
    <View>
      <Text>My inside page</Text>
      <Button title="Go login" onPress={() => setIsGuest(false)} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})