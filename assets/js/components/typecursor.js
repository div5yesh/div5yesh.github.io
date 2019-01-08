import { h, render, Component } from 'preact';

class TypeCursor extends Component{
    render(props){
        const typeAnimation = {
            backgroundColor: `${props.color}`,
            width: "10px",
            display: "inline-block",
            height: "50px",
            top: "2px",
            position: "relative"
        };

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