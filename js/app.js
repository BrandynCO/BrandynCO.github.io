// Navbar scroll into view 
document.querySelector('#homePage').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#homepage').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#aboutUs').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#aboutus').scrollIntoView({
        behavior: 'smooth',
    });
});

document.querySelector('#servicesArea').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#services-area').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#contactUs').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact-area').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#myBtn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#homepage').scrollIntoView({
        behavior: 'smooth'
    });
});