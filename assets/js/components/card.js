import { h, render, Component } from 'preact';

class Card extends Component{

    render(props){
        let sectionClass = `card ${props.name}`;
        return <div class={sectionClass}>
            {props.children}
        </div>
    }
}

export default Card;