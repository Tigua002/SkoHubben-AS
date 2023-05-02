var x = window.matchMedia("(max-width: 600px)")


/* et globalt variabel som skal skjekke hvilken av knappene ble trykket på */
if (!x.matches) {
  var what_input = 0
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    if (n === 1) {
      what_input = 1
    } else if (n === -1) {
      what_input = -1
    }
    showDivs(slideIndex += n);
  }
  var x;
  function showDivs(n) {
    var i;

    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 5
    }


    if (n < 5) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.opacity = "0";
    x[slideIndex - 2].style.opacity = "0";
    x[slideIndex - 3].style.opacity = "0";
    x[slideIndex - 4].style.opacity = "0";
    x[slideIndex - 5].style.opacity = "0";
    if (what_input === 1) {
      for (let i = 0; i < x.length; i++) {
        document.getElementsByClassName("mySlides")[i].className = "mySlides"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let i = 0; i < x.length; i++) {
            document.getElementsByClassName("mySlides")[i].className = "mySlides changing"
            x[slideIndex - 1].style.opacity = "1";
            x[slideIndex - 1].className = "mySlides animate_in"
          }
        });
      });
    } else {
      for (let i = 0; i < x.length; i++) {
        document.getElementsByClassName("mySlides")[i].className = "mySlides"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let i = 0; i < x.length; i++) {
            document.getElementsByClassName("mySlides")[i].className = "mySlides changing_out"
            x[slideIndex - 5].className = "mySlides animate_out"
          }
        });
      });
    }

    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 2].style.display = "block";
    x[slideIndex - 3].style.display = "block";
    x[slideIndex - 4].style.display = "block";
    x[slideIndex - 5].style.display = "block";

  }





  /*all koden er samme som over, men den har anderledes variabel navn, siden jeg har 2 slideshow*/
  var what_input1 = 0
  var slideIndex2 = 1;
  showDivs1(slideIndex2);

  function plusDivs1(n) {
    if (n === 1) {
      what_input1 = 1
    } else if (n === -1) {
      what_input1 = -1
    }
    showDivs1(slideIndex2 += n);
  }
  var xx;
  function showDivs1(n) {
    var ii;
    var xx = document.getElementsByClassName("mySlides1");
    if (n > xx.length) {
      slideIndex2 = 5
    }


    if (n < 5) { slideIndex2 = xx.length }
    for (ii = 0; ii < xx.length; ii++) {
      xx[ii].style.display = "none";
    }
    xx[slideIndex2 - 1].style.opacity = "0";
    xx[slideIndex2 - 2].style.opacity = "0";
    xx[slideIndex2 - 3].style.opacity = "0";
    xx[slideIndex2 - 4].style.opacity = "0";
    xx[slideIndex2 - 5].style.opacity = "0";
    if (what_input1 === 1) {
      for (let ii = 0; ii < xx.length; ii++) {
        document.getElementsByClassName("mySlides1")[ii].className = "mySlides1"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let ii = 0; ii < xx.length; ii++) {
            document.getElementsByClassName("mySlides1")[ii].className = "mySlides1 changing"
            xx[slideIndex2 - 1].style.opacity = "1";
            xx[slideIndex2 - 1].className = "mySlides1 animate_in"
          }
        });
      });
    } else {
      for (let ii = 0; ii < xx.length; ii++) {
        document.getElementsByClassName("mySlides1")[ii].className = "mySlides1"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let ii = 0; ii < xx.length; ii++) {
            document.getElementsByClassName("mySlides1")[ii].className = "mySlides1 changing_out"
            xx[slideIndex2 - 5].className = "mySlides1 animate_out"
          }
        });
      });
    }


    xx[slideIndex2 - 1].style.display = "block";
    xx[slideIndex2 - 2].style.display = "block";
    xx[slideIndex2 - 3].style.display = "block";
    xx[slideIndex2 - 4].style.display = "block";
    xx[slideIndex2 - 5].style.display = "block";

  }


} else if (x.matches) {
  for (let spes = 0; spes < 8; spes++) {
    document.getElementById("special").remove()
  }
  var what_input = 0
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    what_input = n
    showDivs(slideIndex += n);
  }
  var x;
  function showDivs(n) {
    var i;

    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 2
    }


    if (n < 2) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.opacity = "0";
    if (what_input === 1) {
      for (let i = 0; i < x.length; i++) {
        document.getElementsByClassName("mySlides")[i].className = "mySlides"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let z = 0; z < x.length; z++) {
            document.getElementsByClassName("mySlides")[z].className = "mySlides changing"
            x[slideIndex - 1].style.opacity = "1";
            x[slideIndex - 1].className = "mySlides animate_in"
            
          }
        });
      });
    } else {
      for (let z = 0; z < x.length; z++) {
        document.getElementsByClassName("mySlides")[z].className = "mySlides"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let i = 0; i < x.length; i++) {
            document.getElementsByClassName("mySlides")[i].className = "mySlides changing_out"
            x[slideIndex - 2].className = "mySlides animate_out"
          }
        });
      });
    }

    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 2].style.display = "block";


  }





  /*all koden er samme som over, men den har anderledes variabel navn, siden jeg har 2 slideshow*/
  var what_input1 = 0
  var slideIndex2 = 1;
  showDivs1(slideIndex2);

  function plusDivs1(n) {
    what_input1 = n
    showDivs1(slideIndex2 += n);
  }
  var xx;
  function showDivs1(n) {
    var ii;
    var xx = document.getElementsByClassName("mySlides1");
    if (n > xx.length) {
      slideIndex2 = 2
    }


    if (n < 2) { slideIndex2 = xx.length }
    for (ii = 0; ii < xx.length; ii++) {
      xx[ii].style.display = "none";
    }
    xx[slideIndex2 - 1].style.opacity = "0";
    if (what_input1 === 1) {
      for (let ii = 0; ii < xx.length; ii++) {
        document.getElementsByClassName("mySlides1")[ii].className = "mySlides1"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let ii = 0; ii < xx.length; ii++) {
            document.getElementsByClassName("mySlides1")[ii].className = "mySlides1 changing"
            xx[slideIndex2 - 1].style.opacity = "1";
            xx[slideIndex2 - 1].className = "mySlides1 animate_in"
          }
        });
      });
    } else {
      for (let ii = 0; ii < xx.length; ii++) {
        document.getElementsByClassName("mySlides1")[ii].className = "mySlides1"
      }
      requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          for (let ii = 0; ii < xx.length; ii++) {
            document.getElementsByClassName("mySlides1")[ii].className = "mySlides1 changing_out"
            xx[slideIndex2 - 2].className = "mySlides1 animate_out"
          }
        });
      });
    }


    xx[slideIndex2 - 1].style.display = "block";
    xx[slideIndex2 - 2].style.display = "block";
  }
}



function show_about_us() {
  document.getElementById("about_us_packing").style.display = "flex";
}


function open_menu() {
  document.getElementById("menu_content").style.width = "100%"
  document.getElementById("header_index").style.display = "none"
}
function close_menu() {
  document.getElementById("menu_content").style.width = "0%"
  document.getElementById("header_index").style.display = "flex"
}


let touchstartX = 0
let touchendX = 0

function checkDirection() {
  if (touchendX < touchstartX - 100) {
    plusDivs(1)
  } else if (touchendX - 100 > touchstartX) {
    plusDivs(-1)
  }
}

document.getElementById("slideshow_div1").addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.getElementById("slideshow_div1").addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})


let touchstart = 0
let touchend = 0

function checkDirection1() {
  if (touchend < touchstart - 100) {
    plusDivs1(1)
  } else if (touchend - 100 > touchstart) {
    plusDivs1(-1)
  }
}

document.getElementById("slideshow_div2").addEventListener('touchstart', e => {
  touchstart = e.changedTouches[0].screenX
})

document.getElementById("slideshow_div2").addEventListener('touchend', e => {
  touchend = e.changedTouches[0].screenX
  checkDirection1()
})