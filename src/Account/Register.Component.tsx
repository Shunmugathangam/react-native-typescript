import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput, Button, StatusBar, KeyboardAvoidingView } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
    navigation: BottomTabNavigationProp<any,any>
};
  
interface State {
    title: string;
}

export default class Register extends React.Component<Props, State> {


      goToHome = () => {
        this.props.navigation.navigate('Home');
      }

      register = () => { }
      
      render() {
    
        return (
          <>
                  <ScrollView style={styles.container}>
                        <View style={styles.formContainer}>
                          <Text style={styles.formTitle}> Sign Up </Text>
                          <TextInput style={styles.textInput} placeholder="Email" />
                          <TextInput style={styles.textInput} placeholder="Mobile Number" />
                          <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password"/>
                          <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Confirm Password"/>
                          <TouchableOpacity style={styles.buttonStyle} onPress={this.register}>
                            <Text style={styles.buttonTextStyle}>Sign Up</Text>
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