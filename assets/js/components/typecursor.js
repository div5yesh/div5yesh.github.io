import { h, render, Component } from 'preact';

const typeAnimation = {
    backgroundColor: "#f7f4f4",
    width: "10px",
    display: "inline-block",
    height: "50px",
    top: "2px",
    position: "relative",
    marginLeft: "-25px"
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
            duration: 1000,
            iterations: Infinity
        });
    }
}

export default TypeCursor;