// Import libraries for making component
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Make a component
const Header = () =>{
  return(
    <View style={styles.viewHeader}>
      <Text style={styles.textHeader}>Album</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeader:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    position: 'relative'
  },

  textHeader:{
    fontSize: 20
  }
});

// Make the component available to other parts of the app
export default Header;