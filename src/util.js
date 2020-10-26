function create(args) {
    const element = document.createElement(args.type);
    setId(element, args.id);
    setClass(element, args.cl)
    setSrc(element, args.src);
    setTextContent(element, args.textContent);
    addListener(element, args.eventListener);
    setHref(element, args.href);
    args.parent.appendChild(element);
    return element;
}

function setId(element, id) {
    if (id !== undefined) {
        element.setAttribute("id", id)
    }
}

function setClass(element, cl) {
    if (cl !== undefined) {
        element.setAttribute("class", cl);
    }
}

function setSrc(element, src) {
    if(src !==undefined) {
        element.setAttribute("src", src);
    }
}

function setHref(element, href) {
    if(href !==undefined) {
        element.setAttribute("href", href);
    }
}

function setTextContent(element, textContent) {
    if(textContent !== undefined) {
        element.textContent = textContent;
    }
}

function addListener(element, eventListener) {
    if(eventListener !== undefined) {
        element.addEventListener(eventListener.type, eventListener.callback);
    }
}

function clear(node) {
    //selects node and all children then removes them
    node.querySelectorAll('*').forEach(child => {
        child.remove();
    })
}

function setActiveTab(id) {
    const tabs = ['tab-home', 'tab-menu', 'tab-contact'];
    tabs.forEach(tabId => {
        const tab = document.getElementById(tabId);
        if(tabId === id) {
            if(tab.classList.contains('tab')){
                tab.classList.replace('tab', 'tab-highlight');
            }
        } else {
            if(tab.classList.contains('tab-highlight')) {
                tab.classList.replace('tab-highlight', 'tab');
            }
        }

    })
}

export { create, clear, setActiveTab };