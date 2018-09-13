import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'


class Home extends Component {
    state = { 
        name: '',
        text: ''
    }
    render() { 
        return ( 
            <View style={styles.container}>
                {/* <View style={styles.registerBox}>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.inputStyle}
                        underlineColorAndroid="red"      
                        onChangeText={(e) => {this.setState({name: e})}}
                        value={this.state.name}
                        />
                        <Button
                        style={styles.buttonStyle}
                        title="submit"
                        onPress={() => {
                            alert(this.state.name)
                            this.props.navigation.navigate('Board')
                        }} 
                        />
                    </View>
                </View> */}
                <Button
                title="play"
                containerViewStyle={{
                    width: '80%'
                }}
                onPress={() => {
                    this.props.navigation.navigate('Board')
                }}
                />
            </View>
         );
    }
}
 


{/* <TextInput
  style={styles.inputStyle}
  underlineColorAndroid="red"
  onChangeText={(e) => this.setState({name: e})}
  value={this.state.name}
/> */}

{/* <TextInput
style={styles.inputStyle}
underlineColorAndroid="red"      
onChange={(e) => {
    this.setState({
        name: e
    })
}}
value={this.state.name}
placeholder="Your name"
/> */}


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerBox: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: 'black'
    },
    inputStyle: {
        flex: 3
    },
    buttonStyle: {
        flex: 1
    },
    inputContainer: {
        height: 30,
        width: 300,
        flexDirection: 'row'
    }
})