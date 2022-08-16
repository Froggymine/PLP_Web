let introAni = gsap.to("#coverAll", {top: "-200vh", duration: 0.8});
introAni.delay(0.8)

$("#exitArrowContainer").on('click', (function() {
  gsap.to("#coverAll", {top: "0vh", duration: 0.8});
  gsap.delayedCall(0.8, (function() {
    window.location.replace('../index.html');}))
}))


const splitChangeSpeed = 0.6;
$(".goalSplitLeft").on('mouseenter', (function() {
  gsap.to(".goalSplitLeft", {backgroundColor: "white", duration: splitChangeSpeed, ease: "power2.out"});
  gsap.to(".goalSplitLeft", {color: "black", duration: splitChangeSpeed, ease: "power2.out"});
  gsap.to(".goalSplitRight", {backgroundColor: "black", duration: splitChangeSpeed, ease: "power2.out"});
  gsap.to(".goalSplitRight", {color: "white", duration: splitChangeSpeed, ease: "power2.out"});
}))
$(".goalSplitRight").on('mouseenter', (function() {
  gsap.to(".goalSplitRight", {backgroundColor: "white", duration: splitChangeSpeed, ease: "power2.out"});
  gsap.to(".goalSplitRight", {color: "black", duration: splitChangeSpeed, ease: "power2.out"});
  gsap.to(".goalSplitLeft", {backgroundColor: "black", duration: splitChangeSpeed, ease: "power2.out"});
  gsap.to(".goalSplitLeft", {color: "white", duration: splitChangeSpeed, ease: "power2.out"});
}))

$(".downArrowContainer").on('click', (function() {
  gsap.to(window, {duration: 1, scrollTo: {y: "#scroll2", offsetY: 0}});
}))


$(".goalSplitLeft").on('click', (function() {
  gsap.to("body", {scale: 40, duration: 1.5, ease: CustomEase.create("custom", "M0,0,C0.416,0.158,0.576,0.287,0.664,0.362,0.742,0.428,1,0.632,1,1")});
  gsap.to("body", {opacity: 0, duration: 1});
  gsap.delayedCall(1.5, (function() {
    window.location.replace('./leftGoal/leftGoal.html');}));
}))
$(".goalSplitRight").on('click', (function() {
  gsap.to("body", {scale: 40, duration: 1.5, ease: CustomEase.create("custom", "M0,0,C0.416,0.158,0.576,0.287,0.664,0.362,0.742,0.428,1,0.632,1,1")});
  gsap.to("body", {opacity: 0, duration: 1});
  gsap.delayedCall(1.5, (function() {
    window.location.replace('./rightGoal/rightGoal.html');}));
}))

/*
transform: scale(2.0);
transform-origin: 10vw 50vh;
*/
