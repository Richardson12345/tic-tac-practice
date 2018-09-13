import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Ladder extends Component {
    state = { 
        boardArr: [],
        player1: 0,
        player2: 0,
        current: 1,
        snakes: [7, 15, 30, 47, 59, 66, 77, 85, 98],
        ladders: [8, 16, 23, 33, 52, 70, 88]
    }

    componentDidMount () {
        let newArr = this.state.boardArr
        for (let z = 1; z <= 100; z ++) {
            newArr.push(`${z}`)
        }
        this.setState({
            boardArr: newArr
        })
    }

    renderBoard = () => {
        if (this.state.boardArr.length !== 0) {
            let rowLength = this.state.boardArr.length / 10
            let helper = []
            for (let z = 0; z < rowLength; z ++) {
                helper.push('')
            }
            return (
                helper.map((data, index) => {
                    return (
                        <View
                        key={index}
                        style={styles.row}>
                            {this.renderColumn(index, rowLength)}
                        </View>
                    )
                })
            )
        }
    }

    renderText = (index) => {
        let { player1, player2, boardArr, snakes, ladders } = this.state
        if (index == 0) {
            return (
                <Text>
                    start
                </Text>
                // <Ionicons name='ios-home' size={20} />
            )
        } else if (snakes.indexOf(index) !== -1) {
            return (
                // <Ionicons name='ios-home' size={20} />
                <Text style={{
                    fontSize: 10
                }}>
                    snakes
                </Text>
            )
        } else if (ladders.indexOf(index) !== -1) {
            return (
                // <Ionicons name='ios-home' size={20} />
                <Text style={{
                    fontSize: 9
                }}>
                    ladders
                </Text>
            )
        } else if (index == player1) {
            return (
                <Text>
                    x
                </Text>
            )
        } else if (index == player2) {
            return (
                <Text>
                    o
                </Text>
            )
        } else {
            return(
                <Text>
                    {boardArr[index]}
                </Text>
            )
        }

    }

    renderColumn = (row, length) => {
        // console.log(row, length)
        let board = this.state.boardArr
        let helper = []
        for (let z = 0; z < length; z ++) {
            helper.push('')
        }
        return (
            helper.map((data, column) => {
                if (row !== 0) {
                    let current = Number(`${row}${column}`) 
                    return (
                        <View
                        key={column} 
                        style={styles.columnStyle}>
                            {this.renderText(current)}        
                        </View>
                    )
                } else {
                    return (
                        <View
                        key={column} 
                        style={styles.columnStyle}>
                            {this.renderText(column)}
                        </View>
                    )
                }
            })
        )
    }

    roll = () => {
        let { snakes, ladders } = this.state
        let random = Math.ceil(Math.random() * 6)
        let { current, player1, player2 } = this.state
        if ( current == 1) {
            let value = player1 + random
            let indexCheck = value -1
            if ( snakes.indexOf(indexCheck) !== -1 ) {
                value -= 5
                alert(`oops you hit snakes`)
                this.setState({
                    player1: value,
                    current: 2
                }, () => {
                    this.checkWinner()
                })
            } else if ( ladders.indexOf(indexCheck) !== -1) {
                value += 5
                alert(`yay you got ladder`)
                value += 5
                this.setState({
                    player1: value,
                    current: 2
                }, () => {
                    this.checkWinner()
                })
            } else {
                this.setState({
                    player1: value,
                    current: 2
                }, () => {
                    this.checkWinner()
                })
            }
            
        } else {
            let value = player2 + random
            let indexCheck = value -1
            if ( snakes.indexOf(indexCheck) !== -1 ) {
                value -= 5
                alert(`oops you hit snakes`)
                this.setState({
                    player2: value,
                    current: 1
                }, () => {
                    this.checkWinner()
                })
            } else if ( ladders.indexOf(indexCheck) !== -1) {
                value += 5
                alert(`yay you got ladder`)
                this.setState({
                    player2: value,
                    current: 1
                }, () => {
                    this.checkWinner()
                })
            } else {
                this.setState({
                    player2: value,
                    current: 1
                }, () => {
                    this.checkWinner()
                })
            }
        }
    }

    checkWinner = () => {
        let { boardArr, player1, player2, current } = this.state
        let length = boardArr.length - 1
        if ( player1 >= length ) {
            alert(`game is finished winner is player One`)
            this.setState({
                player1: 0,
                player2: 0
            }, () => {
                this.props.navigation.navigate('Finish', {
                    winner: 'one'
                })
            })
        } else if ( player2 >= length )  {
            alert('game is finished winner is player Two')
            this.setState({
                player1: 0,
                player2: 0
            }, () => {
                this.props.navigation.navigate('Finish', {
                    winner: 'two'
                })
            })
        }
    }

    render() { 
        // console.log(this.state.boardArr)
        return ( 
            <View style={styles.container}>
                <Text>Wellcome to Snakes and Ladders</Text>
                <Text>{"\n"}</Text>
                <Button
                title="roll dice"
                onPress={() => {
                    this.roll()
                }}
                />
                <Text>{"\n"}</Text>
                <View style={styles.boxStyle}>
                    {this.renderBoard()}
                </View>
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
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxStyle: {
        width: 350,
        height: 350,
        borderWidth: 1,
        borderColor: 'black'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'black'
    },
    columnStyle: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    start: {
        color: 'red'
    }
})
 
export default Ladder;