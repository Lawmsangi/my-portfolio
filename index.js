let btn = document.getElementById('btn-union');
let close = document.getElementById('menu-close');
let menuBg = document.getElementById('menu-bg');
let menu = document.getElementById('menu');
let home = document.getElementById('home-section');
let header = document.getElementById('header');
let cardBtn = document.querySelectorAll('.card-btn');
console.log(cardBtn);

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

menu.addEventListener('click', function(e){
    menu.style.display = 'none';
    menuBg.style.display = 'none';
    document.body.style.overflow = 'scroll';
    home.style.filter = 'blur(0)';
    header.style.filter = 'blur(0)';
})  

// See Project
function closeProject() {
    const project = document.querySelector('.project-card-container');
    console.log(project);
    project.remove();
}
function seeProject(e,index){
    e.preventDefault()
    alert('See Project')
    const cardContainer = document.createElement('div');
    cardContainer.className ='project-card-container'; 
    const cardContent1 = document.createElement('div'); 
    cardContent1.className = 'project-card-content1';
    const cardContent2 = document.createElement('div');
    cardContent2.className = 'project-card-content2'; 
    cardContent1.innerHTML = `
                              <div>
                                <h2>heading</h2>
                                <button onclick='closeProject()'>X</button>
                              </div>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                                <img/>`
               
    cardContent2.innerHTML = `
                                <div><p>saaa</p></div>
                                <div>
                                    <ul>
                                       <li>1</li>
                                        <li>1</li>
                                        <li>1</li> 
                                    </ul>

                                    <div>
                                        <button>See Live</button>
                                        <button>See Source</button>
                                    </div>
                                </div>`
    cardContainer.appendChild(cardContent1)
    cardContainer.appendChild(cardContent2)

    document.body.appendChild(cardContainer)
}

cardBtn.forEach((item,index)=>{
    item.addEventListener('click', seeProject(index))
})
