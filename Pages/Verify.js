import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from 'react-native';
import Styles from '../Components/Styles';

const Verify = ({ navigation }) => {
    const secondDigit = useRef()
    const thirdDigit = useRef()
    const fourthDigit = useRef()

    return (
        <>
            <StatusBar style='light' backgroundColor='#181920' />
            <View style={Styles.container}>
                <Text style={Styles.brandLogo}>&#xf1d8;</Text>
                <Text style={Styles.miniHeading}>Email Verification</Text>
                <Text style={Styles.minSubHeading}>Verify your email address</Text>
                <View style={Styles.verifyInputContainer}>
                    <TextInput style={Styles.verifyInput} maxLength={1} keyboardType='numeric'
                        onChangeText={(value) => {
                            if (value.length > 0) secondDigit.current.focus();
                        }}
                    />
                    <TextInput blurOnSubmit={false} style={Styles.verifyInput} maxLength={1} keyboardType='numeric' ref={secondDigit}
                        onChangeText={(value) => {
                            if (value.length > 0) thirdDigit.current.focus();
                        }}
                    />
                    <TextInput blurOnSubmit={false} style={Styles.verifyInput} maxLength={1} keyboardType='numeric' ref={thirdDigit}
                        onChangeText={(value) => {
                            if (value.length > 0) fourthDigit.current.focus();
                        }}
                    />
                    <TextInput blurOnSubmit={false} style={Styles.verifyInput} maxLength={1} keyboardType='numeric' ref={fourthDigit} />
                </View>
                <Pressable style={{ ...Styles.button, marginTop: 10 }} onPress={() =>
                    navigation.navigate('Home')
                } android_ripple={{ color: Styles.rippleColor }}>
                    <Text style={Styles.buttonText}>Verify</Text>
                </Pressable>
            </View>
        </>
    );
}
export default Verify;