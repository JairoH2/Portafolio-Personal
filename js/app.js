//Variables
const proyectos = document.querySelector('#proyectos__click');
const skills = document.querySelector('#skills__click');
const proyectosaActive = document.querySelector('.proyectos');
const skillsActive = document.querySelector('.skills');

const menuLinks = document.querySelectorAll(".nav__links a[href^=\"#\"]");
const logoLinks = document.querySelectorAll(".logo__link");

//Eventlisteners
proyectos.addEventListener('click', e =>{
    e.preventDefault();
    if(proyectosaActive.classList.contains('portafolio__active')){
        proyectosaActive.classList.remove('portafolio__active');
        skillsActive.classList.add('portafolio__active');
    }
    
    if(!(proyectos.classList.contains('background-active'))){
        proyectos.classList.add('background-active');
        skills.classList.remove('background-active');
    }
})

skills.addEventListener('click', e =>{
    e.preventDefault();
    if(skillsActive.classList.contains('portafolio__active')){
        skillsActive.classList.remove('portafolio__active');
        proyectosaActive.classList.add('portafolio__active');
        skills.classList.add('background-active');
        proyectos.classList.remove('background-active');
    }

    if(!(skills.classList.contains('background-active'))){
        skills.classList.add('background-active');
        proyectos.classList.remove('background-active');
    }
})

//Funciones
const observer  = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav__links a[href="#${id}"]`);

        if (entry.isIntersecting){
            const sel = document.querySelector(".nav__links a.selected")
            if(sel){
                sel.classList.remove("selected");
            }
            menuLink.classList.add("selected");
        }
    })
}, {rootMargin: "-75% 0px -25% 0px"});


menuLinks.forEach(menuLink =>{

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);

    if(target){
        observer.observe(target);
    }
})


const observerIcono  = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`a[href="#${id}"] .fa-solid`);
        
        if (entry.isIntersecting){
            const sel = document.querySelector(".nav__links i.selected__icono")
            if(sel){
                sel.classList.remove("selected__icono");
            }
            menuLink.classList.add("selected__icono");
        }
    })
}, {rootMargin: "-80% 0px -20% -0px"});

logoLinks.forEach(logoLink =>{
    const hash = logoLink.getAttribute("href");
    const target = document.querySelector(hash);

    if(target){
        observerIcono.observe(target);
    }
})