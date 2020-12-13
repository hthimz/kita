
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Checkout extends Component {
    render(){
        return (
            <View style={styles.container}>
              <Text>welcome to Checkout !!</Text>
            </View>
          );
        }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Checkout;