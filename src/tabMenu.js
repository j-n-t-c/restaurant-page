import { create } from './util.js';

//function to load menu page
function displayMenu() {
    const copyContainer = document.getElementById('copy-container');
    
    const p1 = create({
        type: 'p',
        textContent: 'MENU',
        parent: copyContainer
    });

    const prices = create({
        type: 'p',
        textContent: 'All donuts $3.50',
        parent: copyContainer
    });

    const item1 = create({
        type: 'h5',
        textContent: 'Reese\'s Puff',
        parent: copyContainer
    });

    const descript1 = create({
        type: 'p',
        textContent: 'Classic cake donut with chocolate frosting topped with Reese\'s Puffs cereal',
        parent: copyContainer
    });

    const item2 = create({
        type: 'h5',
        textContent: 'Pumpkin Spice Latte',
        parent: copyContainer
    });

    const descript2 = create({
        type: 'p',
        textContent: 'Light yeast donut with a caramel cream sauce powdered with our unique pumpkin spice blend',
        parent: copyContainer
    });

    const item3 = create({
        type: 'h5',
        textContent: 'Wingdinger',
        parent: copyContainer
    });

    const descript3 = create({
        type: 'p',
        textContent: 'Yeast donut with a dark chocolate frosting and a salted caramel center',
        parent: copyContainer
    });

    const item4 = create({
        type: 'h5',
        textContent: 'Biga Bear Claw',
        parent: copyContainer
    });

    const descript4 = create({
        type: 'p',
        textContent: 'A beast of a treat! Your classic bear claw drizzled with a honey-orange frosting and topped with chopped almonds',
        parent: copyContainer
    });

    const img = create({
        type: 'img',
        cl: 'body-img',
        src: './img/donuts5.jpg',
        parent: copyContainer
    })
}

export default displayMenu;
