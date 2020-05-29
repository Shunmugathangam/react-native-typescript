import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Home, About } from './Home/Index';
import { Register, Login } from './Account/Index';
import { Settings } from './Settings/Index';
import { LoginModelType, ThemeModelType, lightTheme, darkTheme, colorOptions } from './Store/models';

const Tab = createBottomTabNavigator();

type RootStackParamList = {
    Home: undefined;
    About: undefined;
    SignUp: undefined;
    SignIn: undefined;
    Settings: undefined;
    Profile: { userId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="SignIn" component={Login} options={{headerTitle: "Sign In"}}/>
      <Stack.Screen name="SignUp" component={Register} options={{headerTitle: "Sign Up"}}/>
    </Stack.Navigator>
  );
}

const AppTabNavigator = (props: Props) => {

    const HomeStackNavigator = () => {
      return (
        <Stack.Navigator
          screenOptions={{
            headerTintColor: colorOptions[props.themeState.color].PRIMARY_FOREGROUND_COLOR,
            headerStyle: {
              backgroundColor: colorOptions[props.themeState.color].PRIMARY_COLOR,
            }
          }}>
          <Stack.Screen name="Home" component={Home} options={{headerTitle: "Home"}}/>
          <Stack.Screen name="About" component={About} options={{headerTitle: 'About'}}/>
        </Stack.Navigator>
      );
    }

    const SettingsStackNavigator = () => {
      return (
        <Stack.Navigator screenOptions={{ headerTintColor: colorOptions[props.themeState.color].PRIMARY_FOREGROUND_COLOR, headerStyle: { backgroundColor: colorOptions[props.themeState.color].PRIMARY_COLOR }}}>
          <Stack.Screen name="Settings" component={Settings} options={{headerTitle: "Settings"}}/>
        </Stack.Navigator>
      );
    }

    return (
      <Tab.Navigator 
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                
                let iconName;
                let colorName = focused ? colorOptions[props.themeState.color].PRIMARY_COLOR : '#000000';
                         
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Friends') {
                    iconName = focused ? 'facebook-f' : 'facebook-f';
                } else if (route.name === 'Shops') {
                    iconName = focused ? 'shopping-bag' : 'shopping-bag';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'search' : 'search';
                } else if (route.name === 'More') {
                    iconName = focused ? 'navicon' : 'navicon';
                }

                return <Icon name={iconName ? iconName : 'home'} size={30} color={colorName} />;
             },
            })}
            tabBarOptions={{
                activeTintColor: colorOptions[props.themeState.color].PRIMARY_COLOR,
                inactiveTintColor: '#000000',
                keyboardHidesTabBar: true}}>

                  

          <Tab.Screen name="Home" component={HomeStackNavigator} />
          <Tab.Screen name="Friends" component={About} />
          <Tab.Screen name="Search" component={About} />
          <Tab.Screen name="Shops" component={About} />
          <Tab.Screen name="More"  component={SettingsStackNavigator} />

      </Tab.Navigator>
    );
}

interface Props {
  loginState: LoginModelType;
  themeState: ThemeModelType;
};

class Routes extends React.Component<Props> {

    render() {
        return (
            <>
                <NavigationContainer>
                    {this.props.loginState.loggedIn === true ? (<AppTabNavigator loginState={this.props.loginState} themeState={this.props.themeState} />) : (<AccountStackNavigator />)}
                </NavigationContainer>
            </>
        );
   }
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    loginState: state.authReducer.loginState ? state.authReducer.loginState : state.authReducer,
    themeState: state.themeReducer.themeState ? state.themeReducer.themeState : state.themeReducer,
  };
};

export default connect(mapStateToProps)(Routes);