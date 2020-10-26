import { create } from './util.js';

//function to load home page
function displayContact() {
    const copyContainer = document.getElementById('copy-container');
    
    const p1 = create({
        type: 'p',
        textContent: 'CONTACT CONTACT CONTACT',
        parent: copyContainer
    });

}

export default displayContact;
