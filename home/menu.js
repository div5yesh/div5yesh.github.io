import { h, render, Component } from 'preact';

class Menu extends Component{

    render(props){

        let items = props.items.map((item)=>{
            return <li class="menuitem"><a href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a></li>;
        });

        items.push(<li class="menuitem"><a href={`https://blog.divchitroda.com`}>Blog</a></li>);

        return <div class="menubar">
            <ul class="menu">
                {items}
            </ul>
        </div>
    }
}

export default Menu;