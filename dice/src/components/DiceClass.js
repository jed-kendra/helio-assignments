import React from 'react'

export default class DiceRoll extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            side: "",
            sides: [],
            dice: [],
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.rollDice = this.rollDice.bind(this)
    } // end of constructor function

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onClickHandler(event) {
        console.log(event.target.value)
        this.setState({side: this.state.side})
        let tempSides = [...this.state.sides]
        tempSides.push(this.state.side)
        this.setState({sides: tempSides})
        this.setState({side: ""})
        let tempDice = [...this.state.dice]
        tempDice.push(0)
        this.setState({dice: tempDice})
    }

    rollDice (sides, index) {
        let roll = Math.floor(Math.random() * sides) + 1
        let tempDice = [...this.state.dice]
        tempDice[index] = roll
        this.setState({dice: tempDice})
    }

    render() {

        return (
            <div>
                <h1>Dice Assignment</h1>
                <div>
                    Enter # of sides<input onChange={this.onChangeHandler} name="side" value={this.state.side}></input>
                    <button onClick={this.onClickHandler} >Add Die</button>
                </div>
                <div>
                    {
                    this.state.sides.map((side, index)=> {
                       console.log(side)
                        return(
                        <div>
                            <p key={index}>{this.state.dice[index]}</p><button onClick={() => this.rollDice(side,index)}>Roll Die</button>
                        </div>
                        )
                    })
                    }
                    </div>
            </div>
        )
    }
}
