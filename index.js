import { h, render } from 'preact';
import App from './assets/js/app';
import AOS from 'aos';

AOS.init({
    anchorPlacement: 'top-bottom',
    easing: 'ease-in-out',
    mirror: true,
    duration: 600,
    delay: 200
});

render(<App />, document.getElementById("app"));