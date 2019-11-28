import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Stack from './rootNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/index';


const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}


