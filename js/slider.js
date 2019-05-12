const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () =>{
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active');
    }else{
        slides[0].classList.add('active');
    }
}

const prevSlide = () =>{
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add('active');
    }else{
        slides[slides.length-1].classList.add('active');
    }
}

prev.addEventListener('click',function(){
    prevSlide();
});

next.addEventListener('click',function(){
    nextSlide();
});

