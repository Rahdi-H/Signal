import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';

const chatRoom1 = {
    users: {
        0: {
            name: 'Rahdin Hussain',
            image: 'https://media.licdn.com/dms/image/D5603AQFwC8heRKuuaA/profile-displayphoto-shrink_800_800/0/1710179880773?e=1715817600&v=beta&t=ahWZMhnbrtBoMu-xYOAwnGg0OCH4udQiKW5jCyqvluU'
        },
        1: {
            name: 'Avin Qaur',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    },
    lastMessage: 'Hey! Whats up?',
    lastMessageTime: '09:02 AM',
    newMessage: 3
}
const chatRoom2 = {
    users: {
        0: {
            name: 'Rahdin Hussain',
            image: 'https://media.licdn.com/dms/image/D5603AQFwC8heRKuuaA/profile-displayphoto-shrink_800_800/0/1710179880773?e=1715817600&v=beta&t=ahWZMhnbrtBoMu-xYOAwnGg0OCH4udQiKW5jCyqvluU'
        },
        1: {
            name: 'Almas Jacob',
            image: 'https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'
        }
    },
    lastMessage: 'did you checked the email',
    lastMessageTime: '09:02 AM',
}
const i = [chatRoom1, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2, chatRoom2]
const TabOne = () => {
  return (
    <View style={styles.page}>
        <FlatList 
            data={i}
            renderItem={({item}) =>  <ChatRoomItem chatRoom={item} />}
        />
    </View>
  )
}

export default TabOne;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    }
})