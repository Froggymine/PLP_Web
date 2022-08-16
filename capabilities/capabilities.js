let introAni = gsap.to("#coverAll", {top: "-200vh", duration: 0.8});
introAni.delay(0.8)

function backPage() {
  gsap.to("#coverAll", {top: "0vh", duration: 0.8});
  gsap.delayedCall(0.8, (function() {
    window.location.replace('../index.html');}))
}



const menuList = ["#menuI_0", "#menuI_1", "#menuI_2", "#menuI_3", "#menuI_4"];
const menuListTop = ["#menuI_0_top", "#menuI_1_top", "#menuI_2_top", "#menuI_3_top", "#menuI_4_top"];
const menuListBot = ["#menuI_0_bot", "#menuI_1_bot", "#menuI_2_bot", "#menuI_3_bot", "#menuI_4_bot"];
const menuListBotRef = ["#menuI_0_bot_ref", "#menuI_1_bot_ref", "#menuI_2_bot_ref", "#menuI_3_bot_ref", "#menuI_4_bot_ref"];
const menuListBotBot = ["#menuI_0_bot_bot", "#menuI_1_bot_bot", "#menuI_2_bot_bot", "#menuI_3_bot_bot", "#menuI_4_bot_bot"];
var menuOn = 0; //which capability it's on
var unexpandButtonEnabled = false;
const menuNum = menuList.length; //how many elements in menu
const cyt = 0.5; //CYCLE TIME
const menuHovT = 0.5;
const mOutTop = "10vh";
const mSpace0 = "25vh";
const mSpace1 = "40vh";
const mSpace2 = "55vh";
const mOutBottom = "70vh";


for (i in menuList) {
  gsap.to(menuList[i], {opacity: 0, duration: 0});
}

gsap.to(menuList[menuList.length - 1], {y: mSpace0, duration: 0})
gsap.to(menuList[menuList.length - 1], {opacity: 0.4, duration: cyt});
gsap.to(menuList[0], {y: mSpace1, duration: 0})
gsap.to(menuList[0], {opacity: 1, duration: cyt});
gsap.to(menuList[1], {y: mSpace2, duration: 0})
gsap.to(menuList[1], {opacity: 0.4, duration: cyt});

$(menuList[0]).on('mouseenter', (function() {
  gsap.to(menuList[0], {backgroundColor: "black", duration: menuHovT});
  gsap.to(menuList[0], {color: "white", duration: menuHovT});
}))
$(menuList[0]).on('mouseleave', (function() {
  gsap.to(menuList[0], {backgroundColor: "white", duration: menuHovT});
  gsap.to(menuList[0], {color: "black", duration: menuHovT});
}))

$("#upArrowContainer").on('click', (function() {
  cycleMenu(0);
}))
$("#downArrowContainer").on('click', (function() {
  cycleMenu(1);
}))


function getMenu(direction, menuAt) {
  //direction = 0 for up and 1 for down
  if (direction == 1) {
    if (menuAt + 1 > menuNum - 1) {
      menuAt = 0 + Math.max(0,((-1*(menuNum-1))+menuAt));
    } else {
      menuAt += 1;
    }
  } else {
    //ISSUE IS HERE, BASED ON THE VALUE OF afterMenuUp BEING 1 EXTRA OVER SO FUCKS UP THE
    //RESET TO 0, CHECK ABOVE ONE AS THAT HAD THE SAME ISSUE BUT GOT FIXED WITH THE LONG EQUATION
    console.log(Math.max(0,((-1*(menuNum-1))-menuAt)))
    if (menuAt - 1 < 0) {
      menuAt = menuNum - 1;
    } else {
      menuAt -= 1;
    }
  }
  return menuAt;
}

/*
FOR DOWN:

nothing   x
oldOldMenu
oldMenu -----
newMenu
afterMenu x
*/

