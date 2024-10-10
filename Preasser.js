import {TouchableOpacity,View,Text} from 'react-native'

export const Preasser = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={{ backgroundColor: "black", margin: 3, width: 90, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", color: "white" }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}