import { create } from './util.js';

//function to load menu page
function displayMenu() {
    const copyContainer = document.getElementById('copy-container');
    
    const p1 = create({
        type: 'p',
        textContent: 'MENU MENU MENU MENU',
        parent: copyContainer
    });

}

export default displayMenu;
