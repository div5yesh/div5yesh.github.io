import { h, render, Component } from 'preact';

class Message extends Component{

    show(){
        this.base.style.display = "block";
    }

    hide(){
        this.base.style.display = "none";
    }

    render(props){
        let cardClass = `message ${props.name}`;

        return <div class={cardClass} style="display: none;">
            {props.children}
        </div>
    }
}

export default Message;