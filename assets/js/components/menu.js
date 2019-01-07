import { h, render, Component } from 'preact';

class Menu extends Component{

    render(props){
        return <div class="menubar">
            <ul class="menu">
                <li class="menuitem">About Me</li>
                <li class="menuitem">Experience</li>
                <li class="menuitem">Contact Me</li>
            </ul>
            <div class="menuline"></div>
        </div>
    }
}

export default Menu;