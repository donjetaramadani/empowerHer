import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegisterScreen from './screens/register';
import LoginScreen from './screens/login';
import ProfileScreen from './components/ProfileScreen';
import NewInquiriesScreen from './components/Newinquries';
import FAQScreen from './components/faq';
import SearchScreen from './components/SearchScreen';

const Tab = createBottomTabNavigator();


const FavoritesScreen = () => <></>;
const CartScreen = () => <></>;

const AuthenticationButtons = () => {
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        navigation.navigate('Register');
    };

    const handleLoginPress = () => {
        navigation.navigate('Login'); 
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 10, marginTop: 40 }}>
            <TouchableOpacity onPress={handleRegisterPress}>
                <View style={{ backgroundColor: '#8e44ad', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 5, marginRight: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Register</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLoginPress}>
                <View style={{ backgroundColor: '#8e44ad', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 5 }}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const AppBottomTab = () => {
  return (
      <NavigationContainer>
          <View style={{ flex: 1 }}>
              <AuthenticationButtons />
              <Tab.Navigator
                  screenOptions={({ route }) => ({
                      tabBarIcon: ({ color, size }) => {
                          let iconName;

                          if (route.name === 'Search') {
                              iconName = 'search';
                          } else if (route.name === 'FAQs') {
                              iconName = 'heart';
                          } else if (route.name === 'Inquiries') {
                              iconName = 'question-circle'; 
                          } else if (route.name === 'Profile') {
                              iconName = 'user';
                          } else if (route.name === 'Register') {
                              iconName = 'user-plus';
                          } else if (route.name === 'Login') {
                              iconName = 'sign-in'; 
                          }

                          return <Icon name={iconName} size={size} color={color} />;
                      },
                  })}
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
                  <Tab.Screen name="Search" component={SearchScreen} />
                  <Tab.Screen name="FAQs" component={FAQScreen} /> 
                  <Tab.Screen name="Inquiries" component={NewInquiriesScreen} /> 
                  <Tab.Screen name="Profile" component={ProfileScreen} />
                  <Tab.Screen name="Register" component={RegisterScreen} />
                  <Tab.Screen name="Login" component={LoginScreen} />
              </Tab.Navigator>
          </View>
      </NavigationContainer>
  );
};


export default AppBottomTab;
