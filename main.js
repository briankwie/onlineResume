function showHideGit() {
    var testGit = document.getElementById('gitDescript');
    var x = document.getElementsByClassName("detailsGit");
    var i;
    if (testGit.style.display == "none") {
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle("block");
    }
    }
}
