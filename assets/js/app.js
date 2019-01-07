import { h, render, Component } from 'preact';
import Section from './components/section';
import Card from './components/card';
import TypeCursor from './components/typecursor';

class App extends Component{
    render(props, state){
        return <div style="width:100%; height:100%">
            <div class="appliner"></div>
            <Section index="0" name="">
                <div class="mydp"></div>
                <h1>Divyesh Chitroda<TypeCursor/></h1>
                <h2>Software Engineer</h2>
                <h3>Web Developer</h3>
            </Section>
            <div class="menubar">
                <ul class="menu">
                    <li class="menuitem">About Me</li>
                    <li class="menuitem">Experience</li>
                    <li class="menuitem">Contact Me</li>
                </ul>
                <div class="menuline"></div>
            </div>
            <Section index="1" name="Experience">
                <Card>
                    
                </Card>
            </Section>
            <Section index="2" name="Portfolio">
            </Section>
            <Section index="3" name="Contact Me"/>
            <footer>
                <div class="copyright">
                    © Copyright 2019, DivChitroda.com
                </div>
                <ul class="socialbar">
                    <li class="socialitem"><a href="https://medium.com/@div5yesh"><img src="../assets/media/icons8-medium.svg" alt="medium@div5yesh"/></a></li>
                    <li class="socialitem"><a href="https://github.com/div5yesh"><img src="../assets/media/icons8-github.svg" alt="github@div5yesh"/></a></li>
                    <li class="socialitem"><a href="https://www.linkedin.com/in/div5yesh/"><img src="../assets/media/icons8-linkedin.svg" alt="linkedin@div5yesh"/></a></li>
                </ul>
            </footer>
        </div>
    }

    componentDidMount(){
        
    }
}

export default App;