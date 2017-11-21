import React,{Component} from 'react';
import{View,Text,StyleSheet,Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Splash extends Component{

  componentDidMount() {
    setTimeout(function () {
      Actions.home();
    }, 2000);
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Imprint!</Text>
          <Text style={styles.subtitle}>Your Presence On Web</Text>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  wrapper:{
    backgroundColor:'#64b5f6',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color:'white',
    fontSize:35,
    fontWeight:'bold',
    justifyContent:'center',
  },
  footer:{
    color:'white',
    fontWeight:'200',
    paddingBottom:20
  },
  titleWrapper:{
    justifyContent:'center',
    flex:1
  },
  subtitle:{
    fontSize:25,
    paddingTop:20
  }
});
