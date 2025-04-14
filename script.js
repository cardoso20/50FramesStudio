document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    // document.getElementById('currentYear').textContent = currentYear;
    carousel();
});

function Schedule() {
    $("#schedule").addClass("show");
}

function Close() {
    $("#schedule").removeClass("show");
}

var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    // x[i].classList.remove("transform");
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].classList.add("active");
//   x[myIndex-1].classList.add("transform");
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

// function ShowSection(section) {
//     if (section == "contacts") {
//         $("#" + section).css("opacity", "1");
//         $("#" + section).css("z-index", "10");
//         $(".showSection").css("opacity", "0.3");
//     }
//     else if (section == "portfolio") {
//         // $(".header").remove();
//         $(".header").css("opacity", "0");
//         $("header").css("opacity", "1");

//         $(".showSection").removeAttr('style');
//         $("#contacts").css("opacity", "0");

//         $("section").removeClass("showSection");
//         $("#" + section).addClass("showSection");
//     }
//     else if (section == "about") {
//         // $(".header").remove();
//         $(".header").css("opacity", "0");
//         $("header").css("opacity", "1");
        
//         $(".showSection").removeAttr('style');
//         $("#contacts").css("opacity", "0");

//         $("section").removeClass("showSection");
//         $("#" + section).addClass("showSection");
//     }
// }

// function HideSection(section) {
//     $("#" + section).css("opacity", "0");
//     $(".showSection").css("opacity", "1");
//     $(".showSection").removeAttr('style');
// }

// function HomePage() {
//     $(".showSection").removeAttr('style');
//     $("section").removeClass("showSection");

//     $("header").css("opacity", "0");
//     $(".header").css("opacity", "1");
// }