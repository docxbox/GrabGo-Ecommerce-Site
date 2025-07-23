var images = ['images/banner 1.jpg', 'images/banner 2.png', 'images/banner 3.png'];
var x=0;
var imgs=document.getElementById("slide").getElementsByTagName("img")[0];
setInterval(slider,2000);

function slider(){
    imgs.src=images[x]
    x = x+1;
    if(x >= images.length){
        x=0;
    }
};

function notify() {
    
        alert("Item added to cart");
   }