
const hambBtn=document.getElementById('hambBtn');
const mobileMenu=document.getElementById('mobileMenu');
const main=document.querySelector('main');
let menuOpen=false;

hambBtn.onclick=()=>{
  menuOpen=!menuOpen;
  mobileMenu.style.display=menuOpen?'flex':'none';
  main.classList.toggle('blur',menuOpen);
};

document.addEventListener('click',e=>{
  if(menuOpen && !mobileMenu.contains(e.target) && !hambBtn.contains(e.target)){
    mobileMenu.style.display='none';
    main.classList.remove('blur');
    menuOpen=false;
  }
});
