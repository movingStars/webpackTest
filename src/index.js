import printMe from './print.js';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = "今日头条";
    btn.innerHTML = "点我点我";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());