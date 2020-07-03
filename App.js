import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SearchScreen from './src/screens/SearchScreen'
import reducer from './src/reducers'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(reducer)
const Stack = createStackNavigator();

export default App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Search User"
            component={SearchScreen}
            options={{title: 'Search User'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}