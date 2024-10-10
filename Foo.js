import { Text, View } from "react-native"
import { useSelector } from "react-redux"


export const Foo = () => {
    const counter = useSelector((state) => state.counter);
    return (
        <View>
            <Text style={{ fontSize: 40, color: "blue" }}>
                {counter.count}
            </Text>
        </View>
    )
}