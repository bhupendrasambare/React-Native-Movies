/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import axios from 'axios';
import { apiKey } from './apis/constants';

 function App(){

  axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;

  return (
    <AppNavigation/>
  );
};



export default App;