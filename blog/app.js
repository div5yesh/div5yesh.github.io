import { h, render, Component } from 'preact';
import Markdown from 'preact-markdown';

export default class App extends Component {
    constructor(){
        super();
        this.posts = [{
            title: "",
            src: "",
        },{}];
        this.state = {
            data: ""
        }
    }

    async componentWillMount(){
        let response = await fetch('./blog/blog1.md');
        let data = await response.text();
        this.setState({data});  
    }

    render(props, state){
        return <div>
            <Markdown markdown={state.data}/>
        </div>;
    }
}