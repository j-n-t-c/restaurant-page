import { create } from './util.js';

//function to load home page
function displayHome() {
    const copyContainer = document.getElementById('copy-container');
    
    const p1 = create({
        type: 'p',
        textContent: 'Dudley’s Donuts is the passion project of two childhood friends who were reunited when their canine companions became friends at the local dog park. In 1999, they discovered another common interest: donuts.  With Shelly’s baking background and Becca’s business mindset, Dudley’s Donuts was founded at the turn of the century.',
        parent: copyContainer
    });

    const p2 = create({
        type: 'p',
        textContent: 'Why donuts? The team’s research uncovered that Warsaw, PA’s historic old market was seriously lacking in the baked goods department. The donut duo found an affordable storefront in the old police station - a perfect fit.',
        parent: copyContainer
    });

    const img = create({
        type: 'img',
        cl: 'body-img',
        src: './img/donuts4.jpeg',
        parent: copyContainer
    })
}

export default displayHome;
