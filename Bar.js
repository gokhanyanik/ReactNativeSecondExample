import { View, Text, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Preasser } from './Preasser';
import { setAuthor } from './Slice';




export const Bar = () => {
    const dispatch=useDispatch();
    const author = useSelector((state) => state.counter);
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Name: {author.author.name}</Text>
            <Text>Surname: {author.author.surname}</Text>
            <Preasser text="change" onPress={()=>{
                dispatch(setAuthor({
                    name:"afife",
                    surname:"yanik"
                }))
            }}/>
        </View>
    )
}