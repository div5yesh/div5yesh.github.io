import { h, render, Component } from 'preact';

class Menu extends Component{

    render(props){

        let items = props.items.map((item)=>{
            return <li class="menuitem"><a href={`#${item.toLowerCase().trim()}`}>{item}</a></li>
        });

        return <div class="menubar">
            <ul class="menu">
                {items}
            </ul>
            <div class="menuline"></div>
        </div>
    }
}

export default Menu;