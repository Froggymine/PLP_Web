gsap.to("#coverAll", {y: "-200vh", duration: 0});
gsap.to("body", {scale: 30, duration: 0});
gsap.delayedCall(0.2, (function() {
  gsap.to("body", {scale: 1, duration: 1.2, ease: CustomEase.create("custom", "M0,0,C0.416,0.158,0.576,0.287,0.664,0.362,0.742,0.428,1,0.632,1,1")});
  gsap.to("body", {opacity: 1, duration: 1});
}))

$("#exitArrowContainer").on('click', (function() {
  gsap.to("#coverAll", {top: "0vh", duration: 0.8});
  gsap.delayedCall(0.8, (function() {
    window.location.replace('../goals.html');}))
}))


$(".downArrowContainer").on('click', (function() {
  gsap.to(window, {duration: 1, scrollTo: {y: "#scroll2", offsetY: 0}});
}))


/*
transform: scale(2.0);
transform-origin: 10vw 50vh;
*/
