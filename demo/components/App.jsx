import React from 'react'
import ScrollRipper from '../../lib/ScrollRipper'

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {a:null};
    }
    render(){
        return (<ScrollRipper height={3000} offsets={[1000,2000, 3000]}>
            <div style={{position:"sticky", top:0, height: "100vh", background: "blue"}}> Hello </div>
            <div style={{position:"sticky", top:0, height: "100vh", background: "red"}}> There</div>
            <div style={{position:"sticky", top:0, height: "100vh", background: "green"}}> General Kenobi!</div>
            </ScrollRipper>);
    }
}
