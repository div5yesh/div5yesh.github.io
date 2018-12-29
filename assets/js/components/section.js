import { h, render, Component } from 'preact';

class Section extends Component{

    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClick(event){
        this.setState({expand: true});
    }

    onClose(event){
        this.setState({expand: false});
        event.stopPropagation();
    }

    render(props){
        let sectionClass = `section ${props.name}`;
        return <div class={sectionClass} onClick={this.onClick}>
            <div class="close" onClick={this.onClose} ref={(elem)=>{this.close = elem}}>X</div>
            {props.name.toUpperCase()}
            {props.children}
        </div>
    }

    componentDidUpdate(){
        this.base.style.top = this.state.expand ? `-${25 * this.props.index}%`: "";
        this.base.style.height = this.state.expand ? "100%" : "25%";
        this.close.style.left = this.state.expand ? "20px": "-50px";
    }
}

export default Section;