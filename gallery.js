function expandImg(imgs, galNumber) {
    var expandImg = document.getElementById('imgSpot' + galNumber);
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";

    var imgText = document.getElementById('textSpot' + galNumber);
    imgText.innerHTML = imgs.alt;    
}
