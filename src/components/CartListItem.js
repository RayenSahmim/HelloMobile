import { View, Text, StyleSheet, Image, Pressable } from 'react-native'; 
import { Feather } from '@expo/vector-icons'; 
import { useState } from 'react';

const CartListItem = ({ cartItem }) => { 
  const [value , setValue] = useState(1);

  const increaseQuantity = () => { 
    setValue(value+1)
        console.log('Increase Quantity'); 
    }; 

    const decreaseQuantity = () => { 
        setValue(value-1)
        console.log('Decrease Quantity'); 
    }; 

    return ( 
        <View style={styles.container}> 
            <Image source={{ uri: cartItem.product.image }} style={styles.image} /> 
            <View style={styles.contentContainer}> 
                <Text style={styles.name}>{cartItem.product.name}</Text> 
                <Text style={styles.size}>Size {cartItem.size}</Text> 
                <View style={styles.footer}> 
                    <Pressable onPress={decreaseQuantity}>
                        <Feather name="minus-circle" size={24} color="gray" />
                    </Pressable>
                    <Text style={styles.quantity}>{value}</Text> 
                    <Pressable onPress={increaseQuantity}>
                        <Feather name="plus-circle" size={24} color="gray" />
                    </Pressable>
                    <Text style={styles.itemTotal}>
                        ${cartItem.product.price * value}
                    </Text> 
                </View> 
            </View> 
        </View> 
    ); 
}; 

const styles = StyleSheet.create({  
    container: { 
        padding: 10, 
        paddingHorizontal: 20, 
        flexDirection: 'row' 
    }, 
    contentContainer: { 
        flex: 1, 
        marginLeft: 10 
    }, 
    image: { 
        width: '40%', 
        aspectRatio: 1 
    }, 
    name: { 
        fontWeight: '500', 
        fontSize: 18 
    }, 
    size: { 
        fontSize: 16, 
        color: 'gray' 
    }, 
    quantity: { 
        marginHorizontal: 10, 
        fontWeight: 'bold', 
        color: 'gray' 
    }, 
    footer: { 
        marginTop: 'auto', 
        flexDirection: 'row', 
        alignItems: 'center' 
    }, 
    itemTotal: { 
        fontSize: 16, 
        marginLeft: 'auto', 
        fontWeight: '500' 
    }, 
}); 

export default CartListItem;
