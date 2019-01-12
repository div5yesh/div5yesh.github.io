import { h, render, Component } from 'preact';

class Contact extends Component{

    onSubmit(){
        console.log("Submitted");
    }

    render(props){
        return <div class="contact">
            <form name="gform" id="gform" ref={form => this.form = form} enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSeHFc4Xdfe70H2DNHzPJbh_surMTC19PDXr396oHuMfaT6vcA/formResponse?" target="hidden_iframe" onSubmit={this.onSubmit}>
                <input required maxlength="100" type="text" placeholder="John Doe" name="entry.473184504" id="entry.473184504" style="margin-right: 10px"/>
                <input required maxlength="100" type="email" placeholder="john@doe.com" name="entry.1312265686" id="entry.1312265686" style="margin-left: 10px"/>
                <textarea required maxlength="500" type="textarea" placeholder="Your message here." name="entry.1403761221" id="entry.1403761221"/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </form>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload=""></iframe>
        </div>
    }
}

export default Contact;