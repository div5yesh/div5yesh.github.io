import { h, render, Component } from 'preact';
import Section from './components/section';
import Card from './components/card';
import TypeCursor from './components/typecursor';
import Social from './components/social';

class App extends Component{
    
    render(props, state){

        let carddata = [{
            img: "",
            desc: "This is rummy circle.",
            tech: ["cocos2d-x", "javascript"],
            loc: ""
        }];

        let cards = carddata.map((data)=>{
            return <Card {...data}/>
        });

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
            <Section index="2" name="Portfolio">
                {cards}
            </Section>
            <Section index="1" name="Experience">
            </Section>
            <Section index="3" name="Contact Me"/>
            <footer>
                <div class="copyright">
                    © Copyright 2019, DivChitroda.com
                </div>
                <Social />
            </footer>
        </div>
    }
}

export default App;