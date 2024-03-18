import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Message from '../components/Message/Message'
import MessageInput from '../components/MessageInput/MessageInput'
import { useNavigation, useRoute } from '@react-navigation/native'

const Messages = [
    {
        user: 'me',
        content: 'Hey! how are you?'
    },
    {
        user: 'him',
        content: 'Im good. How about you?'
    },
    {
        user: 'me',
        content: 'Im fine. Good to know that'
    }
]

const ChatRoomScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  navigation.setOptions({title: 'Rahdin Hussain'})
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    keyboardVerticalOffset={90}
    style={styles.container}>
      <FlatList 
      data={Messages}
      renderItem={({item}) => <Message message={item}/>}
      inverted
      />
      <MessageInput />
    </KeyboardAvoidingView>
  )
}

export default ChatRoomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})