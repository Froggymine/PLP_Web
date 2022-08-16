function doIntroTimeline() {
  const introTimeline = gsap.timeline({
    onComplete: function() {
        $("body").removeClass('hideAll');
        gsap.to(window, {duration: 1.5, scrollTo: {y: "#introBoxPost", offsetY: 20}});
        gsap.delayedCall(1.5, (function() {
          sessionStorage.setItem("introDone", true);
        }));
    }});
  introTimeline.to("#introBox", {opacity: 1, duration: 1}, 0.4); //Fades in
  introTimeline.to("#introBox", {opacity: 0, duration: 1}, "<+=2.6"); //Fades out after a bit
  introTimeline.set("#introBox", {innerText: "This is my site for PLP"}, ">"); //Changes text
  introTimeline.to("#introBox", {opacity: 1, duration: 1}, "<+=0.6"); //Fades in
  introTimeline.to("#introBox", {opacity: 0, duration: 1}, "<+=3.4"); //Fades out after a bit
}

if (sessionStorage.getItem("introDone") === null) {
  doIntroTimeline();
} else {
  gsap.to("#coverAll", {top: 0, duration: 0});
  $("body").removeClass('hideAll');
  gsap.to(window, {duration: 0.1, scrollTo: {y: "#introBoxPost", offsetY: 20}});
  gsap.delayedCall(1.5, (function() {
    gsap.to("#coverAll", {top: "200vh", duration: 0.8});}))
}

$("#idlb0").on('mouseenter', (function() {
  gsap.to("#idlb0", {backgroundColor: "black", duration: 1});
  gsap.to("#idlb0 button", {color: "white", duration: 1});
}))
$("#idlb0").on('mouseleave', (function() {
  gsap.to("#idlb0", {backgroundColor: "white", duration: 1});
  gsap.to("#idlb0 button", {color: "black", duration: 1});
}))
$("#idlb1").on('mouseenter', (function() {
  gsap.to("#idlb1", {backgroundColor: "black", duration: 1});
  gsap.to("#idlb1 button", {color: "white", duration: 1});
}))
$("#idlb1").on('mouseleave', (function() {
  gsap.to("#idlb1", {backgroundColor: "white", duration: 1});
  gsap.to("#idlb1 button", {color: "black", duration: 1});
}))
$("#idlb2").on('mouseenter', (function() {
  gsap.to("#idlb2", {backgroundColor: "black", duration: 1});
  gsap.to("#idlb2 button", {color: "white", duration: 1});
}))
$("#idlb2").on('mouseleave', (function() {
  gsap.to("#idlb2", {backgroundColor: "white", duration: 1});
  gsap.to("#idlb2 button", {color: "black", duration: 1});
}))

function idlb0_pageExit() {
  gsap.to("#coverAll", {top: 0, duration: 0.8});
  gsap.delayedCall(0.8, (function() {
    window.location.replace('./instructions/instructions.html');
  }));
}
function idlb1_pageExit() {
  gsap.to("#coverAll", {top: 0, duration: 0.8});
  gsap.delayedCall(0.8, (function() {
    window.location.replace('./goals/goals.html');
  }));
}
function idlb2_pageExit() {
  gsap.to("#coverAll", {top: 0, duration: 0.8});
  gsap.delayedCall(0.8, (function() {
    window.location.replace('./capabilities/capabilities.html');
  }));
}
