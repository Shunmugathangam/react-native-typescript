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
import { StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Routes from '../Routes';
import { LoginModelType, ThemeModelType, lightTheme, darkTheme, colorOptions } from '../Store/models';

interface Props {
  loginState: LoginModelType;
  themeState: ThemeModelType;
};

class Layout extends React.Component<Props> {
  render() {
    return (
      <>
          <StatusBar barStyle="light-content" backgroundColor={colorOptions[this.props.themeState.color].PRIMARY_COLOR} />
          <Routes />
      </> 
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    loginState: state.authReducer.loginState ? state.authReducer.loginState : state.authReducer,
    themeState: state.themeReducer.themeState ? state.themeReducer.themeState : state.themeReducer,
  };
};


export default connect(mapStateToProps)(Layout);
