import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import Teste from '../components/Teste';
import { Provider, Context } from '../context/dataContext';
const Home = () => {
    const data = useContext(Context);
    return (
        <View>
            <Text>Home</Text>
            <Text>{data}</Text>
            <Teste />
        </View>
    )
}

export default Home
