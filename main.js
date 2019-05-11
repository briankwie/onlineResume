showHideGit.onclick = function() {
    var testGit = document.getElementById('gitDescript');
    var x = document.getElementsByClassName("detailsGit");
    var i;
    if 
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle("block");
    }
}

// Get the modal
var awsModal = document.getElementById('awsModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var awsImg = document.getElementById('awsImg');
var awsModalImg = document.getElementById("img02");
var awsCaptionText = document.getElementById("awsCaption");
awsImg.onclick = function(){
  awsModal.style.display = "block";
  awsModalImg.src = this.src;
  awsCaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var awsSpan = document.getElementById("awsClose");

// When the user clicks on <span> (x), close the modal
awsSpan.onclick = function() {
  awsModal.style.display = "none";
}

// Get the modal
var ovpnModal = document.getElementById('ovpnModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var ovpnImg = document.getElementById('ovpnImg');
var ovpnModalImg = document.getElementById("img03");
var ovpnCaptionText = document.getElementById("ovpnCaption");
ovpnImg.onclick = function(){
  ovpnModal.style.display = "block";
  ovpnModalImg.src = this.src;
  ovpnCaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var ovpnSpan = document.getElementById("ovpnClose");

// When the user clicks on <span> (x), close the modal
ovpnSpan.onclick = function() {
  ovpnModal.style.display = "none";
}

// Get the modal
var algoModal = document.getElementById('algoModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var algoImg = document.getElementById('algoImg');
var algoModalImg = document.getElementById("img04");
var algoCaptionText = document.getElementById("algoCaption");
algoImg.onclick = function(){
  algoModal.style.display = "block";
  algoModalImg.src = this.src;
  algoCaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var algoSpan = document.getElementById("algoClose");

// When the user clicks on <span> (x), close the modal
algoSpan.onclick = function() {
  algoModal.style.display = "none";
}
