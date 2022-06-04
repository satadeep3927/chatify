import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import Styles from '../Components/Styles';
import CustomTitle from "../Components/CustomTitle"

export default Chats = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Satadeep Dasgupta',
            headerStyle: {
                backgroundColor: Styles.primaryColorHover,
            },
            headerTintColor: '#fff',
            headerTitle : props => <CustomTitle {...props} />,
        })
    }, [])
    return (
        <>
            <StatusBar style='light' backgroundColor={Styles.primaryColorHover} />
            <View style={Styles.chatContainer}>

                
            </View>
        </>
    );
}