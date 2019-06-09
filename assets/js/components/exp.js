import { h, render, Component } from 'preact';

class Exp extends Component{

    constructor(){
        super();
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        let classList = this.base.classList;
        if(!classList.contains("hover")){
            this.base.classList.add("hover");
        }
    }
    
    onMouseLeave(){
        let classList = this.base.classList;
        if(classList.contains("hover")){
            this.base.classList.remove("hover");
        }
    }

    render(props){
        let expClass = `exp ${props.company.toLowerCase().replace(' ', '')}`,
        imgsrc = `../assets/media/${props.img}`;

        return <div class={expClass} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <div>
                <a href={props.url}><div class="logo" style={`background-image: url('${imgsrc}')`}></div></a>
                <h3>{props.title}</h3>
                <h3>{props.company}</h3>
            </div>
        </div>
    }
}

export default Exp;