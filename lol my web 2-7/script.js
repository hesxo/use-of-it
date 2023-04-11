gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

gsap.to(".img-container", {
  scale: 20,
  scrollTrigger: {
    trigger: ".video-section",
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true,
  },
});
////1 = main content, 2 = about, 4 = news , 3 = contact
var content = 1;
var requCon = 1;
var contentTrackert = 0;

setInterval(scrollMaincon, 100);

function scrollMaincon() {
  var scrollTop = window.scrollY || window.pageYOffset;

  if (scrollTop == 0) {
    contentTrackert = 0;

    document.getElementById("main_container2").classList = "v_container d";
    //document.getElementById("main_container3").classList = "v_container d";
    document.getElementById("main_container4").classList = "v_container d";

  

  }

  if (scrollTop > 300) {
    if (contentTrackert == 0) {
      document.getElementById("main_container").classList = "v_container ";
      content = 1;
    } else {
      setTimeout(m, 1700);
      function m() {
        document.getElementById("main_container").classList = "v_container d";
      }
    }
  }

  if (scrollTop < 50) {
    document.getElementById("main_container").classList = "v_container d";
  }
}

/////
const tl = gsap.timeline();
tl.from(".left-side div", {
  y: 150,
  opacity: 0,
  stagger: {
    amount: 0.4, //
  },
  delay: 0.5,
}).from(".right-side", { duration: 2 }, 0.5);
ScrollTrigger.create({
  animation: tl,
  trigger: ".wrapper",
  scrub: 1,
  pin: true,
});

gsap.to(".txt-bottom", {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2,
  },
});

const timeline = gsap.timeline();
timeline.from(".span1", {
  x: -100,
  duration: 0.4,
});
timeline.from(".span2", {
  x: -200,
  duration: 0.4,
});
timeline.from(".span3", {
  x: -300,
  duration: 0.4,
});
gsap.to(".left1", {
  autoAlpha: 0,
  x: -650,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".left2", {
  autoAlpha: 0,
  x: -600,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to(".left3", {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1,
  },
});

//var ContentTracker = 0;

const scrollButton = document.getElementById("scroll-button");
const scrollButtonNews = document.getElementById("scroll-button3");
//const scrollButton2 = document.getElementById("scroll-button2");
const scrollButtonHome = document.getElementById("scroll-buttonHome");

scrollButton.addEventListener("click", () => {
  contentTrackert = 1;
  requCon = 2;
 

  var scrollTop = (scrollTop = window.scrollY || window.pageYOffset);
  if (scrollTop <= 50) {


    document.getElementById("main_container").classList = "v_container d";
    document.getElementById("main_container2").classList = " v_container ";
    content = 2;
    document.getElementById("main_container4").classList = "v_container d";
    document.getElementById("main_container3").classList = " v_container d";


    const targetPosition = 500;
    const duration = 1700; // 1 second duration for the animation
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  } else {

if(requCon == content){
//////
    const targetPosition = 500;
    const duration = 1000; // 1 second duration for the animation
    const startPosition = targetPosition;
    const distance = -startPosition;
    const startTime = performance.now();
    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);

    setTimeout(togl2, 1500);
    function togl2() {
    
      if (scrollTop <= 50) {
        document.getElementById("main_container").classList = "v_container ";
        content = 1;
        document.getElementById("main_container2").classList = " v_container d";
       // document.getElementById("main_container3").classList = " v_container d";
        document.getElementById("main_container4").classList = "v_container d";
      }
    }
////


  }else if(content == 1){

    document.getElementById("main_container").classList = "v_container da2";
  setTimeout(m,500);

    function m(){
      document.getElementById("main_container").classList = "v_container d";
    }

    document.getElementById("main_container2").classList = " v_container ";
    content = 2;
  }else if(content == 4){
    document.getElementById("main_container4").classList = "v_container da";
    setTimeout(m,500);
    function m(){
      document.getElementById("main_container4").classList = "v_container d";
    }
   

    document.getElementById("main_container2").classList = " v_container ";
    content = 2;

  }


  }
});
//////
scrollButtonHome.addEventListener("click", () => {
  window.location.reload();
});


////Hesxo/MILLE
scrollButtonNews.addEventListener("click", () => {
  contentTrackert = 1;
  requCon = 4;


  var scrollTop = window.scrollY || window.pageYOffset;

  if (scrollTop <= 50) {
    document.getElementById("main_container").classList = "v_container d";
    document.getElementById("main_container2").classList = " v_container d";
   // document.getElementById("main_container3").classList = " v_container d";
    document.getElementById("main_container4").classList = " v_container";
    content = 4;
    const targetPosition = 500;
    const duration = 1700;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  } else {
    if(requCon == content){
    const targetPosition = 500;
    const duration = 1000;
    const startPosition = targetPosition;
    const distance = -startPosition;
    const startTime = performance.now();

    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);

    setTimeout(togl, 1500);
    function togl() {
      
      if (scrollTop <= 50) {
        document.getElementById("main_container").classList = "v_container ";
        content = 1;
        document.getElementById("main_container2").classList = " v_container d";
       // document.getElementById("main_container3").classList = "v_container d";
        document.getElementById("main_container4").classList = "v_container d";
      }
    }
  }else if(content == 1){

    document.getElementById("main_container").classList = "v_container da2";
  setTimeout(m,500);
  
    function m(){
      document.getElementById("main_container").classList = "v_container d";
    }
    document.getElementById("main_container4").classList = " v_container ";
    content = 4;
  }else if(content == 2){
    document.getElementById("main_container2").classList = "v_container da2";
    setTimeout(m,500);
  
    function m(){
      document.getElementById("main_container2").classList = "v_container d";
    }
  
    document.getElementById("main_container4").classList = " v_container ";
    content = 4;
  }

  
  }
});

