import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';


class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        console.log(crypto);
        return crypto.data.map((coin, index) =>
            <CoinCard
                key={index}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }

    render() {

        const { crypto } = this.props;

        if( crypto.refreshData ) {
            this.props.FetchCoinData();
        }

        if( crypto.isFetching ) {
            return(
                <View>
                    <Spinner
                        visibility={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: "#253145"}}
                        animation="fade"
                    />
                </View>
            )
        }

        return(
            <View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this.renderCoinCards()}
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 10
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
