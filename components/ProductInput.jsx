import { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const ProductInput = ({onProductAdd}) => {
    const [productName, setProductName] = useState('');

    const changeTextHandler = (value) => {
        setProductName(value)
    }
    const addProductHandler = () => {
        const sanitizedName = productName.trim()
        if (sanitizedName != '') {
            onProductAdd(productName)
        setProductName('')
        }
        setProductName('')
    }
    return (
        <View style={ styles.productInput }>
            <TextInput style={ styles.productName } 
            placeholder='Introduzca un producto' 
            keyboardType='default' 
            onChangeText={ changeTextHandler }
            value={ productName }/>
            <Button style={ styles.addButton } title='Añadir' 
            onPress={addProductHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    productInput: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#eef4ed",
        width: '80%',
        height: 80,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#d81b60'
    },
    productName: {
        flex: 4,
        color: 'white',
    },
    addButton: {
        flex: 1,
    },
})
export default ProductInput;