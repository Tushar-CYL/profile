// When the user scrolls the page, execute myFunction
let root = document.documentElement;


window.onscroll = function() {
  scrollFunction()
  myFunction()
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

 root.style.setProperty('--scroll-width', scrolled + "%")
  if(scrolled < 0) {
    root.style.setProperty('--scrollbar-color', '#e6004c');
  }

}

function scrollFunction() {

  let arrow = document.querySelector(".goBack");


  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      arrow.classList.add('fade-bottom');


  } else {
    arrow.classList.remove('fade-bottom');

  } 
}



let arrow = document.querySelector('.goDown');



// #AdamS360S#2118


const targets = document.querySelectorAll('img');


  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if(entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-lazy');

          img.setAttribute('src', src);
          img.classList.add('fade-bottom');

          observer.disconnect();
        }
      })

    });

    io.observe(target);
    
  };

  targets.forEach(lazyLoad);



// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});