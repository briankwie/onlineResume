jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

// Get the modal
var modal = document.getElementById('lpiModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('lpiImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("lpiCaption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById('lpiModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('lpiImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("lpiCaption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var lpiModal = document.getElementById('lpiModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var lpiImg = document.getElementById('lpiImg');
var lpiModalImg = document.getElementById("img01");
var lpiCaptionText = document.getElementById("lpiCaption");
lpiImg.onclick = function(){
  lpiModal.style.display = "block";
  lpiModalImg.src = this.src;
  lpiCaptionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  lpiModal.style.display = "none";
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
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
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
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
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
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  algoModal.style.display = "none";
}

