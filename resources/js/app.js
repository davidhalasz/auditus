import './bootstrap';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';

window.Alpine = Alpine;

Alpine.plugin(focus);

Alpine.start();

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var footerOffset = document.querySelector('#footer').getBoundingClientRect().top + window.pageYOffset;
        var windowHeight = window.innerHeight;
        var scrollTop = window.pageYOffset;
        var fixedImg = document.querySelector('#fixedImg');
        
        if (scrollTop + windowHeight > footerOffset) {
            document.querySelector('#fixedImg').style.display = 'none';
            document.querySelector('#absoluteImg').style.display = 'block';
        } else {
            document.querySelector('#fixedImg').style.display = 'block';
            document.querySelector('#absoluteImg').style.display = 'none';
        }
    });
    
    var navbarBurgers = document.querySelectorAll('.navbar-burger');
    navbarBurgers.forEach(function(el) {
        el.addEventListener('click', function() {
            var target = document.getElementById('main-nav');
            target.classList.toggle('hidden');
        });
    });

    document.querySelectorAll('.naaa').forEach(function(el) {
        el.addEventListener('click', function() {
            document.getElementById('main-nav').classList.add('hidden');
        });
    });
    
    var isScrolling = function() {
        var element = document.querySelector('.site-header');
        var navHeight = element.offsetHeight;
        
        if (window.pageYOffset >= navHeight) {
            element.classList.add('is-scrolling');
            document.querySelector('.sticky').classList.add('is-blue');
        } else {
            element.classList.remove('is-scrolling');
            document.querySelector('.sticky').classList.remove('is-blue');
        }
    };

    // Replace _.throttle with a simple throttle function if lodash is not being used
    window.addEventListener('scroll', isScrolling); // Without throttle




    // Replace jQuery's scrollToSection function
    document.querySelectorAll('[data-scroll]').forEach(function(el) {
        el.addEventListener('click', function(event) {
            event.preventDefault();
            var section = document.querySelector(this.getAttribute('href'));
            window.scroll({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });


var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
 closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
if($('.modal').css('opacity') == 1){
 evt = evt || window.event
 var isEscape = false
 if ('key' in evt) {
 isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
 } else {
 isEscape = (evt.keyCode === 27)
 }
 if (isEscape && document.body.classList.contains('modal-active')) {
 toggleModal()
 }
}
if($('.modal2').css('opacity') == 1){

 evt = evt || window.event
 var isEscape = false
 if ('key' in evt) {
 isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
 } else {
 isEscape = (evt.keyCode === 27)
 }
 if (isEscape && document.body.classList.contains('modal-active')) {
 toggleModal2()
 }
}
if($('.modal3').css('opacity') == 1){
  
 evt = evt || window.event
 var isEscape = false
 if ('key' in evt) {
 isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
 } else {
 isEscape = (evt.keyCode === 27)
 }
 if (isEscape && document.body.classList.contains('modal-active')) {
 toggleModal3()
 }
}
};


var openmodal = document.getElementById('modal-open');
openmodal.addEventListener('click', function(event) {
    event.preventDefault();
    toggleModal();
});

const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', toggleModal);

var closemodal = document.querySelectorAll('.modal-close');
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal);
}

function toggleModal () {
 const body = document.querySelector('body')
 const modal = document.querySelector('.modal')
 modal.classList.toggle('opacity-0')
 modal.classList.toggle('pointer-events-none')
 body.classList.toggle('modal-active')
}


var openmodal2 = document.getElementById('modal-open2')
    openmodal2.addEventListener('click', function(event){
 event.preventDefault()
 toggleModal2()
 })


const overlay2 = document.querySelector('.modal-overlay2')
overlay2.addEventListener('click', toggleModal2)

var closemodal2 = document.querySelectorAll('.modal-close2')
for (var i = 0; i < closemodal2.length; i++) {
 closemodal2[i].addEventListener('click', toggleModal2)
}




function toggleModal2 () {
 const body = document.querySelector('body')
 const modal = document.querySelector('.modal2')
 modal.classList.toggle('opacity-0')
 modal.classList.toggle('pointer-events-none')
 body.classList.toggle('modal-active')
}


var openmodal3 = document.getElementById('modal-open3')
    openmodal3.addEventListener('click', function(event){
 event.preventDefault()
 toggleModal3()
 })


const overlay3 = document.querySelector('.modal-overlay3')
overlay3.addEventListener('click', toggleModal3)

var closemodal3 = document.querySelectorAll('.modal-close3')
for (var i = 0; i < closemodal3.length; i++) {
 closemodal3[i].addEventListener('click', toggleModal3)
}




function toggleModal3 () {
 const body = document.querySelector('body')
 const modal = document.querySelector('.modal3')
 modal.classList.toggle('opacity-0')
 modal.classList.toggle('pointer-events-none')
 body.classList.toggle('modal-active')
}
    window.addEventListener('scroll', function() {
        var returnToTop = document.querySelector('#return-to-top');
        if (window.pageYOffset >= 50) {
            returnToTop.style.display = 'block';
        } else {
            returnToTop.style.display = 'none';
        }
    });

    document.querySelector('#return-to-top').addEventListener('click', function() {
        document.querySelectorAll('.naaa').forEach(function(el) {
            el.classList.remove('active');
        });
        window.scroll({
            top: 1,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('.naaa').forEach(function(el) {
        el.addEventListener('click', function() {
            document.querySelectorAll('.naaa').forEach(function(naaaEl) {
                naaaEl.classList.remove('active');
            });
            el.classList.add('active');
        });
    });
});