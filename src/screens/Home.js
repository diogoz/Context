import React, {useContext} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Provider, Context } from '../context/dataContext';
const Home = () => {
    const actualState = useContext(Context);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{actualState.state.value}</Text>
           <Button title="Aumentar" 
                onPress={() => actualState.dispatch({type: "plus", payload: 1})}
           />
           {actualState.state.showMessage ? <Text>Mensagem que não pode ser mostrada</Text> : null}
           <Button title="Mostrar Mensagem" 
                onPress={() => actualState.dispatch({type: "toggle", payload: true})}
            />
            <Button title="Ocultar  Mensagem" 
                onPress={() => actualState.dispatch({type: "toggle", payload: false})}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    },
});
export default Home
