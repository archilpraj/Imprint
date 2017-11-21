import React, {Component} from 'react';
import {ToastAndroid, TouchableHighlight, View, Text} from 'react-native';
import {SegmentedControlButton, Switcher, Input, Button} from 'nachos-ui';

export default class Login extends Component {

  state = {
    selectedBtn: "",
    searchName:""
  };

  stateDispatcher = (selectedBtn) => {
    this.setState({
      selectedBtn
    }, function() {
      {
        this.state.selectedBtn == "social"
          ? this.setState({modalVisible: 1})
          : this.setState({modalVisible: 2})
      }
    });
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.descText}>
          Welcome!
        </Text>
        <Text style={styles.infoText}>
          Here's a quick guide for you.
          User's reactions are classified from 0-4 where
        </Text>
        <Text style={styles.infoText}>0 - Negative</Text>
        <Text style={styles.infoText}>1 - Somewhat Negative</Text>
        <Text style={styles.infoText}>2 - Neutral</Text>
        <Text style={styles.infoText}>3 - Somewhat Positive</Text>
        <Text style={styles.infoText}>4 - Positive</Text>
      </View>
      <View style={styles.searchContainer}>
        <Input
          icon='md-search'
          style={styles.searchStyle}
          placeholder='Enter Handle/Page Name'
          //value={this.state.searchName}
          underlineColorAndroid='transparent'
          onChangeText={value => this.setState({value})}
        />
      </View>
      <Switcher style={styles.segmentedStyle} onChange={(selectedBtn) => this.stateDispatcher(selectedBtn)} direction='row'>
        <SegmentedControlButton style={styles.segBtnStyle} value='facebook' text='Facebook'/>
        <SegmentedControlButton style={styles.segBtnStyle} value='twitter' text='Twitter'/>
      </Switcher>
    </View>)
  }
}

const styles = {
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#3498db',
    justifyContent: 'space-between'
  },
  textContainer: {
    padding: 10
  },
  descText: {
    color: '#ffffff',
    fontSize: 40,
    textAlign:'center',
  },
  infoText:{
    fontSize:20,
  },
  segmentedStyle: {
    height: 40
  },
  segBtnStyle: {
    height: 40
  },
  btnFb: {
    backgroundColor: 'blue',
    width: 10,
    margin: 5,
    padding: 5,
    height:50
  },
  btnTwitter: {
    backgroundColor: 'blue',
    width: 10,
    margin: 5,
    padding: 5
  },
  searchContainer:{
    padding:5,
    marginBottom:10
  },
  searchStyle:{
    margin:25,
    backgroundColor:'#3498db',
    borderRadius:5,
    borderColor:'#000000',
  }
};
