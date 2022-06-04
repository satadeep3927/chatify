
import { Text, Image, View } from "react-native"
import Styles from "./Styles"

export default CustomTitle = () =>{
    return(
        <View style={Styles.titleBar}>
            <Image source={require('../assets/images/profile.jpg')} style={Styles.avatarMini} />
            <Text style={Styles.titleBarText}>Satadeep Dasgupta</Text>
        </View>
    )
}