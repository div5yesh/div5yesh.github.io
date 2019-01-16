import { h, render, Component } from 'preact';

class Contact extends Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        let query = `entry.473184504=${event.target.name.value}&entry.1312265686=${event.target.email.value}&entry.1403761221=${event.target.message.value}`;
        let url = `https://docs.google.com/forms/d/e/1FAIpQLSeHFc4Xdfe70H2DNHzPJbh_surMTC19PDXr396oHuMfaT6vcA/formResponse?${query}`;
        
        fetch(url, {
            mode: "no-cors"
        }).then((res) => {
            this.fliper.style.transform = "rotateY(180deg)";
        });
    }

    render(props, state){  

        return <div class="contact">
            <div class="fliper" ref={(elem) => {this.fliper = elem}}>
                <form name="gform" id="gform" ref={form => this.form = form} enctype="text/plain"
                // action="https://docs.google.com/forms/d/e/1FAIpQLSeHFc4Xdfe70H2DNHzPJbh_surMTC19PDXr396oHuMfaT6vcA/formResponse?" 
                target="hidden_iframe" onSubmit={this.onSubmit}>
                    <input required maxlength="100" type="text" placeholder="John Doe" name="name" id="entry.473184504" style="margin-right: 10px"/>
                    <input required maxlength="100" type="email" placeholder="john@doe.com" name="email" id="entry.1312265686" style="margin-left: 10px"/>
                    <textarea required maxlength="500" type="textarea" placeholder="Your message here." name="message" id="entry.1403761221"/>
                    <input type="submit" value="Send"/>
                    <input type="reset" value="Reset"/>
                </form>
                <form class="submitmessage">
                    <label>Submitted Successfully.</label>
                </form>
            </div>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload=""></iframe>
        </div>
    }
}

export default Contact;