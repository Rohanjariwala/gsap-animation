
const lenis = new Lenis({
    duration:2,
    smoothWheel:true
});


lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});


gsap.ticker.lagSmoothing(0);

const textcontainers = document.querySelectorAll('.text_slider');



textcontainers.forEach(textcontainer => {
  const textWrap = textcontainer.querySelector('.text_wrapper');
  if(textWrap){
    const cloneWrap = textWrap.cloneNode(true);
    textcontainer.appendChild(cloneWrap);
  }
 
});

// gsap animation 
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
