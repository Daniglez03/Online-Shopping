import { useState } from 'react'
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import uuid from 'react-native-uuid';

const ProductInput = ({ onProductAdd }) => {
    let product = {
        id: uuid.v4(),
        name: "",
        quantity: 1,
        bought: false,
        type: ""
    }
    const [productObject, setproductObject] = useState(product);

    const changeProductHandler = (value) => {
        setproductObject({ ...productObject, name: value })
    }

    const changeQuantityHandler = (value) => {
        setproductObject({ ...productObject, quantity: value })
    }

    const changeTypeHandler = (value) => {
        setproductObject({ ...productObject, type: value })
    }

    const addProductHandler = () => {
        const sanitizedName = productObject.name.trim()
        if (sanitizedName != '') {
            onProductAdd(productObject)
            setproductObject({...productObject, name: "", type: "", quantity: 1, bought: false})
        }
    }
    const DATA = [
        { label: 'Fruit', value: 'Fruit' },
        { label: 'Vegetable', value: 'Vegetable' },
        { label: 'Bakery', value: 'Bakery' },
        { label: 'Fish', value: 'Fish' },
        { label: 'Meat', value: 'Meat' },
    ];
    return (
        <View style={styles.productInput}>
            <View>
                <TextInput style={styles.productName}
                    placeholder='Product Name'
                    keyboardType='default'
                    onChangeText={changeProductHandler}
                    value={productObject.name}/>
                <Dropdown
                    data={DATA}
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Type'}
                    value={productObject.type.label}
                    onChange={changeTypeHandler}
                />
            </View>
            <View>
                <TextInput style={styles.quantityInput}
                    placeholder='Quantity'
                    keyboardType='numeric'
                    value={productObject.quantity}
                    onChangeText={changeQuantityHandler}
                />
                {
                    productObject.name !== '' && productObject.type !== ''
                        ? <Pressable style={styles.button} onPress={addProductHandler}>
                            <Text>ADD</Text>
                        </Pressable>
                        : <Pressable disabled={true} style={styles.buttonDisabled}>
                            <Text>ADD</Text>
                        </Pressable>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productInput: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '94%',
        height: 110,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#26a69a',
    },
    productName: {
        backgroundColor: '#00766c',
        borderRadius: 5,
        marginBottom: 15,
        textAlign: 'center'
    },
    quantityInput: {
        backgroundColor: '#00766c',
        borderRadius: 5,
        marginBottom: 15,
        textAlign: 'center',
    },
    // Elementos input desplegables
    dropdown: {
        width: 150,
        height: 40,
        borderColor: '#00766c',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: '#00766c',
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    //
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: '#64d8cb',
    },
    buttonDisabled: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: '#00675b',
    }
})
export default ProductInput;