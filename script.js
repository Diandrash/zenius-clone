const nav = document.querySelector('.nav-lists');
const navList = document.querySelectorAll(".nav-list");
const menu = document.querySelector('.icon-menu');

menu.addEventListener('click', function () {
    // alert('halo');
    nav.classList.toggle('translate-x-0')    
})

// navList.addEventListener('click', function () {
//     alert('halo');
//     nav.classList.toggle('translate-x-full')   
     
// })

for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', function () {
        // alert('tes');
        nav.classList.remove('translate-x-0')   
    })
}