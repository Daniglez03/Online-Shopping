import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';

export default function App() {
  const [products, setProducts] = useState([]);

  let names = []
  if (products) {
    products.forEach(element => {
      names.push(element.name)
    });
  }

  const addProductHandler = (productName) => {
    setProducts(() => [...products, productName])
  }

  const removeProductHandler = () => {
    setProducts('')
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} />
      <ScrollView style={styles.productList}>
        {
          products.length === 0
            ? <Text style={styles.textEmpty}>Aún no hay productos</Text>
            : products.map((product, idx) => (
              <ListItem
                key={idx + product}
                product={product} />
            ))
        }
      </ScrollView>
      <Pressable style={styles.button} onPress={removeProductHandler}>
        <Text style={styles.text}>Clear</Text>
      </Pressable>
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
  button: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    width: 80,
    backgroundColor: '#e53935',
  },
  text: {
    color: 'white'
  }
});