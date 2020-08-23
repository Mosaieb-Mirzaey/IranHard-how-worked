

let searchBox = document.querySelector("#search-box");
let search = document.querySelector("header .search");
let navbarNav = document.querySelector("#navbarNav");

search.addEventListener("click", function (){
    if (searchBox.classList.contains("deactivate")){
        navbarNav.classList.remove("show")
        searchBox.classList.remove("deactivate");
        searchBox.classList.add("activate")
    }else {
        searchBox.classList.remove("activate");
        searchBox.classList.add("deactivate");
        navbarNav.classList.remove("show")
    }
})


