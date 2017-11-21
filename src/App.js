import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';
import Splash from './Splash';
import Login from './components/login/Login';
import GetPassword from './components/login/GetPassword';
import NewPassword from './components/login/NewPassword';
import Home from './components/dashboard/Home';
import Config from './Api';
// import AppChart from './components/charts/AppChart';


class App extends Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key='splash' component={Splash} title='Splash' initial={true} hideNavBar />
          <Scene key="login" component={Login} title='Login' hideNavBar />
          <Scene key="getPassword" component={GetPassword} title='Password' hideNavBar/>
          <Scene key="NewPassword" component={NewPassword} title='Enter Password' hideNavBar/>
          <Scene key="home" component={Home} title='Dashboard' hideNavBar/>
          {/* <Scene key="appChart" component={AppChart} title='AppChart' hideNavBar/> */}
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
