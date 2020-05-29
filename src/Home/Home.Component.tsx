import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginModelType, ThemeModelType, lightTheme, darkTheme, colorOptions } from '../Store/models';

interface Props {
  navigation: StackNavigationProp<any,any>,
  loginState: LoginModelType;
  themeState: ThemeModelType;
};

declare var global: {HermesInternal: null | {}};

class Home extends React.Component<Props> {

  goToAbout = () => {
    this.props.navigation.navigate('About');
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView>
           
            {/* {global.HermesInternal == null ? null : (
              <View style={styles(this.props).engine}>
                <Text style={styles(this.props).footer}>Engine: Hermes</Text>
              </View>
            )} */}

            <View style={styles(this.props).body}>
              <View style={styles(this.props).sectionContainer}>
                <Text style={styles(this.props).sectionTitle}>
                  Home
                </Text>
                <TouchableOpacity onPress={this.goToAbout}>
                    <Text style={styles(this.props).sectionTitle}>Go to About Screen</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    ); 
  }  
}

const styles = (props: Props) => StyleSheet.create({

    body: {
      backgroundColor: props.themeState.themeType === 'lightTheme' ? lightTheme.PRIMARY_BACKGROUND_COLOR : darkTheme.PRIMARY_BACKGROUND_COLOR,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: props.themeState.themeType === 'lightTheme' ? lightTheme.PRIMARY_TEXT_COLOR : darkTheme.PRIMARY_TEXT_COLOR,
    },
  });

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    loginState: state.authReducer.loginState ? state.authReducer.loginState : state.authReducer,
    themeState: state.themeReducer.themeState ? state.themeReducer.themeState : state.themeReducer,
  };
};


export default connect(mapStateToProps)(Home);