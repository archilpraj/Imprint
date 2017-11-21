import React, {Component} from 'react';
import {View,StatusBar,TextInput,TouchableOpacity,Text,ToastAndroid} from 'react-native';

export default class LoginForm extends Component{

  render(){
    return(
      <View style={styles.container}>
        <TextInput
        name='username'
        placeholder='Enter Your Email Id'
        blurOnSubmit={true}
        placeholderTextColor='rgba(255,255,255,0.7)'
        returnKeyType='done'
        underlineColorAndroid='transparent'
        onChangeText={(text) => this.props.setUsername(text)}
        keyBoardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}/>

        <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPressButton}>
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles={
  container:{
    padding:20,
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    color:'#ffffff',
    paddingHorizontal:10
  },
  iconContainer:{
    fontSize:20,
    padding:10
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
