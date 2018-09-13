import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class Board extends Component {
    state = { 
        boardArr : [['', '', ''], ['', '', ''], ['', '', '']],
        player: 'x'
    }

    checkWinner () {
        let self = this
        let boardCheck = this.state.boardArr
        let xWins = 'xxx'
        let oWins = 'ooo'
        let diagonalOne = `${boardCheck[0][0]}${boardCheck[1][1]}${boardCheck[2][2]}`
        let diagonalTwo = `${boardCheck[0][2]}${boardCheck[1][1]}${boardCheck[2][0]}`
        let verticalOne = ''
        let verticalTwo = ''
        let verticalThree = ''
        let finished = true
        for (let z = 0; z < boardCheck.length; z ++) {
            if ( boardCheck[z].indexOf('') !== -1 ) {
                finished = false
            }
            let currentBoard = boardCheck[z]
            let horizontalBoard = boardCheck[z].join('')
            verticalOne =  verticalOne.concat(currentBoard[0])
            vertiaclTwo = verticalTwo.concat(currentBoard[1])
            verticalThree = verticalThree.concat(currentBoard[2])
            if (horizontalBoard == xWins || horizontalBoard == oWins) {
                alert(`winner winner chicken dinner ${this.state.player}`)
                this.setState({
                    boardArr: [['', '', ''], ['', '', ''], ['', '', '']]
                }, () => {
                    this.props.navigation.navigate('Finish', {
                        winner: self.switch()
                    })
                })
            }
        }
        if (
            verticalOne == xWins ||
            verticalOne == oWins ||
            verticalTwo == xWins ||
            verticalTwo == oWins || 
            verticalThree == xWins ||
            verticalThree == oWins ||
            diagonalOne == xWins ||
            diagonalOne == oWins ||
            diagonalTwo == xWins ||
            diagonalTwo == oWins 
        ) {
            alert(`winner winner chicken dinner ${this.state.player}`)
            this.setState({
                boardArr: [['', '', ''], ['', '', ''], ['', '', '']]
            }, () => {
                this.props.navigation.navigate('Finish', {
                    winner: self.switch()
                })
            })
        } else if (finished) {
            this.setState({
                boardArr: [['', '', ''], ['', '', ''], ['', '', '']]
            }, () => {
                alert('no winners this game, board will reset')
            })
        }
    }

    switch = () => {
        if (this.state.player == 'o') {
            return 'x';
        } else {
            return 'o'
        }
    }

    changePLayer = ()  => {
        if (this.state.player == 'x') {
            this.setState({
                player: 'o'
            })
        } else {
            this.setState({
                player: 'x'
            })
        }
    }

    fill = (row, column) => {
        let newBoard = this.state.boardArr
        newBoard[row][column] = this.state.player
        this.setState({
            boardArr: newBoard
        }, () => {
            this.checkWinner()
            this.changePLayer()
        })
    }

    renderRow () {
        return this.state.boardArr.map((boxes, index) => {
            return (
                <View 
                key={index}
                style={styles.row}>
                    {this.renderColumn(boxes, index)}
                </View>
            )
        })
    }

    renderColumn (boxes, row) {
        return boxes.map((item, column) => {
            if (this.state.boardArr[row][column] == '') {
                return (
                    <TouchableHighlight
                    key={column}
                    style={styles.column}
                    onPress={() => {
                        this.fill(row, column)
                    }}
                    >
                        <View >
                            <Text>{this.state.boardArr[row][column]}</Text>
                        </View>
                    </TouchableHighlight>
                )
            } else {
                return (
                    <View
                    key={column} 
                    style={styles.column}>
                        <Text style={styles.plots}>{this.state.boardArr[row][column]}</Text>
                    </View>
                )
            }
        })

    }

    render() { 
        return ( 
            <View style={styles.container}>
                <Text style={styles.header}>
                    LETS PLAY TIC TAC TOE
                    {"\n"}
                </Text>
                <Text>
                    current player {this.state.player}
                    {"\n"} 
                </Text>
                <View style={styles.boardStyle}>
                    {this.renderRow()}
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    plots: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boardStyle: {
        width: 350,
        height: 350,
        borderWidth: 0.5,
        borderColor: 'black'
    },
   row: {
       flex: 1,
       flexDirection: 'row'
   },
   column: {
       flex: 1,
       borderColor: 'black',
       borderWidth: 0.5,
       justifyContent: 'center',
       alignItems: 'center'
   },
   header: {
       fontSize: 20,
       fontWeight: 'bold',
       color: 'black'
   }
})


export default Board;