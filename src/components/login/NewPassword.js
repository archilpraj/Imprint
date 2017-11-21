import React, {Component} from 'react';
import {View,StatusBar,TextInput,TouchableOpacity,Text,ToastAndroid} from 'react-native';

export default class GetPassword extends Component{

  render(){
    return(
      <View style={styles.container}>
        <TextInput
        name='newpassword'
        placeholder='New Password'
        placeholderTextColor='rgba(255,255,255,0.7)'
        secureTextEntry
        returnKeyType='next'
        underlineColorAndroid='transparent'
        onChangeText={(text) => this.setState({newpassword:text})}
        ref={(input)=>this.passwordInput=input}
        style={styles.input}/>
        <TextInput
        name='confirmpassword'
        placeholder='Confirm Password'
        placeholderTextColor='rgba(255,255,255,0.7)'
        secureTextEntry
        returnKeyType='go'
        underlineColorAndroid='transparent'
        onChangeText={(text) => this.setState({confirmpassword:text})}
        ref={(input)=>this.passwordInput=input}
        style={styles.input}/>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPressButton}>
          <Text style={styles.buttonText}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles={
  container:{
    padding:20
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    color:'#ffffff',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
  },
  buttonText:{
    textAlign:'center',
    color:'#ffffff',
    fontWeight:'700',
  }
};
