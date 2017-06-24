// Get the modal
var modal = document.getElementById('disa-myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("disa-img01");
var captionText = document.getElementById("disa-caption");

var article = document.getElementsByTagName("article")[0];

var imgs = article.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("disa-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}