document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    carousel();

    flatpickr("#scheduleDate", {
        dateFormat: "d-m-Y H:i",
        enableTime: true,
        minDate: "today",
        maxDate: new Date(new Date().getFullYear(), 11, 31),
        defaultDate: "today",
    });
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
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].classList.add("active");
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

