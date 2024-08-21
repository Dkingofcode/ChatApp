const WS = new WebSocket('ws://localhost:3232');

WS.onmessage  = (payload) => {
    const message = payload.data;
     console.log('REcieved message:', message);
    // Check if the message is already a string

    displayMessages(message);
};


WS.onopen = () => {
    displayTitle('CONNECTION OPEN');
};

WS.onclose = () => {
    console.log('CONNECTION CLOSE');
};


function displayTitle(title){
    document.querySelector('h1').innerText = title;
};


function displayMessages(message){
    let h1 = document.createElement('h1');
    h1.innerText = message;
       document.querySelector('div.message').appendChild(h1);
}



document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');
    WS.send(input.value);
    console.log(input.value);
    return false;
}
 



 













