document.querySelector('.features-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});