/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Layout from './Layout/Layout.Component';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import { Login } from './Account/Index';

// Imports: Redux Persist Persister
import { store, persistor } from './Store/store';

export default class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate 
            loading={null}
            persistor={persistor}>
            <Layout />
          </PersistGate>
        </Provider>
      </> 
    );
  }
  
};
