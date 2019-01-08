import { h, render, Component } from 'preact';
import Section from './components/section';
import Card from './components/card';
import TypeCursor from './components/typecursor';
import Social from './components/social';
import Menu from './components/menu';

class App extends Component{
    
    render(props, state){

        let carddata = [{
            img: "",
            title: "RummyCircle Native Game Table",
            desc: "This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.This is rummy circle.",
            tech: ["cocos2d-x", "javascript"],
            loc: ""
        }];

        let cards = carddata.map((data)=>{
            return <Card {...data}/>
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
                    © Copyright 2019, DivChitroda.com
                </div>
                <Social />
            </footer>
        </div>
    }
}

export default App;