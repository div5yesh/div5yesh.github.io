import { h, render, Component } from 'preact';

class Exp extends Component{

    render(props){
        let expClass = `exp`;

        return <div class={expClass}>
            <div>
                {props.title}<br/>
                {props.company}
            </div>
        </div>
    }
}

export default Exp;