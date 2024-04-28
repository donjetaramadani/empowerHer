import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchScreen from '../components/SearchScreen';
import FavoritesScreen from '../components/faq';
import CartScreen from '../components/Newinquries';
import ProfileScreen from '../components/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Search"
                tabBarOptions={{
                    activeTintColor: '#33356d',
                    inactiveTintColor: '#aaa',
                    style: {
                        backgroundColor: '#fff',
                        borderTopWidth: 0,
                        elevation: 5,
                    },
                    labelStyle: {
                        fontSize: 12,
                        marginBottom: 5,
                    },
                    tabStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }}
            >
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesScreen}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="heart" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="shopping-cart" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppBottomTab;
