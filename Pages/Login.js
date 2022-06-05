import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput } from 'react-native';
import Styles from '../Components/Styles';

const Login = ({ navigation }) => {

    return (
        <>
            <StatusBar style='light' backgroundColor='#181920' />
            <View style={Styles.container}>
                <Text style={Styles.brandLogo}>&#xf1d8;</Text>
                <Text style={Styles.miniHeading}>Welcome Back!</Text>
                <Text style={Styles.minSubHeading}>Log into your Account</Text>
                <TextInput placeholder='Email' style={Styles.input} placeholderTextColor={Styles.placeHolderColor} />
                <TextInput placeholder='Password' style={Styles.input} placeholderTextColor={Styles.placeHolderColor} />
                <Pressable style={{ ...Styles.button, marginTop: 10 }} onPress={() =>
                    navigation.navigate('Home')
                } android_ripple={{ color: Styles.rippleColor }}>
                    <Text style={Styles.buttonText}>Login</Text>
                </Pressable>

                <Text style={{ color: 'white', marginVertical: 13 }}>Or</Text>

                <Pressable style={{ ...Styles.buttonOutline, marginTop: 10 }} onPress={() =>
                    navigation.navigate('Register')
                } android_ripple={{ color: Styles.rippleColor }}>
                    <Text style={Styles.buttonOutlineText}>Create Account</Text>
                </Pressable>
            </View>
        </>
    );
}

export default Login;