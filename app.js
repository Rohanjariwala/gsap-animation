
const lenis = new Lenis({
    duration:2,
    smoothWheel:true
});


lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});


gsap.ticker.lagSmoothing(0);


// preloader animation 

const preloader = ".preloader",
      preloader_counter = ".preloader_counter",
      preloder_background = ".preloader_bg",
      counter_elements = [
        document.querySelector('.counter1'),
        document.querySelector('.counter2'),
        document.querySelector('.counter3'),
      ],
      refrence = document.getElementById("counter_pic1");
 var numberHeight = refrence.offsetHeight / 2;
 var counterIndex = 1;
 var pageIsDone = false;


console.log(numberHeight);
 const lodertimeline = gsap.timeline(); 

 lodertimeline.to(preloder_background,{
   yPercent:-100,
   duration:1.4,
   delay:1,
   ease: "power3.inOut"
 },"<")
 .to(preloader_counter, {
  yPercent: 150,
  delay:0.5,
  ease: "power1.inOut"
})
.to(preloader, {
  autoAlpha: 0,
  ease: "power2.inOut"
}, "<")
.set(preloader, {
  yPercent: -100
})

lodertimeline.pause();
console.log(numberHeight);
function counterloop(){
  gsap.to(counter_elements[2], {
    y: -numberHeight*counterIndex*3,
    duration: 2.5,
    ease: "power4.inOut"
});
gsap.to(counter_elements[1], {
  y: -numberHeight*counterIndex,
  duration: 2.8,
  ease: "power3.inOut"
});
counterIndex++; 
console.log(counterIndex);
 if(pageIsDone || counterIndex == 10){
 
  gsap.to(counter_elements[2], {
    y: -numberHeight*30,
    duration: 2.5,
    ease: "power4.inOut"
});
gsap.to(counter_elements[1], {
  y: -numberHeight*10,
  duration: 2.8,
  ease: "power3.inOut"
});
gsap.to(counter_elements[0], {
  y: -numberHeight,
  duration: 2.5,
  ease: "power2.inOut"
});
lodertimeline.play();
 }
  else if(counterIndex < 10){
    counterloop();
  }

}
counterloop();  

// text_slider clone 
const textcontainers = document.querySelectorAll('.text_slider');

textcontainers.forEach(textcontainer => {
  const textWrap = textcontainer.querySelector('.text_wrapper');
  if(textWrap){
    const cloneWrap = textWrap.cloneNode(true);
    textcontainer.appendChild(cloneWrap);
  }
 
});

// section 3d card animation 
gsap.set(".slide", { transformStyle: "preserve-3d", transformPerspective: 800 });
gsap.set(".middle", { transformOrigin: "center top", y: window.innerHeight, rotationX: 40, scale: 1.1 });
gsap.set(".team_image", { scale: 1.15 });

let anim = gsap.timeline({
  scrollTrigger :{
    trigger: ".slider_wrapper",
    start: "-40px top",
    end: "+=6000",
    scrub: true,
    pin: "#scroll_slider"
  }
});

anim.from(".team_image", { scale: 0.075, ease: "power1.in" }),
anim.to(".team_image", { scale: 1, ease: "power1.in" }),
anim.to(".slider_bg", { backgroundColor: "#FFD73B" }, "<"),
anim.set(".first", { transformOrigin: "center top" }),
anim.to(".first", { rotationX: -40, y: -6, ease: "power1.in", scale: 0.7 }),
anim.to(".middle", { scale: 1, ease: "power1.out", y: (e) => 2 * e, rotationX: 0, stagger: { each: 0.5 } }, "-=0.4"),
anim.to(".middle", { rotationX: -40, y: (e) => 12 * e, ease: "power1.in", scale: 0.7, stagger: { each: 0.5 } }, "<+=0.5"),
anim.to(".slider_bg", { backgroundColor: "#F3F3EF" }, "<+=1.5")
