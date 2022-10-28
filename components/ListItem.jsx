import { Image, StyleSheet, Text, View } from 'react-native'

const ListItem = ({ product }) => {
    return (
        <View style={styles.listItem}>
            <Image style={styles.productImage} source={require("../assets/favicon.png")}></Image>
            <Text style={styles.productName}>{product.quantity} x {product.name}</Text>
        </View>
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
        margin:3
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        //textDecorationLine: "line-through",
    },
})

export default ListItem