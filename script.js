
// Hamburger and mobile menu control (works on all pages)
const hambBtn = document.getElementById('hambBtn');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu(){
  mobileMenu.style.display = 'flex';
  mobileMenu.setAttribute('data-open','true');
  document.body.style.overflow = 'hidden'; // prevent large scroll when menu open on small screens
}
function closeMenu(){
  mobileMenu.style.display = 'none';
  mobileMenu.removeAttribute('data-open');
  document.body.style.overflow = ''; 
}

// Toggle menu when hamburger clicked
if(hambBtn){
  hambBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    const isOpen = mobileMenu.getAttribute('data-open') === 'true';
    if(isOpen) closeMenu(); else openMenu();
  });
}

// Close menu when clicking anywhere else on page
document.addEventListener('click', (e)=>{
  const target = e.target;
  if(mobileMenu.getAttribute('data-open') === 'true'){
    // If click is outside the menu and not on the button, close
    if(!mobileMenu.contains(target) && !hambBtn.contains(target)){
      closeMenu();
    }
  }
});

// Prevent clicks inside menu from closing immediately (stop propagation)
if(mobileMenu){
  mobileMenu.addEventListener('click', (e)=> e.stopPropagation());
}

// Projects: make project cards clickable (link is on data-url)
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.project').forEach(card=>{
    card.addEventListener('click', ()=>{
      const url = card.getAttribute('data-url');
      if(url && url !== '#') window.open(url, '_blank');
    });
  });
});

// Team card spin animation on click/touch
document.querySelectorAll('.team-card').forEach(tc=>{
  tc.addEventListener('click', ()=>{
    tc.style.transition = 'transform .9s cubic-bezier(.2,.9,.3,1)';
    tc.style.transform = 'rotateY(360deg)';
    setTimeout(()=>{ tc.style.transform=''; },900);
  });
});

// Contact form -> mailto (client email) with nicer subject
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value || 'No name');
    const email = encodeURIComponent(document.getElementById('email').value || '');
    const subject = encodeURIComponent(document.getElementById('subject').value || 'Website contact');
    const message = encodeURIComponent(document.getElementById('message').value || '');
    const body = `${message}\n\nFrom: ${name} <${email}>`;
    window.location.href = `mailto:anuga.senithu2013official@gmail.com?subject=${subject}&body=${body}`;
  });
}
