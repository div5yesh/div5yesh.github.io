import { h, render, Component } from 'preact';
import Section from './components/section';
import Card from './components/card';
import TypeCursor from './components/typecursor';
import Social from './components/social';
import Contact from './components/contact';
import Menu from './components/menu';
import Exp from './components/exp';

class App extends Component{
    
    constructor(){
        super();
        this.state = {
            expdata: [{
                img: "games24x7.png",
                title: "Software Dev. Engineer",
                company: "Play Games24x7"
            },{
                img: "zeus.png",
                title: "Software Engineer",
                company: "Zeus Learning"
            },{
                img: "malay.png",
                title: "Software Engineer Intern",
                company: "Malay Infotech"
            }],
            carddata: [{
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
                loc: {text: "Go to Product page", link: "https://www.zeuslearning.com/kepler"}
            },{
                img: "",
                title: "Gesture Recognition using Image Processing",
                desc: `Built gestures recognition based cross-platform application in Java & OpenCV to interact with computers.
                Improved image recognition algorithm using various color models and image filters.`,
                tech: ["OpenCV | ", "Java"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/snapgest"}
            },{
                img: "",
                title: "Rogue-like Explorer AI Agent",
                desc: `Implemented exploration agent with propositional knowledge base for inference and decision making, A-star and depth-limited search for path planning.
                Increased average exploration rate to 98% and winning chances by 20-30%.`,
                tech: ["Python"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/ai-explorer"}
            }]
        };
    }

    render(props, state){

        let carddata = state.carddata,
        expdata = state.expdata;

        let cards = carddata.map((data, key)=>{
            return <Card {...data} flip={key % 2}/>
        });

        let exps = expdata.map((data, key)=>{
            return <Exp {...data}/>
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
            <Menu items={["About", "Porfolio", "Experience", "Contact Me"]}/>
            <Section index="2" name="Portfolio">
                {cards}
            </Section>
            <Section index="" name="Experience">
                {exps}
            </Section>
            <Section index="3" name="Contact Me">
                <Contact />
            </Section>
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