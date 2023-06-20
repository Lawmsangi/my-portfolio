let btn = document.getElementById('btn-union');
let close = document.getElementById('menu-close');
let menuBg = document.getElementById('menu-bg');
let menu = document.getElementById('menu');
let home = document.getElementById('home-section');
let header = document.getElementById('header');
let cardBtn = document.querySelectorAll('.card-btn');
let workSec = document.getElementById('work-section');
const projects = [
    {
    title: "Tonic",
    details: ["CANOPY", "Back&nbsp;End&nbsp;Dev", "2015"],
    description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    languages: ["html", "css", "javascript"],
    live: '#',
    source: '#',
    },
    {
    title: "Multi-Post Stories",
    details: ["Facebook","Full&nbsp;Stack&nbsp;Dev", "2015"],
    description:
        "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html","Ruby on rails", "css", "javascript"],
    live: '#',
    source: '',
    },
    {
    title: "Facebook 360",
    details: ["FACEBOOK", "Back&nbsp;End&nbsp;Dev", "2015"],
    description:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ["html", "Ruby on rails" ,"css", "javascript"],
    live: '#',
    source: '',
    },
    {
    title: "Uber Navigation",
    details: ["Uber", "Lead&nbsp;Developer", "2015"],
    description:
        "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    languages: ["html","Ruby on rails", "css", "javascript"],
    live: '#',
    source: '',
    },
]

btn.addEventListener('click', function(){
    menu.style.display = 'block';
    menuBg.style.display = 'block';
    document.body.style.overflow = 'hidden';
    home.style.filter = 'blur(8px)';
    header.style.filter = 'blur(8px)';
})

function closedMenu(){
    menu.style.display = 'none';
    menuBg.style.display = 'none';
    document.body.style.overflow = 'scroll';
    home.style.filter = 'blur(0)';
    header.style.filter = 'blur(0)';
}
close.addEventListener('click', closedMenu)

menu.addEventListener('click', closedMenu)  

// See Project
function closeProject() {
    const project = document.querySelector('.project-card-container');
    project.remove();
}

function seeProject(index){
    const cardContainer = document.createElement('div');
    cardContainer.className ='project-card-container'; 
    const cardContent1 = document.createElement('div');
    cardContent1.innerHTML = '<h1> Heading</h1>';
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
                                    <li>CANOPY</li>
                                    <li><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#C1C7D0"></circle>
                                        </svg>
                                    </li>
                                    <li>Back End Dev</li>
                                    <li><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#C1C7D0"></circle>
                                        </svg>
                                    </li>
                                    <li>2015</li>
                                </ul>
                                <img src="images/Snapshoot Portfolio.png"/>`
               
    cardContent3.innerHTML = `
                                <div class="project-card-content3-text"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    <br><br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s
                                    with the releawn printer took a galley of type and scrambled it 1960s.</p>
                                </div>
                                <div class="project-card-content3-link">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Ruby</li>
                                        <li>Bootstrap</li>
                                    </ul>

                                    <div class="btn-live-source">
                                        <button>See Live <img src= "images/see-live.png"/></button>
                                        <button>See Source  <i class="fab fa-github"></i> </button>
                                    </div>
                                </div>`
    cardContainer.appendChild(cardContent1)
    cardContainer.appendChild(cardContent2)
    cardContainer.appendChild(cardContent3)

    workSec.style.filter = 'blur(8px)';
    document.body.style.overflow = 'hidden'
    document.body.appendChild(cardContainer)
    
    
}

cardBtn.forEach((item,index)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        seeProject(index)
    })
    
})
