import { h, render, Component } from 'preact';

const typeAnimation = {
    backgroundColor: "black",
    width: "10px",
    display: "inline-block",
    height: "50px",
    top: "2px",
    position: "relative"
};

class TypeCursor extends Component{
    render(){
        return <div style={typeAnimation}>
        </div>
    }

    componentDidMount(){
        this.base.animate({
            opacity: [1, 0]
        }, {
            duration: 700,
            iterations: Infinity
        });
    }
}

export default TypeCursor;