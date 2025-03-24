import { View, StyleSheet, Button } from 'react-native'
import { useAudioPlayer } from 'expo-audio'

export default function App() {
  const player = useAudioPlayer()

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          title='Play Sound 1'
          onPress={() => {
            player.replace(require('./assets/audio/iphone.mp3'))
            player.play()
          }}
        />
        <Button
          title='Play Sound 2'
          onPress={() => {
            player.replace(require('./assets/audio/nokia.mp3'))
            player.play()
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  buttons: {
    rowGap: 20,
  },
})
