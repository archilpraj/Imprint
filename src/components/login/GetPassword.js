import React, {Component} from 'react';
import {View,StatusBar,TextInput,TouchableOpacity,Text,ToastAndroid} from 'react-native';

export default class GetPassword extends Component{

  _onPressButton(){

    ToastAndroid.show('Wtf', ToastAndroid.SHORT);
    ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
        name='password'
        placeholder='Your Password Goes Here'
        placeholderTextColor='rgba(255,255,255,0.7)'
        secureTextEntry
        returnKeyType='go'
        underlineColorAndroid='transparent'
        onChangeText={(text) => this.setState({password:text})}
        ref={(input)=>this.passwordInput=input}
        style={styles.input}/>
        <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressButton}>
          <Text style={styles.buttonText}>
            Login
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
