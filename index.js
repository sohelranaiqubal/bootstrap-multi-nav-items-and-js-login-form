var nav = document.querySelector('nav');
 
 window.addEventListener('scroll',function(){ 
  if(window.pageYOffset > 100){ 
    nav.classList.add('bg-dark', 'shadow','text-white');
  }else{ 
    nav.classList.remove('bg-dark', 'shadow','text-white' );
  }
 })



 const balcal = document.querySelector('#close');
 const cancel = document.querySelector('.cancelbtn');
 const loginBtn = document.querySelector('#loginBtn');

 loginBtn.addEventListener('click', () => { 
        loginform.style.display='block';
      
 });

 balcal.addEventListener('click', () => { 
      loginform.style.display='none';
 });

 cancel.addEventListener('click', () => { 
  loginform.style.display='none';
});

