import { h, render, Component } from 'preact';
import Section from './components/section';
import TypeCursor from './components/typecursor';

class App extends Component{
    render(props, state){
        return <div style="width:100%; height:100%">
            <Section index="0" name="about">
                <TypeCursor />
                <div class="bout">
                    <div class="desg">WEB & GAME</div> Developer
                </div>
                <div class="bout">
                    div5yesh@gmail.com | 
                    <a href="https://medium.com/@div5yesh">Medium</a> |
                    <a href="https://github.com/div5yesh">GitHub</a> |
                    <a href="https://500px.com/div5yesh">500px</a>
                </div>
            </Section>
            <Section index="1" name="experience">
                <div class="exp">
                    Play Games24x7 Pvt. Ltd.
                    <br />
                    Software Development Engineer, Jan 2017 - Jul 2018
                </div>
                <div class="exp">
                    Zeus Learning Pvt. Ltd.
                    <br />
                    Senoir Software Engineer, Jul 2016 - Jan 2017
                    <br />
                    Software Engineer, Jun 2014 - Jun 2016
                </div>
                <div class="exp">
                    Malay InfoTech Pvt. Ltd.
                    <br />
                    Software Engineer Intern, Dec 2013 - Mar 2014
                </div>
            </Section>
            <Section index="2" name="portfolio">
                <div class="proj">
                    Game table for Native App (Rummy Circle) – Play Games24x7
                    <br />
                    JavaScript | Java | Cocos2d | React | Android |Gradle, Jul 2017
                </div>
                <div class="proj">
                    Interactive MS Office for learning – Zeus Learning
                    <br />
                    JavaScript | Java | Selenium | Backbone | Grunt, Jan 2015
                </div>
            </Section>
            <Section index="3" name="passion"/>
        </div>
    }
}

export default App;