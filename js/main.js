const start = () => {
    const showNavBar = () => {          
            
        if (navBar.style.display == 'none') {
            navBar.style.display = 'block';               
        }
        else {
            navBar.style.display = 'none';
        }
    }
    let menuBtn = document.querySelector('.menu-icon');
        menuBtn.addEventListener('click', showNavBar, false);
        
    let navBar = document.querySelector('.nav');
        navBar.style.display ='none';

}
window.addEventListener('load', start, false);
