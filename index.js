// menu variables
const btn = document.getElementById('btn-union');
const close = document.getElementById('menu-close');
const menuBg = document.getElementById('menu-bg');
const menu = document.getElementById('menu');
const home = document.getElementById('home-section');
const header = document.getElementById('header');

// project variables
const workSec = document.getElementById('work-section');
const projects = [
  {
    title: 'Online Shopping Site',
    details: ['CANOPY', 'Back&nbsp;End&nbsp;Dev', '2015'],
    description:
        'My portfolio website builds with HTML and CSS and is available in desktop, mobile and tablet version',
    languages: ['html', 'css','javascript'],
    images: 'images/work-5.png',
    live: 'https://lawmsangi.github.io/Module-One-Capstone/',
    source: 'https://github.com/Lawmsangi/Module-One-Capstone',
  },
  {
    title: 'Book Lists',
    details: ['Facebook', 'Full&nbsp;Stack&nbsp;Dev', '2015'],
    description:
        'Bookstore where you can add books and remove it. Built using HTML, CSS and JavaScript.',
    languages: ['html', 'javascript', 'css'],
    images: 'images/work-6.png',
    live: 'https://lawmsangi.github.io/Awesome-books/',
    source: 'https://github.com/Lawmsangi/Awesome-books/',
  },
  {
    title: 'To Do List',
    details: ['Todo List', 'Frontend&nbsp;End&nbsp;Dev', '2023'],
    description:
        "To-do-list is an website where you can add, remove and edit the tasks. Built using HTML, CSS and JavaScript.",
    languages: ['html', 'javascript', 'css'],
    images: 'images/work-7.png',
    live: 'https://lawmsangi.github.io/To-Do-List-JS/dist/',
    source: 'https://github.com/Lawmsangi/To-Do-List-JS',
  },
  {
    title: 'Pokemon Web App',
    details: ['Pokemon', 'Frontend&nbsp;Developer', '2023'],
    description:
        'A web app built with pokemon api that shows different pokemons where you can give likes and comments to each Pokemon.',
    languages: ['API', 'WebPack', 'Javascript'],
    images: 'images/work-4.png',
    live: 'https://lawmsangi.github.io/pokemon-api-project/dist/',
    source: 'https://github.com/Lawmsangi/pokemon-api-project',
  },
    {
    title: 'Budget App',
    details: ['Finance', 'Rails&nbsp;Developer', '2024'],
    description:
        'The Budget app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    languages: ['Rails', 'Ruby', 'Bootstrap'],
    images: 'images/work-8.png',
    live: 'https://my-budget-app-1tru.onrender.com/',
    source: 'https://github.com/Lawmsangi/budget-app',
  },
];

// menu functions
btn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBg.style.display = 'block';
  document.body.style.overflow = 'hidden';
  home.style.filter = 'blur(8px)';
  header.style.filter = 'blur(8px)';
});

function closedMenu() {
  menu.style.display = 'none';
  menuBg.style.display = 'none';
  document.body.style.overflow = 'scroll';
  home.style.filter = 'blur(0)';
  header.style.filter = 'blur(0)';
}
close.addEventListener('click', closedMenu);

menu.addEventListener('click', closedMenu);

// project functions
function closeProject() {
  const project = document.querySelector('.project-card-container');
  project.remove();
  workSec.style.filter = 'blur(0)';
  document.body.style.overflow = 'scroll';
}

