import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();

//import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Perfil from './pages/Perfil';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
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
    </NavigationContainer>
  );
}
