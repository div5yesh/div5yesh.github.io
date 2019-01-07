import { h, render, Component } from 'preact';

class Card extends Component{

    render(props){
        let sectionClass = `card`;
        return <div class={sectionClass}>
            <div class="screenshot"></div>
            <div class="content">
                <h3 class="title">{props.title}</h3>
                <div class="desc">{props.desc}</div>
            </div>
            <div class="tech">{props.tech}</div>
        </div>
    }
}

export default Card;