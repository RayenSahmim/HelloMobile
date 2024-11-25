import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "./screens/ProductScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ShoppingCart from "./screens/ShoopingCart"; 
import { Pressable, Text } from "react-native"; 
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products">
                <Stack.Screen 
                    name="Products" 
                    component={ProductScreen} 
                    options={({ navigation }) => ({ // Access navigation prop
                        headerRight: () => ( 
                            <Pressable 
                                onPress={() => navigation.navigate('Cart')} // Navigate to Cart
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                            > 
                                <FontAwesome5 name='shopping-cart' size={18} color='gray' /> 
                                <Text style={{ marginRight: 10, fontWeight: '500', padding : 5 }}>1</Text> 
                            </Pressable>
                        ),
                    })} 
                />
                <Stack.Screen 
                    name="Product Detail" 
                    component={ProductDetailScreen} 
                    options={{ presentation: 'modal' }} 
                />
                <Stack.Screen 
                    name="Cart" 
                    component={ShoppingCart} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
