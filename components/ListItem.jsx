import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const ListItem = ({ productName, onProductRemove }) => {
    return (
        <Pressable onPress={() => onProductRemove(productName)}>
            <View style={styles.listItem}>
                <Image style={styles.productImage} source={require('../assets/botella.webp')} />
                <Text style={styles.productName}>{productName}</Text>
            </View>
        </Pressable>
    )

}
const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 15,
        paddingRight: 20,
        backgroundColor: 'white',
    },
    productImage: {
        width: 70,
        height: 70,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        //textDecorationLine: "line-through",
    },
})

export default ListItem