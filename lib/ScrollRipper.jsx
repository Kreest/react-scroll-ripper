import React from 'react';

export default class ScrollRipper extends React.Component {
    constructor() {
        super();
        this.state = {sy:0}
    }
    
    render(){
        const {offsets, children} = this.props;
        const ci = offsets.findIndex((o) => this.state.sy <= o);
        const diff = offsets[ci] - this.state.sy ;
        // const fc = children.map((c) => {
        //     c
        // });
        console.log(diff);

        return (
            <div style={{height: this.props.height}}>
                <div style={{position: "fixed", top: Math.min(0, diff - window.innerHeight)}}>{children[ci]}</div>
                <div style={{position: "fixed", top: diff + "px"}}>{children[ci+1]}</div> 
            </div>
        )
    }

    componentDidMount(){
        window.addEventListener("scroll", (_) => {this.setState({sy:window.scrollY})})
    }
}
