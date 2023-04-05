function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener('keypress', e => {
    if(e.key === 'r') {
        document.body.style.backgroundColor = 'red';
    } else if(e.key === 'g') {
        document.body.style.backgroundColor = 'green';
    } else if(e.key === 'b') {
        document.body.style.backgroundColor = 'blue';
    } else if(e.key === 'k') {
        document.body.style.backgroundColor = '#' + getRandomInt(0xFFFFFF).toString(16);
    }
});
