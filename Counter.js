import { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreas, increas, refresh } from "./Slice";


export const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return (
        <View style={{ backgroundColor: "#aeaeae", borderRadius: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>{counter.count}</Text>
            <Preasser text={"increas"} onPress={() => dispatch(increas())} />
            <Preasser text={"decreas"} onPress={() => dispatch(decreas())} />
            <Preasser text={"refresh"} onPress={() => dispatch(refresh())} />
        </View>
    )
}

const Preasser = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={{ backgroundColor: "black", margin: 3, width: 90, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", color: "white" }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}