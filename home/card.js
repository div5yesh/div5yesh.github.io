import { h, render, Component } from 'preact';

class Card extends Component{

    render(props){
        let cardClass = `card flip${props.flip} ${props.img.split('.')[0]}`;

        return <div class={cardClass}>
            <div class="contentholder">
                <div class="screenshot"><img src={`../media/${props.img}`}/></div>
                <div class="content">
                    <h3 class="title">{props.title}</h3>
                    <div class="desc">{props.desc}</div>
                </div>
            </div>
            <div class="tech">{props.tech}</div>
            <div class="redirect"><a href={props.loc.link}>{props.loc.text}</a></div>
        </div>
    }
}

export default Card;