import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Landing from "../screens/Landing";
import Cart from "../screens/Cart";
import CourseInfos from "../screens/CourseInfos";
import globalStyles from "../styles/globalStyles";

const CoursesStackNavigator = createStackNavigator();
//SreenOptions dans le navigator permet de styliser tout les ecrans d'un coup
export const CoursesNavigator = () => {
    return ( 
        <CoursesStackNavigator.Navigator
            screenOptions={({ navigation }) => (
                {
                    headerStyle: { backgroundColor: globalStyles.green },
                    headerBackTitleStyle: { fontWeight: 'bold'},
                    headerTintColor: globalStyles.white,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
                            <Item
                                title="Panier"
                                iconName="shopping-cart"
                                onPress={() => navigation.navigate('Cart')}
                            />
                        </HeaderButtons>
                    )
                }
            )}
        >
            <CoursesStackNavigator.Screen
                name="Landing"
                component={Landing} 
            />   
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={({ route }) => (
                    {
                        title: route.params.title
                    }
                )} 
            />   
            <CoursesStackNavigator.Screen
                name="Cart"
                component={Cart} 
            />   
        </CoursesStackNavigator.Navigator>
    )
}