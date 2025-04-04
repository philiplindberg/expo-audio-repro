import { View, StyleSheet, Button } from 'react-native'
import { useAudioPlayer } from 'expo-audio'
import { useEventListener } from 'expo'
import { useState } from 'react'

export default function App() {
  const player = useAudioPlayer(require('./assets/audio/iphone.mp3'))

  const [playing, setPlaying] = useState(false)

  useEventListener(player, 'playbackStatusUpdate', (status) => {
    if (status.playing) setPlaying(true)
    if (status.didJustFinish) setPlaying(false)
  })

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          title={playing ? 'Playing...' : 'Play Sound'}
          onPress={() => {
            player.seekTo(0)
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
