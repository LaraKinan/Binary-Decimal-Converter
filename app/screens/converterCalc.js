import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { styles } from '../styles';

class BinDecConverter extends Component {
  state = {
    binaryState : 0,
    decimalState: 0,
    calcState: "Bin2Dec",
    error: false
  }
  bin2dec (binaryVal) {
    var value = 0;
    var binaryStringVal = binaryVal.split('').map(Number).reverse();
    value = binaryStringVal.reduce((accumulator, currentValue, idx) =>
    accumulator + currentValue * Math.pow(2, idx))
    if(isNaN(value))
    {
      value = 0;
      this.setState({error: true});
    }
    return value;
  }
  dec2bin (decimalValue) {
    var stringBinary = "";
    var decimalNumVal = parseInt(decimalValue, 10);
    while(decimalNumVal != 0)
    {
      stringBinary = decimalNumVal%2 + stringBinary;
      decimalNumVal = (decimalNumVal - decimalNumVal%2) / 2;
    }
    if(isNaN(value))
    {
      value = 0;
      this.setState({error: true});
    }
    return stringBinary;
  }
  render() {
    /* Calculator used for converting Binary to Decimal or Decimal to Binary 
    * For this, we want to dynamically render the "from" state and the "to" state
    * calcFrom and calcTo are in the written text form
    * fromState and toState hold the values in the from and to state respectively
    * calcFunc evaluates the toState dynamically
    */
    var calcFrom = this.state.calcState === "Bin2Dec"? "Binary" : "Decimal";
    var calcTo = this.state.calcState !== "Bin2Dec"? "Binary" : "Decimal";
    /*
    * Note: this could be easily and efficently solved with the following line but the challenge is to create our own converter
    * const calcFunc = (num) => {this.state.calcState === "Bin2Dec"? this.setState({decimalState : parseInt(num, 2)}) : this.setState({binaryState: (num >>> 0).toString(2)})};
    */
    const calcFunc = (num) => {this.state.calcState === "Bin2Dec"? this.setState({decimalState : this.bin2dec(num)}) : this.setState({binaryState: this.dec2bin(num)})};
    const fromState = this.state.calcState === "Bin2Dec"? this.state.binaryState : this.state.decimalState;
    const toState = this.state.calcState !== "Bin2Dec"? this.state.binaryState : this.state.decimalState;
    
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 25}}>Converter</Text>
        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text  style={styles.textStyle}>
              Convert From {calcFrom} to {calcTo} 
            </Text>
            <TouchableOpacity onPress={() => {this.setState({error: false}); this.setState({calcState: this.state.calcState === "Bin2Dec"? "Dec2Bin" : "Bin2Dec", error: false, binaryState: 0, decimalState: 0})}}><Text style={styles.switchButton}>Swap</Text></TouchableOpacity>
           </View>
          <View style={styles.alignedView}>
            <Text style={styles.textStyle}>{calcFrom}:</Text>
            <TextInput style={styles.inputStyle}
            value={fromState}
            onChangeText={(number) => {this.state.calcState === "Bin2Dec"? this.setState({binaryState: number}) : this.setState({decimalState: number})}}></TextInput>
          </View>
          <View style={styles.alignedView}>
            <Text style={styles.textStyle}>{calcTo}:</Text>
            <TextInput editable={false} style={styles.inputStyle}
            placeholder={toState}></TextInput>
          </View>
          
          <TouchableOpacity style={StyleSheet.flatten([styles.inputStyle, {width: "70%"}])} onPress={() => calcFunc(fromState)}><Text style={{alignItems: 'center', alignSelf: 'center'}}>Convert</Text></TouchableOpacity>
        </View>
          {this.state.error? <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>An error has occurred, please check the number you have put is in the range of {calcFrom} numbers</Text> : null}
      </View>
    );
  }
}
export default BinDecConverter;