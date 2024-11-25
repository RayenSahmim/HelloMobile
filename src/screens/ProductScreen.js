import { StyleSheet,View,Image,FlatList,Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () =>{
  const navigation = useNavigation();
  return (
      <FlatList 
        data={products}
        renderItem={({item})=>(
          <Pressable 
            onPress={()=> navigation.navigate('Product Detail')}
            style={styles.itemContainer}
          >
            <Image source={{uri: item.image}} style={styles.image}/>
          </Pressable>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
      />
    );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default ProductScreen;

