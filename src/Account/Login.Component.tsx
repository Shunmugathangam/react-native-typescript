import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput, Button, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { LoginModelType, ThemeModelType, lightTheme, darkTheme, colorOptions } from '../Store/models';
import { login } from '../Store/actions/authActions';

interface Props {
  loginState: LoginModelType;
  themeState: ThemeModelType;
  reduxLogin: (model: LoginModelType) => {}
};

class Login extends React.Component<Props> {

      login = () => { 
        this.props.reduxLogin({userName: "Shunmugathangam", token:"token", loggedIn: true})
      }
      
      render() {
    
        return (
          <>
            <ScrollView style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.formTitle}> Login </Text>
                    <TextInput style={styles.textInput} placeholder="Email / Mobile Number" />
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password"/>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.login}>
                        <Text style={styles.buttonTextStyle}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
          </>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  formContainer: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    height: '100%'
  },
  formTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.black,
  },
  textInput: {
    borderColor: Colors.black,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10
  },
  buttonStyle: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    marginBottom: 10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#007ad9',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonTextStyle: {
      color:'#fff',
      textAlign:'center',
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    loginState: state.authReducer.loginState ? state.authReducer.loginState : state.authReducer,
    themeState: state.themeReducer.themeState ? state.themeReducer.themeState : state.themeReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Login
      reduxLogin: (model: LoginModelType) => dispatch(login(model)),
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);