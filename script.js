const currentDateElement = document.getElementById('current-date');
const currentDate = new Date();

function updateDateTime() {
    const currentTime = new Date();
    const dateString = currentTime.toLocaleDateString();
    const timeString = currentTime.toLocaleTimeString();
    const dateTimeString = `${dateString} ${timeString}`;
    currentDateElement.textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);



const body = document.body;
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (name && email && message) {
        console.log('Form submitted successfully!');
    } else {
        console.log('Please fill out all fields.');
    }
});


const title = document.querySelector('header nav h1');
const text = title.textContent;
title.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();


const projects = [
    { title: 'Project 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', description: 'Description 2', link: '#' },
];

const projectsContainer = document.getElementById('projects');
projects.forEach()


