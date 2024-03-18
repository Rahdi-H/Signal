import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({message}) => {
    const isMe = message.user == 'me'
  return (
    <View style={[styles.container, {backgroundColor: isMe ? 'lightgray': '#3d7bff'},
    {marginLeft: isMe ? 'auto': 10},
    {marginRight: isMe ? 10 : 'auto'}
    ]}>
      <Text style={[styles.text, {color: isMe? 'black': 'white'}]}>{message.content}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "75%",
    }
})