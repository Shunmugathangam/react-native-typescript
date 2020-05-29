import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { login } from '../Store/actions/authActions';
import { LoginModelType } from '../Store/models';


interface Props {
  navigation: BottomTabNavigationProp<any,any>,
};

interface State {
  title: string;
}

export default class About extends React.Component<Props, State> {


  render() {
    return (
      <>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
              <View style={styles.body}>
                  <TouchableOpacity>
                    <Text></Text>
                  </TouchableOpacity>
                </View>
            </ScrollView>
      </>
    );
  }
}


const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
    loggedInContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    loggedInText: {
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: '400',
      color: '#000',
    },
});