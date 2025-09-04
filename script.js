let images =["gg.png", "metadata.png", "claude.png", "bolt.png", "youtube.png", "cl.png"]
let dirName = "./images/"

let bottom = document.getElementsByClassName("bottom")[0]

let circle = "";
let circleEnd = "></div></div>";
for ( let i =0; i<images.length-1; i++){
    circle += "<div class='circle'><div class='img'><img src='" + dirName + images[i] + circleEnd;
}

console.log(bottom)

bottom.innerHTML += circle



