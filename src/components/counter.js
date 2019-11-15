import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value:0 };
        this.buttonAddClicked =
        this.buttonAddClicked.bind(this);
        this.buttonSubClicked =
        this.buttonSubClicked.bind(this);
    }
    buttonAddClicked(event) {
        this.setState({ value: this.state.value + 1 }
        );
    }
    buttonSubClicked(event) {
        if (this.state.value === 0) {
            alert("jangan dipaksa woi, udah abis")
        } else { 
            this.setState({ 
                value: this.state.value - 1 
            })
        }
        
    }

    render() {
        return (
            <div>
            <div>
                {this.state.value}
            </div>
            <button onClick = {this.buttonAddClicked}>
                tambah 
            </button>
            <button onClick = {this.buttonSubClicked}>
                kurang
            </button>
        </div>
        )
        
    }
}

export default Counter