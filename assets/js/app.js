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
        this.onAboutClick = this.onAboutClick.bind(this);
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
                img: "kepler.png",
                title: "MS Office Web Simulation",
                desc: `Developed MS Excel web simulation in JavaScript & web app to visualize project reports using Redmine API.
                Implemented file auto save functionality using web workers & auto-fill series algorithms for Excel.
                Designed distributed selenium automation with TestNG across multiple devices & platforms in Java`,
                tech: ["Javascript | ", "C# | ", "HTML/CSS"],
                loc: {text: "Go to the Product page", link: "https://www.zeuslearning.com/kepler"}
            },{
                img: "rogueai.gif",
                title: "Rogue-like Explorer AI Agent",
                desc: `Implemented exploration agent with propositional knowledge base for inference and decision making, A-star and depth-limited search for path planning.
                Increased average exploration rate to 98% and winning chances by 20-30%.`,
                tech: ["Python"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/ai-explorer"}
            },{
                img: "2bots.png",
                title: "Studying Collaboration in Human-Robot Population",
                desc: `The project implements a framework to study the interaction of a human-robot population with Turtlebots in a ROS Gazebo simulation.
                In the user study, I have evaluated the efficiency and preference of an HR collaboration.`,
                tech: ["Python | ROS | Gazebo"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/human-robot-population-collab"}
            },{
                img: "distributed.png",
                title: "Distributed System - Service Registry & Load Balancer",
                desc: `Designed highly disturbed system with no single point of failure using Node Express.
                Implemented blockchain ledger, load balancer with registry caching and service registry with health checkups.`,
                tech: ["Javascript | ", "NodeJS"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/distributed-system"}
            },{
                img: "tfsapp.png",
                title: "TFS Plugin & Web App",
                desc: `Developed a c++ windows win32 service to sync sql database and Team Foundation Server database.
                Designed Web application in ASP.net to track and manage TFS projects, eliminating all means of delays to the clients in knowing the current milestones of their products shared with the providers.`,
                tech: ["C# | ", "C++ | ", "ASP.net | ", "MS SQL"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/TFS-SyncService"}
            },{
                img: "snapgest.png",
                title: "Gesture Recognition using Image Processing",
                desc: `Built gestures recognition based cross-platform application in Java & OpenCV to interact with computers.
                Improved image recognition algorithm using various color models and image filters.`,
                tech: ["OpenCV | ", "Java"],
                loc: {text: "View on GitHub", link: "https://github.com/div5yesh/snapgest"}
            }]
        };
    }

    onAboutClick(event){
        let about = !this.state.about;
        if(about){
            this.introbout.style.top = "-484px";
            event.target.classList.add("lightup");
        } else{
            this.introbout.style.top = "0";
            event.target.classList.remove("lightup");

        }
        this.setState({about});
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

        return <div>
            <div class="appliner">
                <a href="https://github.com/div5yesh/div5yesh.github.io/archive/master.zip">&lt;click to download the source code for this template/&gt;</a>
            </div>
            <div class="aboutmebtn" onClick={this.onAboutClick}></div>
            <div class="introcontainer">
                <div class="bgimage"></div>
                <div class="introbout" ref={(elem) => this.introbout = elem}>
                    <Section index="0" name="Intro">
                        <div class="dpl0">
                            <div class="dpl1">
                                <div class="mydp"></div>
                            </div>
                        </div>
                        <h1>Divyesh Chitroda<TypeCursor color="white"/></h1>
                        <h2>Web & Game Developer</h2>
                        <Social />
                    </Section>
                    <Section name="About Me">
                        <p>I'm Divyesh. I have 4 years of experience in Software Development. I'm an ML and Robotics🤖 enthusiast.</p>
                        <p>{`I read, write and code, well not at the same time. I'm creative but cannot really draw a cat🐱. I play and create video games🎮.
                            Currently, I'm working on visualization and time series analysis of fMRI data.`}</p>
                        {/* <p><a href="darklab/index.html">Dark Lab</a></p> */}
                    </Section>
                </div>
            </div>
            <Menu items={["Portfolio", "Experience", "Contact Me"]}/>
            <Section index="1" name="Portfolio">
                {cards}
            </Section>
            <Section index="2" name="Experience">
                {exps}
            </Section>
            <Section index="3" name="Contact Me">
                <Contact />
            </Section>
            <footer>
                <div class="copyright">
                    © Copyright 2019, Divyesh Chitroda.
                </div>
                <Social />
            </footer>
        </div>
    }
}

export default App;