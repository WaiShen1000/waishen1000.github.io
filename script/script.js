const header = document.querySelector('.navbar');

window.onscroll = function () {
    const top = window.scrollY;
    if (top < 100) {
        header.classList.remove('navbarDark');
        
        document.getElementById('progress').style.width = '0%';
    } else {
        // add class navbarDark on navbar scroll
        header.classList.add('navbarDark');

        // progress bar
        const pageHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.round((window.scrollY / pageHeight) * 100);
        document.getElementById('progress').style.width = scrollPercentage + '%';

    }
    
    if (top >= window.innerHeight * 0.4) {
        // show name on top left if scrolled dpwn
        document.getElementById('name').classList.add('show');
    } else {
        document.getElementById('name').classList.remove('show');
    }
}