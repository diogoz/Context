import React from 'react'
import { View, Text } from 'react-native'
import Teste from '../components/Teste';
import { Provider } from '../context/dataContext';
const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Provider>
            <Teste />
            </Provider>
        </View>
    )
}

export default Home
