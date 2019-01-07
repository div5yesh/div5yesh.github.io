import { h, render, Component } from 'preact';
class Social extends Component{

    render(props){
        return <div class="social">
            <ul class="socialbar">
                <li class="socialitem"><a href="https://medium.com/@div5yesh"><img src="../assets/media/icons8-medium.svg" alt="medium@div5yesh"/></a></li>
                <li class="socialitem"><a href="https://github.com/div5yesh"><img src="../assets/media/icons8-github.svg" alt="github@div5yesh"/></a></li>
                <li class="socialitem"><a href="https://www.linkedin.com/in/div5yesh/"><img src="../assets/media/icons8-linkedin.svg" alt="linkedin@div5yesh"/></a></li>
            </ul>
        </div>
    }
}

export default Social;