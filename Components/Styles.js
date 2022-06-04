let primaryColor = 'rgb(220, 20, 83)';
let backGroundLight = '#252a34'

export default class Styles{
    static primaryColor = primaryColor
    static container = {
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        padding: 12,
        backgroundColor:'#181920'
    }
    static HomeContainer = {
        height:'100%',
        padding: 12,
        backgroundColor:'#181920'
    }
    static HomeHeader = {
        marginTop: 15,
        paddingVertical: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    }
    static avatarMini = {
        height: 40,
        width: 40,
        borderRadius: 20,
        resizeMode: 'cover',
        marginRight: 8
    }
    static HomeHeaderText = {
        color: primaryColor,
        fontSize: 22,
        fontWeight: 'bold'
    }
    static button =  {
        paddingVertical: 20,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        width:'100%',
        borderRadius: 12
    }

    static buttonText = {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: 12
    }
    static buttonOutline =  {
        paddingVertical: 20,
        borderColor: primaryColor,
        borderWidth: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        borderRadius: 12
    }

    static buttonOutlineText = {
        color: primaryColor,
        textTransform: 'uppercase',
        fontSize: 12
    }

    static input = {
        backgroundColor: '#252a34',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 12,
        color: '#ffffff',
        borderRadius: 12,
        marginVertical: 15
    }
    static miniHeading = {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
    static minSubHeading = {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.4)',
        marginBottom: 20
    }
    static brandLogo = {
        fontFamily: 'Font awesome 6 pro',
        color: primaryColor,
        fontSize: 35,
        marginBottom: 10
    }
    static imageUpload = {
        height: 100,
        width: 100,
        backgroundColor: '#252a34',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    }

    static cameraIcon = {
        fontFamily: 'Font awesome 6 pro',
        fontSize: 28,
        color: 'rgba(255, 255, 255, 0.4)'
    }

    static previewImage = {
        height: 100,
        width: 100,
        borderRadius: 50,

    }
    static verifyInputContainer = { 
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    }
    static verifyInput = {
        backgroundColor: '#252a34',
        padding: 20,
        color: '#ffffff',
        borderRadius: 12,
        marginVertical: 15,
        textAlign: 'center'
    }
    static searchBox = {
        backgroundColor: '#252a34',
        width: '100%',
        padding: 16,
        color: '#ffffff',
        borderRadius: 16,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'

    }
    static searchBoxInput = {
        color: 'white',
    }

    static searchIcon = {
        fontFamily: 'Font awesome 6 pro',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 6
    }

    static chatPreview = {
        height: 100,
        width: '100%',
        borderRadius: 20,
        backgroundColor: backGroundLight,
        padding: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 14
    }

    static avatarChatPreview = {
        height: 70,
        width : 70,
        borderRadius: 35
    }
    static chatPreviewTextBox = {
        width: '50%',
        padding: 12
    }
    static chatPreviewName = {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    }
    static chatPreviewMessage = {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.4)'
    }
    static chatPreviewTimeStamp = {
        color: 'rgba(255, 255, 255, 0.4)',
        marginLeft: 'auto',
        fontSize: 12
    }
    static titleBar = {
        flexDirection: 'row',
        alignItems: 'center'
    }
    static titleBarText = {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
    static chatContainer = {
        height: '100%',
        width: '100%',
        backgroundColor: '#181920',
        padding: 12
    }
    static rippleColor = 'rgba(0,0,0,0.1)'
    static placeHolderColor = 'rgba(255, 255, 255, 0.4)'
    static primaryColorHover = 'rgb(225, 25, 88)'
}