// filepath: /c:/Users/dylan/Desktop/Personal/Dev Files/HTML/HTMLGames/Catch the rain/assets/smallalert.js
 function smallalert(title, appearTimeInSeconds) {
    
    const randomId = Math.floor(Math.random() * 1000);
    const alertDiv = document.createElement('div');
    alertDiv.className = `smallalert ${randomId}`;
    alertDiv.innerHTML = `<div class="sa--title">${title}</div>`;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, appearTimeInSeconds * 1000);
}

 function manualAddSmallAlert(title, id, elid) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `smallalert ${id}`;
    alertDiv.innerHTML = `<div class="sa--title ${id}" id="${id}">${title}</div>`;
    document.body.appendChild(alertDiv);
    console.log(`Small Alert added: \n Content : ${title} \n ID : ${id} \n Invoke by: ${elid} `);
}

 function removeSmallAlert(id) {
    document.body.removeChild(document.querySelector(`.${id}`));
}

smallalert('Raindrop created', 1);