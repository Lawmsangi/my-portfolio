const btn = document.getElementById('btn-union');
const close = document.getElementById('menu-close');
const menuBg = document.getElementById('menu-bg');
const menu = document.getElementById('menu');
const home = document.getElementById('home-section');
const header = document.getElementById('header');
const cardBtn = document.querySelectorAll('.card-btn');
const workSec = document.getElementById('work-section');
const projects = [
  {
    title: 'Tonic',
    details: ['CANOPY', 'Back&nbsp;End&nbsp;Dev', '2015'],
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
    images: 'images/work-1.png',
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories',
    details: ['Facebook', 'Full&nbsp;Stack&nbsp;Dev', '2015'],
    description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css'],
    images: 'images/work-2.png',
    live: '#',
    source: '',
  },
  {
    title: 'Facebook 360',
    details: ['FACEBOOK', 'Back&nbsp;End&nbsp;Dev', '2015'],
    description:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'Ruby on rails', 'css'],
    images: 'images/work-3.png',
    live: '#',
    source: '',
  },
  {
    title: 'Uber Navigation',
    details: ['Uber', 'Lead&nbsp;Developer', '2015'],
    description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'Ruby on rails', 'css'],
    images: 'images/work-4.png',
    live: '#',
    source: '',
  },
];

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

// See Project
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

cardBtn.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    seeProject(index);
  });
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