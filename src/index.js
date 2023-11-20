import './main.scss';
// import './images/logo.svg';
// import './images/vi.png';

function component(text) {
    const element = document.createElement('h1');
    element.textContent = text;
    return element;
}

document.body.prepend(component('Проект собран на Webpack'));
