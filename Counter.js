import { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreas, increas, refresh } from "./Slice";
import { Preasser } from "./Preasser";


export const Counter = () => {
    const counter = useSelector((state) => state.counter); // State'in mevcut değerini elde ederiz.
    const dispatch = useDispatch()   //State'in üzerindeki değişiklikleri yapacak olan actionları(fonksiyonları) kullanmamızı sağlar.
    return (
        <View style={{ backgroundColor: "#aeaeae", borderRadius: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>{counter.count}</Text>
            <Preasser text={"increas"} onPress={() => dispatch(increas())} />
            <Preasser text={"decreas"} onPress={() => dispatch(decreas())} />
            <Preasser text={"refresh"} onPress={() => dispatch(refresh())} />
        </View>
        
    )
}

