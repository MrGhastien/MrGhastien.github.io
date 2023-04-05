document.getElementById('btn_1').addEventListener('click', () => {
    console.log(`You clicked the button.`);
});

const greenButton = document.getElementById('myBtn');

greenButton.addEventListener('click', e => {
    console.log(`Green button pressed ! id: '${e.target.id}', class: '${e.target.className}'`);
});
