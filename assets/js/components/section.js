import { h, render, Component } from 'preact';

class Section extends Component{

    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClick(event){
    }

    onClose(event){
    }

    render(props){
        let sectionClass = `section ${props.name.toLowerCase().replace(' ', '')}`;
        return <div id={props.name.toLowerCase().replace(' ', '')} class={sectionClass} onClick={this.onClick}>
            <h3>{props.name}</h3>
            {props.children}
        </div>
    }

    componentDidUpdate(){
    }
}

export default Section;