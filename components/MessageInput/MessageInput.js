import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('')
    function sendMessage() {
        console.warn("Message sent");
        setMessage("")
    }
    function plusClicked() {
        console.log("Plus clicked");
    }
    const Pressed = () => {
        if (message) {
            sendMessage()
        } else {
            plusClicked()
        }
    }
  return (
    <View style={styles.root}>
        <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="gray" />
            <TextInput style={{flex: 1, marginLeft: 5}}
                placeholder='Signal message'
                value={message}
                onChangeText={setMessage}
            />
            <Ionicons name="camera-outline" size={24} color="gray" style={{marginHorizontal: 5}} />
            <SimpleLineIcons name="microphone" size={24} color="gray" />
        </View>
        <View style={styles.buttonConainer}>
            <Pressable onPress={()=> Pressed()}>
            {
                message ? 
                <MaterialCommunityIcons name="send" size={24} color="black" />
                :
                <FontAwesome6 name="plus" size={24} color="black" />
            }
            </Pressable>
        </View>
    </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    inputContainer: {
        flex: 1,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 50,
        flexDirection: 'row'
    },
    buttonConainer: {
        marginLeft: 10,
        backgroundColor: 'lightblue',
        padding: 10,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})