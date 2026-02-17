import { StyleSheet, Text, View, Button } from 'react-native'
import useUserStore from '@/hooks/use-userstore'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
    const { setIsGuest } = useUserStore()

  return (
    <SafeAreaView>
      <Text>My inside page</Text>
      <Button title="Go login" onPress={() => setIsGuest(false)} />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})