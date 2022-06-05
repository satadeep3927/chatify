import Styles from "./Styles";
import { Text, View, Image, Pressable } from 'react-native';

const ChatPreview = ({navigation}) => {
    return (
        <Pressable style={Styles.chatPreview} 
            android_ripple={{color: Styles.rippleColor}}
            onPress={()=>{
                navigation.navigate('Chats')
            }}
            >
            <Image source={require('../assets/images/profile.jpg')} style={Styles.avatarChatPreview} />
            <View style={Styles.chatPreviewTextBox}>
                <Text style={Styles.chatPreviewName}>Satadeeo Dasgupta</Text>
                <Text style={Styles.chatPreviewMessage}>Hi, User</Text>
            </View>
            <Text style={Styles.chatPreviewTimeStamp}>
                12:00 AM
            </Text>
        </Pressable>
    )
}
export default ChatPreview;