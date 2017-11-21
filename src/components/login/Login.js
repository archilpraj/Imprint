import React, {Component} from 'react';
import API from '../../Api';
import {Image,KeyboardAvoidingView,View,Text,ToastAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm.js'
import GetPassword from './GetPassword.js'
import NewPassword from './NewPassword.js'

export default class Login extends Component{

  state={
    username:"",
    isRegistered:false,
    called:false,
  };

  getRenderData=()=>{
    if(this.state.isRegistered && this.state.called){
      DisplayForm=<GetPassword/>
    }else{
      DisplayForm=<NewPassword/>
    }
  }

  _onPressButton = () => {

    API.post('checkEmail', {
      email: this.state.username
    })
    .then(response =>console.log(response.data))
    .catch(err => console.log(err))
  }

  isRegistered=()=>{
    ToastAndroid.show('Welcome Back '+this.state.username, ToastAndroid.SHORT);
    this.setState({isRegistered:true});
    this.setState({called:true},function(){
      getRenderData();
    });
  }

  notRegistered=()=>{
    ToastAndroid.show('Hello New User '+this.state.username, ToastAndroid.SHORT);
    this.setState({isRegistered:false});
    this.setState({called:true},function(){
      getRenderData();
    });
  }

  setUsername=(text)=>{
    this.setState({username:text});
  }


  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoName}>
            Imprint!
          </Text>
          <Text style={styles.title}>
            Step Up To Your Account.
          </Text>
        </View>
        <View style={styles.formContainer}>
          {/* {this.state.DisplayForm} */}
          <NewPassword/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles={
  container:{
    flex:1,
    backgroundColor:'#3498db',
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100
  },
  logoName:{
    fontSize:45,
    color:'#000000',
    fontStyle:'italic',
    fontWeight:'bold'
  },
  title:{
    color:'#ffffff',
    fontSize:15,
    marginTop:10,
    textAlign:'center',
    width:100,
    opacity:0.9,
  }
};
