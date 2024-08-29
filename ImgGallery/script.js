let fullImgBox = document.getElementById('full');
let fullpic = document.getElementById('fullpic');
function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullpic.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}