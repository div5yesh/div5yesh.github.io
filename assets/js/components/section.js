import { h, render, Component } from 'preact';

class Section extends Component{

    render(props){
        let sectionClass = `section ${props.name.toLowerCase().replace(' ', '')}`;
        return <div id={props.name.toLowerCase().replace(' ', '')} class={sectionClass}>
            <h3>{props.name}</h3>
            {props.children}
        </div>
    }
}

export default Section;