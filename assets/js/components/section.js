import { h, render, Component } from 'preact';

class Section extends Component{

    render(props){
        let sectionClass = `section ${props.name.toLowerCase().replace(' ', '')}`,
            aos = `fade-${props.index % 2 ? 'right' : 'left'}`;
        return <div id={props.name.toLowerCase().replace(' ', '')} class={sectionClass}>
            <h3 data-aos={aos}>{props.name}</h3>
            {props.children}
        </div>
    }
}

export default Section;