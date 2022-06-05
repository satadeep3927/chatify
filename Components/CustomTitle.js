
import { Text, Image, View } from "react-native"
import Styles from "./Styles"

const CustomTitle = () =>{
    return(
        <View style={Styles.titleBar}>
            <Image source={require('../assets/images/profile.jpg')} style={Styles.avatarMini} />
            <Text style={Styles.titleBarText}>Satadeep Dasgupta</Text>
        </View>
    )
}
export default CustomTitle;