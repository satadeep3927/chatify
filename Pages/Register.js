import { StatusBar } from 'expo-status-bar';
import {useState} from "react"
import { Text, View, Pressable, TextInput, Image} from 'react-native';
import Styles from '../Components/Styles';
import * as ImagePicker from "expo-image-picker"

export default Register = ({ navigation }) => {
    
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <>
            <StatusBar style='light' backgroundColor='#181920' />
            <View style={Styles.container}>
                <Text style={Styles.miniHeading}>Create Account</Text>
                <Pressable style={Styles.imageUpload} onPress={pickImage} android_ripple={{ color: Styles.rippleColor }}>
                    {
                        (image === null) ?(
                            <Text style={Styles.cameraIcon}>&#xf030;</Text>
                        ):(
                            <Image source={{ uri: image }} style={Styles.previewImage}/>
                        )
                    }
                </Pressable>
                <TextInput placeholder='Name' style={Styles.input} placeholderTextColor={Styles.placeHolderColor} />
                <TextInput placeholder='Email' style={Styles.input} placeholderTextColor={Styles.placeHolderColor} />
                <TextInput placeholder='Password' style={Styles.input} placeholderTextColor={Styles.placeHolderColor} />
                <Pressable style={{ ...Styles.button, marginTop: 10 }} onPress={() =>
                    navigation.navigate("Verify")
                } android_ripple={{ color: Styles.rippleColor }}>
                    <Text style={Styles.buttonText}>Create Account</Text>
                </Pressable>

                <Text style={{ color: 'white', marginVertical: 13 }}>Or</Text>

                <Pressable style={{ ...Styles.buttonOutline, marginTop: 10 }} onPress={() =>
                    navigation.navigate('Login')
                } android_ripple={{ color: Styles.rippleColor }}>
                    <Text style={Styles.buttonOutlineText}>Login</Text>
                </Pressable>
            </View>
        </>
    );
}