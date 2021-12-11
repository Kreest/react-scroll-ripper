import React from 'react'

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {a:null};
    }
    render(){
        return (<div><h1>Hello there {this.state.a ?? ""}!</h1>
                <button onClick={() => this.setState({a: this.state.a+1})}>ASC</button></div>);
    }
}
