import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PayButton from './components/PayButton';

import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Perfil from './pages/Perfil';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Cart')}
                focused={focused}
              />
            );
          } else if (route.name === 'Perfil') {
            iconName = 'person';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5784BA',
        inactiveTintColor: '#92929c',
        style: {
          backgroundColor: '#eee',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={BottomNavigator}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