function cycleMenu(direction) {
  let oldOldMenu = getMenu(!direction, menuOn);
  let oldMenu = menuOn;
  let newMenu = getMenu(direction, menuOn);
  let afterMenuDown = getMenu(direction, menuOn+1);
  let afterMenuUp = getMenu(direction, menuOn-1);
  menuOn = newMenu;

  if (direction == 1) {
    //MENUS GO DOWN

    //Move oldOldMenu out
    gsap.to(menuList[oldOldMenu], {y: mOutTop, duration: cyt});
    gsap.to(menuList[oldOldMenu], {opacity: 0, duration: cyt});

    //Move oldMenu up to fade
    gsap.to(menuList[oldMenu], {y: mSpace0, duration: cyt});
    gsap.to(menuList[oldMenu], {opacity: 0.4, duration: cyt});

    //Move newMnu up to full
    gsap.to(menuList[newMenu], {y: mSpace1, duration: cyt});
    gsap.to(menuList[newMenu], {opacity: 1, duration: cyt});

    //Move afterMenu to fade
    gsap.set(menuList[afterMenuDown], {y: mOutBottom});
    gsap.to(menuList[afterMenuDown], {y: mSpace2, duration: cyt});
    gsap.to(menuList[afterMenuDown], {opacity: 0.4, duration: cyt});

  } else {
    //MENUS GO UP

    //Move oldOldMenu out
    gsap.to(menuList[oldOldMenu], {y: mOutBottom, duration: cyt});
    gsap.to(menuList[oldOldMenu], {opacity: 0, duration: cyt});

    //Move oldMenu up to fade
    gsap.to(menuList[oldMenu], {y: mSpace2, duration: cyt});
    gsap.to(menuList[oldMenu], {opacity: 0.4, duration: cyt});

    //Move newMnu up to full
    gsap.to(menuList[newMenu], {y: mSpace1, duration: cyt});
    gsap.to(menuList[newMenu], {opacity: 1, duration: cyt});

    //Move afterMenu to fade
    gsap.set(menuList[afterMenuUp], {y: mOutTop});
    gsap.to(menuList[afterMenuUp], {y: mSpace0, duration: cyt});
    gsap.to(menuList[afterMenuUp], {opacity: 0.4, duration: cyt});

  }

  $(menuList[oldMenu]).off();

  $(menuList[menuOn]).on('mouseenter', (function() {
    gsap.to(menuListTop[menuOn], {backgroundColor: "black", duration: menuHovT});
    gsap.to(menuListTop[menuOn], {color: "white", duration: menuHovT});
  }))
  $(menuList[menuOn]).on('mouseleave', (function() {
    gsap.to(menuListTop[menuOn], {backgroundColor: "white", duration: menuHovT});
    gsap.to(menuListTop[menuOn], {color: "black", duration: menuHovT});
  }))

  $(menuList[menuOn]).on('click', (function() {
    $(menuList[menuOn]).off("mouseenter");
    $(menuList[menuOn]).off("mouseleave");
    $("#downArrowContainer").off("click");
    $("#upArrowContainer").off("click");
    gsap.to(menuList[oldMenu], {opacity: 0, duration: menuHovT});
    gsap.to(menuListTop[menuOn], {backgroundColor: "white", duration: menuHovT});
    gsap.to(menuListTop[menuOn], {color: "black", duration: menuHovT});
    if (direction == 1) {
      gsap.to(menuList[afterMenuDown], {opacity: 0, duration: menuHovT});
    } else {
      gsap.to(menuList[afterMenuUp], {opacity: 0, duration: menuHovT});
    }
    gsap.delayedCall(menuHovT, (function() {
      gsap.to(menuList[menuOn], {y: "15vh", duration: cyt}); //Y WAS 25VH
    }))
    gsap.delayedCall(menuHovT*1.5, (function() {
      gsap.to((menuListBot[menuOn]), {height: "40vh", duration: cyt});
      gsap.to((menuListBotRef[menuOn]), {opacity: 1, duration: cyt/4});
    }))
    gsap.delayedCall(menuHovT*3, (function() {
      gsap.to((menuListBotBot[menuOn]), {opacity: 1, duration: cyt/3});
      gsap.to("#unexpandArrowContainer", {opacity: 1, duration: cyt/6});
      unexpandButtonEnabled = true;
    }))
  }));

  $("#unexpandArrowContainer").on('click', (function() {
    if (unexpandButtonEnabled == true) {

      gsap.to((menuListBotBot[menuOn]), {opacity: 0, duration: cyt/6});
      gsap.to("#unexpandArrowContainer", {opacity: 0, duration: cyt/10});
      gsap.delayedCall(menuHovT, (function() {
        gsap.to((menuListBot[menuOn]), {height: 0, duration: cyt/2});
        gsap.to((menuListBotRef[menuOn]), {opacity: 0, duration: cyt/8});
      }))
      gsap.delayedCall(menuHovT*1.5, (function() {
        gsap.to(menuList[menuOn], {y: mSpace1, duration: cyt/2}); //Y WAS 25VH
      }))
      gsap.delayedCall(menuHovT*1.5+cyt/2, (function() {
        $(menuList[menuOn]).on('mouseenter', (function() {
          gsap.to(menuListTop[menuOn], {backgroundColor: "black", duration: menuHovT});
          gsap.to(menuListTop[menuOn], {color: "white", duration: menuHovT});
        }))
        $(menuList[menuOn]).on('mouseleave', (function() {
          gsap.to(menuListTop[menuOn], {backgroundColor: "white", duration: menuHovT});
          gsap.to(menuListTop[menuOn], {color: "black", duration: menuHovT});
        }))
        $("#upArrowContainer").on('click', (function() {
          cycleMenu(0);
        }))
        $("#downArrowContainer").on('click', (function() {
          cycleMenu(1);
        }))
        gsap.to(menuList[oldMenu], {opacity: 1, duration: menuHovT});
        gsap.to(menuListTop[menuOn], {backgroundColor: "white", duration: menuHovT});
        gsap.to(menuListTop[menuOn], {color: "black", duration: menuHovT});
        if (direction == 1) {
          gsap.to(menuList[afterMenuDown], {opacity: 1, duration: menuHovT});
        } else {
          gsap.to(menuList[afterMenuUp], {opacity: 1, duration: menuHovT});
        }
      }))
    }
  }));
}


/*

#unexpandArrowContainer




*/





//WHEN YOU CLICK ONE OF THE CAPABILITIES IT EXPANDS TO FIT FULLY, BACK BUTTON IS ON IT, ON A CORNER
//THEY GO BLACK ON HOVER
