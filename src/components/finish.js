import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

class Finish extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Congrats player {this.props.navigation.getParam('winner').toUpperCase()} you won!!
                </Text>
                <Text>
                    {"\n"}
                </Text>
                <Button
                title="back to home"
                onPress={() => {
                    this.props.navigation.navigate('Home')
                }}
                />
                <Text>
                    {"\n"}
                </Text>
                <Button
                title="play again"
                onPress={() => {
                    this.props.navigation.navigate('Board')
                }}
                />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    }
})

export default Finish;