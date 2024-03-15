import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Styles';

const ChatRoomItem = ({chatRoom}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.userImage} source={{uri: chatRoom.users[1].image}} />

        {chatRoom.newMessage && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessage}</Text>
        </View>}
        
        <View style={styles.rightContainer}>
            <View style={styles.userInfo}>
                <Text style={styles.name}>{chatRoom.users[1].name}</Text>
                <Text style={styles.lastMessage}>{chatRoom.lastMessageTime}</Text>
            </View>
            <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage}</Text>
        </View>
    </View>
  )
}

export default ChatRoomItem;