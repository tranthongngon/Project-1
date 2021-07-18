let display_search = document.querySelector(".js-search-toggle");
let offcanvas_sub = document.querySelector(".js-toggle-submenu");
let offcanvas = document.querySelector(".js-offcanvas");
let remove_offcanvas = document.querySelector(".js-remove-offcanvas");
let btn_offcanvas = document.querySelector(".js-btn-offcanvas");
let close_offcanvas = document.querySelector(".js-close");


display_search.addEventListener("click", function () {
    let search_box = document.querySelector(".search-box-inner");
    search_box.classList.toggle("display");
});


offcanvas_sub.addEventListener("click", function (event) {
    event.preventDefault();
    let submenu = document.querySelector(".js-toggle-submenu .submenu");
    if (!submenu.classList.contains("active")) {
        submenu.classList.add("active");
        submenu.style.height = "auto";

        var height = submenu.clientHeight + "px";
        submenu.style.height = "0px";

        setTimeout(function () {
            submenu.style.height = height;
        }, 0);
    } else {
        submenu.style.height = "0px";
        submenu.addEventListener(
            "transitionend",
            function () {
                submenu.classList.remove("active");
            },
            {
                once: true,
            }
        );
    }
});

btn_offcanvas.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvas.classList.add("active");
    remove_offcanvas.classList.add("active")
})


remove_offcanvas.addEventListener('click', Remove);
close_offcanvas.addEventListener('click',Remove);

function Remove(e) {
    e.preventDefault();
    offcanvas.classList.remove("active");
    remove_offcanvas.classList.remove("active");
}
