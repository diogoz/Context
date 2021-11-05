import React, {useContext} from 'react'
import { Text } from 'react-native';
import { Context } from '../context/dataContext';

const Teste = () => {
    const data = useContext(Context)
    return <Text>{data}</Text>
}

export default Teste