function seeProject(index) {
  const {
    title, details, languages, description, images, live, source,
  } = projects[index];
  const [details1, details2, details3] = details;
  const [languages1, languages2, languages3] = languages;
  const cardContainer = document.createElement('div');
  cardContainer.className = 'project-card-container';
  const cardContent1 = document.createElement('div');
  cardContent1.innerHTML = `<h1>${title}</h1>`;
  const closedBtn = document.createElement('button');
  closedBtn.innerHTML = 'X';
  cardContent1.appendChild(closedBtn);
  closedBtn.addEventListener('click', closeProject);

  cardContent1.className = 'project-card-content1';
  const cardContent2 = document.createElement('div');
  cardContent2.className = 'project-card-content2';
  const cardContent3 = document.createElement('div');
  cardContent3.className = 'project-card-content3';
  cardContent2.innerHTML = `
                                <ul>
                                    <li>${details1}</li>
                                    <li><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#C1C7D0"></circle>
                                        </svg>
                                    </li>
                                    <li>${details2}</li>
                                    <li><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#C1C7D0"></circle>
                                        </svg>
                                    </li>
                                    <li>${details3}</li>
                                </ul>
                                <img src= "${images}"/>`;

  cardContent3.innerHTML = `
                                <div class="project-card-content3-text"><p>${description}</p>
                                </div>
                                <div class="project-card-content3-link">
                                    <ul>
                                        <li>${languages1}</li>
                                        <li>${languages2}</li>
                                        <li>${languages3}</li>
                                    </ul>

                                    <div class="btn-live-source">
                                        <a href = ${live} target="_blank">See Live <img src= "images/Icon.png"/></a>
                                        <a href= ${source} target="_blank">See Source  <i class="fab fa-github"></i> </a>
                                    </div>
                                </div>`;
  cardContainer.appendChild(cardContent1);
  cardContainer.appendChild(cardContent2);
  cardContainer.appendChild(cardContent3);

  workSec.style.filter = 'blur(8px)';
  document.body.style.overflow = 'hidden';
  document.body.appendChild(cardContainer);
}

projects.forEach((project, index) => {
  const {
    title, details, languages, description, images,
  } = projects[index];
  const [details1, details2, details3] = details;
  const [languages1, languages2, languages3] = languages;
  const projectCard = document.createElement('div');
  projectCard.className = 'card';
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  cardImage.innerHTML = ` <img src="${images}" alt="work-1"> `;
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  cardContent.innerHTML = `
                    <h2>${title}</h2>
                    <ul class="card-list1">
                        <li>${details1}</li>
                        <li><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#C1C7D0"></circle>
                            </svg>
                        </li>
                        <li>${details2}</li>
                        <li><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#C1C7D0"></circle>
                            </svg>
                        </li>
                        <li>${details3}</li>
                    </ul>
                    <p>${description}</p>
                    <ul class="card-list2">
                        <li>${languages1}</li>
                        <li>${languages2}</li>
                        <li>${languages3}</li>
                    </ul>
                `;
  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.className = 'card-btn';
  seeProjectBtn.innerHTML = 'See Project';
  cardContent.appendChild(seeProjectBtn);
  seeProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    seeProject(index);
  });
  projectCard.appendChild(cardImage);
  projectCard.appendChild(cardContent);
  workSec.appendChild(projectCard);
});

// Validate form
const form = document.querySelector('#contact-form');

const isRequired = (value) => value !== '';

const isEmailValid = (email) => {
  const re = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return re.test(email);
};

const showError = (input, message) => {
  const errorMsg = document.querySelector('#error-msg');
  errorMsg.textContent = message;
};

const showSuccess = () => {
  const errorMsg = document.querySelector('#error-msg');
  errorMsg.textContent = '';
};
const checkEmail = () => {
  const userEmail = document.querySelector('#email');
  let valid = false;
  const email = userEmail.value.trim();
  if (!isRequired(email)) {
    showError(userEmail, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(userEmail, 'Email should be in lowercase.');
  } else {
    showSuccess(userEmail);
    valid = true;
  }
  return valid;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isEmailValid = checkEmail();

  if (isEmailValid) {
    form.submit();
  } else {
    const errorMsg = document.querySelector('#error-msg');
    errorMsg.style.visibility = 'visible';
  }
});

// local storage
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMsg = document.querySelector('#textarea');

function storageFormData() {
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMsg.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

const inputArr = [inputName, inputEmail, inputMsg];
inputArr.forEach((input) => {
  input.addEventListener('input', storageFormData);
});

const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  inputName.value = savedData.name;
  inputEmail.value = savedData.email;
  inputMsg.value = savedData.message;
}