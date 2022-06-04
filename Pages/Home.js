import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import Styles from '../Components/Styles';
import ChatPreview from '../Components/ChatPreview';

export default Home = ({ navigation }) => {

    return (
        <>
            <StatusBar style='light' backgroundColor='#181920' />
            <View style={Styles.HomeContainer}>
                <View style={Styles.HomeHeader}>
                    <Image source={require('../assets/images/profile.jpg')} style={Styles.avatarMini} />
                    <Text style={Styles.HomeHeaderText}>Chatify</Text>
                </View>

                <View style={Styles.searchBox}>
                    <TextInput style={Styles.searchBoxInput} placeholder='Search' placeholderTextColor={Styles.placeHolderColor} />
                    <Text style={Styles.searchIcon}>&#xf002;</Text>
                </View>
                <ChatPreview navigation={navigation}/>
                
            </View>
        </>
    );
}