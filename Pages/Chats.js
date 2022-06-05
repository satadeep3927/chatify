import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View, Pressable, TextInput, Image, FlatList } from 'react-native';
import Styles from '../Components/Styles';
import CustomTitle from "../Components/CustomTitle"

const Chats = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Satadeep Dasgupta',
            headerStyle: {
                backgroundColor: Styles.primaryColorHover,
            },
            headerTintColor: '#fff',
            headerTitle: props => <CustomTitle {...props} />,
        })
    }, [])
    return (
        <>
            <StatusBar style='light' backgroundColor={Styles.primaryColorHover} />
            <View style={Styles.chatContainer}>

                <View style={Styles.chatListContainer}>
                    <View style={Styles.chatWrapper}>
                        <Text style={Styles.chatTimeStamp}>
                            04/05/22 12:00 PM
                        </Text>

                        <View style={Styles.myMessage}>
                            <Text style={Styles.myMessageText}>
                                Hello, User
                            </Text>
                        </View>
                    </View>

                    <View style={Styles.chatWrapper}>
                        <Text style={Styles.chatTimeStamp}>
                            04/05/22 12:00 PM
                        </Text>

                        <View style={Styles.otherMessage}>
                            <Text style={Styles.otherMessageText}>
                                Hello
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.chatInputBox}>
                    <TextInput style={Styles.chatInput} multiline={true} placeholder="Send Message" placeholderTextColor={Styles.placeHolderColor}></TextInput>
                    <Pressable style={Styles.sendButton}>
                        <Text style={Styles.sendIcon}>
                            &#xe20a;
                        </Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}
export default Chats;