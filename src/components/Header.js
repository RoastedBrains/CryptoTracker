import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import RefreshCoinData from './../Actions/RefreshCoinData';

class Header extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  _onPressButton() {
    console.log(this.props);
    this.props.RefreshCoinData();
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Crypto Tracker ⦾</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 25,
    paddingBottom: 25,
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
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
      crypto: state.crypto
  }
}

export default connect(mapStateToProps, { RefreshCoinData })(Header)