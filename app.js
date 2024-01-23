// scroll observer //


const ratio = .1; // Si mon threshold voit plus de 10% de l'élement alors il execute 

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}


const titre = document.querySelector('.titre_reveal')
const container = document.querySelector('.container_header')
const dev = document.querySelector('.dev')
const ent = document.querySelector('.ent')
const com = document.querySelector('.com')
const social = document.querySelector('.social')

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            titre.classList.add('titre_reveal_visible')
            container.classList.add('switch_reveal')
            container.classList.remove('switch_noreveal')
            social.classList.add('social_reveal')
            dev.classList.add('dev_reveal')
            ent.classList.add('ent_reveal')
            com.classList.add('com_reveal')
            dev.classList.remove('dev')
            ent.classList.remove('ent')
            com.classList.remove('com')
            observer.unobserve(entry.target)
        }
    })
}


const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.first_section'))

// --------------------------First Anim---------------------------------------------//

const blanc = document.querySelector('.blanc')
const first = document.querySelector('.first_section')
const intro = document.querySelector('.container_intro')

blanc.onclick = function() {
    first.classList.add('full')
    blanc.classList.add('n')
    container.classList.add('n')
    setTimeout(() => {
        intro.classList.add('flex')
        first.classList.add('n')
    }, 500);
    setTimeout(() => {
        intro.classList.add('moov')
    }, 600);
   
}   


// ----------------------------Introduction-------------------------------------//


