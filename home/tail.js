import { h, render, Component } from 'preact';

class Tail extends Component{

    render(props){
        let sectionClass = `tail`;
        return <div class={sectionClass}>
        </div>
    }

    componentDidMount(){
        let items = this.props.text.split(",");
        let tail = items.map((item, key)=>{
            return `<h${key + 1}>${item}</h${key + 1}>`
        });

        this.base.innerHTML = tail;
    }
}

export default Tail;