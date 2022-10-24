import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';
import uuid from 'react-native-uuid'

export default function App() {
  const [products, setProducts] = useState([product]);
  let product = {
    id: uuid.v4(),
    name: '',
    quantity: 1,
    bought: false,
    type: ''
  };

  const addProductHandler = (productName) => {
    setProducts(() => [...products, productName])
  }

  const removeProductHandler = (productName) => {
    setProducts(() => products.filter((product) =>
    product != productName
    ));
  }
  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>
      <ScrollView style={styles.productList}>
        {
          products.length === 0
            ? <Text style={styles.textEmpty}>Aún no hay productos</Text>
            : products.map((product, idx) => (
            <ListItem
            key={idx + product}
            productName={product}
            onProductRemove={removeProductHandler}/>
            ))
        }
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgrey'
  },
  productList: {
    flex: 4,
    width: '95%',
    marginBottom: '3%',
    marginTop: '3%',
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: '5%',
  },

});