let ul = document.querySelector('nav ul');

function openMenu(){
        ul.classList.add('open');
    }

function closeMenu(){
    ul.classList.remove('open');
}

ul.classList.remove('open')