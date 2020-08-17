import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';



import HomeScreen from './src/pages/HomeScreen'
import SpellScreen from './src/pages/spells/SpellScreen'
import Spell from './src/pages/spells/Spell'
import CharacterScreen from './src/pages/character/Character'
import NewCharacterScreen from './src/pages/character/NewCharacter'
import PlayerScreen from './src/pages/Player/Player'
import DataList from './src/pages/character/DataList'

import characterReducer from './src/store/reducers/character'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const rootReducer = combineReducers({
  character: characterReducer,
})

const store = createStore(rootReducer)



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
      <Stack.Screen name="Player" component={PlayerScreen} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>  
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Spells" component={SpellStack} />
          <Tab.Screen name="Character" component={CharacterStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;


