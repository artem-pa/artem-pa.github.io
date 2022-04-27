greating = document.querySelector('#greating');
helloBtn = document.querySelector('#hello-btn');


helloBtn.addEventListener('click', () => {
  greating.classList.add('hide');
  document.body.style = null;
  setTimeout(() => greating.style.display = 'none',
  1000);
  document.body.style.overflow = 'overlay';
});