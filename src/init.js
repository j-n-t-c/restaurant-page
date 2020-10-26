import {create, clear, setActiveTab} from "./util.js";
import displayHome from './tabHome.js';
import displayMenu from './tabMenu.js';
import displayContact from './tabContact.js';
function init() {
    const content = document.getElementById('content');

    const header = create({
        type: 'div',
        id: 'header',
        parent: content
    });

    const img = create({
        type: 'img',
        id: 'header-img',
        src: './img/donuts1.jpg',
        parent: header
    })

    const h1 = create({
        type: 'h1',
        id: 'title',
        textContent: 'DUDLEY\'S DONUTS',
        parent: header
    });

    const tabHome = create({
        type: 'div',
        cl: 'tab-highlight',
        id: 'tab-home',
        eventListener: {
            type: 'click',
            callback: () => {
                const copyContainer = document.getElementById('copy-container');
                clear(copyContainer);
                displayHome();
                setActiveTab('tab-home')
            }
        },
        parent: header
    });

    const spanHome = create ({
        type: 'span',
        textContent: 'home',
        parent: tabHome
    })

    const tabMenu = create({
        type: 'div',
        cl: 'tab',
        id: 'tab-menu',
        eventListener: {
            type: 'click',
            callback: () => {
                const copyContainer = document.getElementById('copy-container');
                clear(copyContainer);
                displayMenu();
                setActiveTab('tab-menu')
            }
        },
        parent: header
    });

    const spanMenu = create ({
        type: 'span',
        textContent: 'menu',
        parent: tabMenu
    })

    const tabContact = create({
        type: 'div',
        cl: 'tab',
        id: 'tab-contact',
        eventListener: {
            type: 'click',
            callback: () => {
                const copyContainer = document.getElementById('copy-container');
                clear(copyContainer);
                displayContact();
                setActiveTab('tab-contact')
            }
        },
        parent: header
    });

    const spanContact = create ({
        type: 'span',
        textContent: 'contact',
        parent: tabContact
    })

    const mainContent = create({
        type: 'div',
        id: 'main-content',
        parent: content
    })

    const copyContainer = create({
        type: 'div',
        id: 'copy-container',
        parent: mainContent
    })

    displayHome();
}


export default init;