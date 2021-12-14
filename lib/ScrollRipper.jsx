import React from 'react';

export default class ScrollRipper extends React.Component {
    constructor() {
        super();

        this.state = {sy:0}
    }
    
    render(){
        const {offsets, children} = this.props;
        const ci = offsets.findIndex((o) => this.state.sy <= o);
        // const fc = children.map((c) => {
        //     c
        // });
        console.log(ci);

        return <div style={{height: this.props.height}}> {children[ci]} </div>;
    }

    componentDidMount(){
        window.addEventListener("scroll", (_) => {this.setState({sy:window.scrollY}); console.log(window.scrollY)})
    }
}
