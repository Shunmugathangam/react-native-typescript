import React from 'react';
import { View, Text, StyleSheet, Switch, FlatList, TouchableOpacity, Picker } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

import { ThemeModelType, lightTheme, darkTheme, colorOptions, base } from '../Store/models';
import { changeTheme } from '../Store/actions/themeAction';

interface Props {
  tabnavigation: BottomTabNavigationProp<any,any>,
  stacknavigation: StackNavigationProp<any,any>,
  themeState: ThemeModelType;
};

interface State {
  isEnabled: boolean;
}

class Settings extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    console.log(props.themeState.themeType);
    this.state = {
      isEnabled: true
    }
  }

  toggleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };
  
  render() {

    return (
      <View style={styles(this.props).container}>
          <View style={styles(this.props).col1}>
            <Text style={styles(this.props).textStyle}>Enable Dark Theme</Text>
          </View>
          <View style={styles(this.props).col2}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={this.toggleSwitch}
              value={this.state.isEnabled}
            />
          </View>
          <View style={styles(this.props).col1}>
            <Text style={styles(this.props).textStyle}>Color</Text>
          </View>
          <View style={styles(this.props).col2}>
            <Picker
              selectedValue="java"
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => {}}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
      </View>
      );
  }
  
}

const styles = (props: Props) => StyleSheet.create({
  container: {
    top: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  textStyle: {
    fontSize: base.FONT_SIZE_LARGE
  },
  col1: {
    width: '50%'
  },
  col2: {
    width: '50%'
  }
});


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    themeState: state.themeReducer.themeState ? state.themeReducer.themeState : state.themeReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Change Theme
      reduxLogin: (model: ThemeModelType) => dispatch(changeTheme(model)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);