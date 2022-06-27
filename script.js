
function openSidebar() {

    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');

    console.log(sidebar.classList);
    
    if (sidebar.classList === 'sideabar open' ) {
        sidebar.classList.toggle('open');
        header.classList.toggle('open');
        content.classList.toggle('open');
    } else {
        sidebar.classList.toggle('open');
        header.classList.toggle('open');
        content.classList.toggle('open');
    }
    
}

const openBtn = document.querySelectorAll('#open-sidebar-btn');

openBtn[0].addEventListener('click', () => { openSidebar() });
openBtn[1].addEventListener('click', () => { openSidebar() });