import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Crypto Tracker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
});

const { headerContainer, header } = styles;

export default Header;