///////////////////////
function go() {
  contentTrackert = 1;
  var scrollTop = window.scrollY || window.pageYOffset;
  if (scrollTop < 50) {
    setTimeout(toHome2, 200);
    function toHome2() {
      document.getElementById("main_container").classList = "v_container d";
      document.getElementById("main_container2").classList = " v_container d";
     // document.getElementById("main_container3").classList = " v_container d";
      document.getElementById("main_container4").classList = " v_container d";
      document.getElementById("main_container5").classList = " v_containerlogo";
    }
    const targetPosition = 500;
    const duration = 2000;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);

    setInterval(sayHello, 10);
    function sayHello() {
      var scrollTop = window.scrollY || window.pageYOffset;

      if (scrollTop > 100) {
        //  document.getElementById("main_container5").classList = " v_containerlogo ";
        //  document.getElementById("n").classList = "d";
        //
        //  document.getElementById(" mainlogoconid").classList = " mainlogocon";
      } else {
        /// document.getElementById("main_container5").classList = " v_container d";
        // document.getElementById(" mainlogoconid").classList = " mainlogocon d";
        //  document.getElementById("n").classList = "navbar";
        // document.getElementById("v").classList = "video-container";
        // document.getElementById("main_container").classList = "v_container ";
      }
    }
  }
  setTimeout(toHome, 2000);
  function toHome() {
    setTimeout(toHome2, 1000);

    function toHome2() {
      document.getElementById("main_container").classList = "v_container ";
      document.getElementById("main_container2").classList = " v_container d";
      //document.getElementById("main_container3").classList = " v_container d";
      document.getElementById("main_container4").classList = " v_container d";
      document.getElementById("main_container5").classList = " v_container d";
    }
    const targetPosition = 500;
    const duration = 1000;
    const startPosition = targetPosition;
    const distance = -startPosition;
    const startTime = performance.now();

    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const scrollProgress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollPosition);
      if (scrollProgress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);

    setTimeout(togl, 1500);
    function togl() {
      document.getElementById("main_container").classList = "v_container d";
      document.getElementById("main_container2").classList = " v_container d";
     // document.getElementById("main_container3").classList = "v_container d";
      document.getElementById("main_container4").classList = "v_container d";
    }
  }
}

//////////////////////////////////////////
function EducationContent() {
  window.location = "education.html";
}
function bankingContent() {
  window.location = "banking.html";
}
function Agriculture(){
  window.location = "Agriculture.html";
}

function Healthcare() {
  window.location = "healthcare.html";
}

function Transportation(){
  window.location = "Transportation.html";
}
function Construction() {
  window.location = "construction.html";
}
function Communication() {
  window.location = "Communication.html";
}

function Business() {
  window.location = "Business.html";
}
function Entertainment() {
  window.location = "Entertainment.html";
}

function Militery(){
  window.location = "Military.html";
}

function Sports(){
  window.location = "Sports.html";
}

function Tourism(){
  window.location = "Tourism.html";
}


function sendEmail() {

  var name = document.getElementById("name").value;
var messageText = document.getElementById("message").value;

//public key//....
  emailjs.init('LA-yOhL_M4eQBdak3');

  // Prepare the template parameters
  const templateParams = {
    from_name: name,
    message: messageText,
  };

  // Send the email using EmailJS
  emailjs.send('service_rinq79s', 'template_0wbj75c', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("The message was successfully sent!");
      window.location.reload();
    }, function(error) {
      console.log('FAILED...', error);
    });
}
