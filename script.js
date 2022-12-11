function ShowSection(section) {
    if (section == "contacts") {
        $("#" + section).css("opacity", "1");
        $("#" + section).css("z-index", "10");
        $(".showSection").css("opacity", "0.3");
    }
    else if (section == "portfolio") {
        // $(".header").remove();
        $(".header").css("opacity", "0");
        $("header").css("opacity", "1");

        $(".showSection").removeAttr('style');
        $("#contacts").css("opacity", "0");

        $("section").removeClass("showSection");
        $("#" + section).addClass("showSection");
    }
    else if (section == "about") {
        // $(".header").remove();
        $(".header").css("opacity", "0");
        $("header").css("opacity", "1");
        
        $(".showSection").removeAttr('style');
        $("#contacts").css("opacity", "0");

        $("section").removeClass("showSection");
        $("#" + section).addClass("showSection");
    }
}

function HideSection(section) {
    $("#" + section).css("opacity", "0");
    $(".showSection").css("opacity", "1");
    $(".showSection").removeAttr('style');
}

function HomePage() {
    $(".showSection").removeAttr('style');
    $("section").removeClass("showSection");

    $("header").css("opacity", "0");
    $(".header").css("opacity", "1");
}