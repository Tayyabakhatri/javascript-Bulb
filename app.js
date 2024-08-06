var img = document.getElementById("img")
console.log(img)

function onBulb(){
img.src="images/images.png"
document.getElementById("off").disabled=false
}
function offBulb(){
    img.src="images/images(1).png"
    document.getElementById("on").disabled=false
}