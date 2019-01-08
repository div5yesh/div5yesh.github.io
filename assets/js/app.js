import { h, render, Component } from 'preact';
import Section from './components/section';
import Card from './components/card';
import TypeCursor from './components/typecursor';
import Social from './components/social';
import Menu from './components/menu';

class App extends Component{
    
    render(props, state){

        let carddata = [{
            img: "rummy.jpg",
            title: "RummyCircle Game Table - Native App",
            desc: `Implemented multiplayer online rummy game in Cocos2d (JavaScript & Redux) using unified codebase & Web Socket bridge in Java for native platform.
            Implemented code & resources hot update for Rummy Circle native app using Cocos2d Assets Manager.
            Developed error-reporting tool to send game error logs to AWS server.`,
            tech: ["Cocos2d-x | ", "Javascript | ", "Redux | ", "Gradle | ", "Android | ", "Java"],
            loc: {text: "Open app site", link: "https://www.rummycircle.com/"}
        },{
            img: "",
            title: "MS Office Web Simulation",
            desc: `Developed MS Excel web simulation in JavaScript & web app to visualize project reports using Redmine API.
            Implemented file auto save functionality using web workers & auto-fill series algorithms for Excel.
            Designed distributed selenium automation with TestNG across multiple devices & platforms in Java`,
            tech: ["Javascript | ", "C# | ", "HTML/CSS"],
            loc: {text: "View on GitHub", link: "https://github.com/div5yesh"}
        },{
            img: "",
            title: "Native Game Table",
            desc: "This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.",
            tech: ["cocos2d-x", "javascript"],
            loc: {text: "View on GitHub", link: "https://github.com/div5yesh"}
        },{
            img: "",
            title: "Native Game Table",
            desc: "This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.",
            tech: ["cocos2d-x", "javascript"],
            loc: {text: "View on GitHub", link: "https://github.com/div5yesh"}
        }];

        let cards = carddata.map((data, key)=>{
            return <Card {...data} flip={key % 2}/>
        });

        return <div style="width:100%; height:100%">
            <div class="appliner"></div>
            <Section index="0" name="About">
                <div class="bgimage"></div>
                <div class="dpl0">
                    <div class="dpl1">
                        <div class="mydp"></div>
                    </div>
                </div>
                <h1>Divyesh Chitroda<TypeCursor color="white"/></h1>
                <h2>Web & Game Developer</h2>
                <Social />
            </Section>
            <Menu />
            <Section index="2" name="Portfolio">
                {cards}
            </Section>
            <Section index="1" name="Experience">
            </Section>
            <Section index="3" name="Contact Me"/>
            <footer>
                <div class="copyright">
                    © Copyright 2019, ◬IVCHITR⊙A.com
                </div>
                <Social />
            </footer>
        </div>
    }
}

export default App;