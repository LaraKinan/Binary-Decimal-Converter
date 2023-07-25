
import { StyleSheet } from 'react-native';

var backgroundColor = '#d2c2a1';
var secondaryColor = '#aa6c39';
var auxColor = '#e0ceb5'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      width: "40%",
      backgroundColor: secondaryColor,
      borderRadius: 10,
    },
    inputStyle: {
      backgroundColor: auxColor,
      borderRadius: 10,
      margin: 15,
      height: 20,
      textAlign: 'center',
      alignSelf: 'center',
    },
    alignedView: {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 10
    },
    switchButton: {
      marginHorizontal: 15, 
      marginTop: 5, 
      width: 50,  
      textAlign: 'center', 
      borderRadius: 5, 
      backgroundColor: auxColor
    },
    textStyle: {
      color: '#fff',
      margin: 5
    }
  });