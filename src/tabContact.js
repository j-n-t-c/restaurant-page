import { create } from './util.js';

//function to load home page
function displayContact() {
    const copyContainer = document.getElementById('copy-container');
    
    const p1 = create({
        type: 'p',
        textContent: 'CONTACT',
        parent: copyContainer
    });


    const contact1div = create({
        type: 'div',
        parent: copyContainer
    });
    const contact1 = create({
        type: 'h3',
        textContent: 'Dudley\'s Donuts',
        parent: contact1div
    });
    const contact2 = create({
        type: 'p',
        textContent: '123 Fake Street',
        parent: contact1div
    });
    const contact3 = create({
        type: 'p',
        textContent: 'Faketown, PA 54321',
        parent: contact1div
    });
    const contact4 = create({
        type: 'p',
        textContent: '(555) 555-5555',
        parent: contact1div
    });

    const contact2div = create({
        type: 'div',
        parent: copyContainer
    });
    const form1 = create({
        type: 'h3',
        textContent: 'or send us a message here!',
        parent: contact2div
    });
    const label2 = create({
        type: 'label',
        textContent: 'name',
        parent: contact2div
    });
    const form2 = create({
        type: 'input',
        textContent: 'name',
        parent: contact2div
    });
    const label3 = create({
        type: 'label',
        textContent: 'e-mail',
        parent: contact2div
    });
    const form3 = create({
        type: 'input',
        textContent: 'e-mail',
        parent: contact2div
    });
    const label4 = create({
        type: 'label',
        textContent: 'phone',
        parent: contact2div
    });
    const form4 = create({
        type: 'input',
        textContent: 'phone',
        parent: contact2div
    });
    const label5 = create({
        type: 'label',
        textContent: 'comments',
        parent: contact2div
    });
    const form5 = create({
        type: 'input',
        id: 'comments-box',
        textContent: 'comments',
        parent: contact2div
    });
    const img = create({
        type: 'img',
        cl: 'body-img',
        src: './img/map.png',
        parent: copyContainer
    })
}

export default displayContact;
