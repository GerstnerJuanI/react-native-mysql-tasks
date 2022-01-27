import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Touchable, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import taskFormScreen from './screens/taskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Tasks App',
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#ffffff" },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen")}>
                <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New</Text> 
              </TouchableOpacity>
            )
          })} />

        <Stack.Screen 
          name="TaskFormScreen" 
          component={taskFormScreen}
          options={{
            title:'Create a Task',
            headerStyle:{
              backgroundColor:"#222f3e"
            },
            headerTitleStyle: {color:"#ffffff"},
            headerTintColor:'#ffffff',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;