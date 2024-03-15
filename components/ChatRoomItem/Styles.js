import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 50
    },
    badgeContainer: {
        backgroundColor: '#3d7bff',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 50,
        top: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    rightContainer: {
        flex: 1,
        marginLeft: 10
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    lastMessage: {
        color: 'gray'
    }
})  

export default styles;