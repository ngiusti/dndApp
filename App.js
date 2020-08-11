import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './src/pages/HomeScreen'
import SpellScreen from './src/pages/spells/SpellScreen'
import Spell from './src/pages/spells/Spell'
import CharacterScreen from './src/pages/character/Character'
import NewCharacterScreen from './src/pages/character/NewCharacter'
import DataList from './src/pages/character/DataList'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function SpellStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spells" component={SpellScreen} />
      <Stack.Screen name="Spell" component={Spell} />
    </Stack.Navigator>
  );
}

function CharacterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Character" component={CharacterScreen} />
      <Stack.Screen name="DataList" component={DataList} />
      <Stack.Screen name="New Character" component={NewCharacterScreen} />
    </Stack.Navigator>  
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Spells" component={SpellStack} />
        <Tab.Screen name="Character" component={CharacterStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


